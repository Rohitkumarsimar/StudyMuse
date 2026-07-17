import bcrypt from "bcrypt";
import {
  insertUser,
  findByEmail,
  findByGoogleId,
  profileQuery,
  editProfileQuery,
} from "../db/user.query.js";
import { generateToken } from "../utils/generateToken.js";
import { ApiError } from "../utils/AppError.js";
import { generateOtp, hashOtp, verifyOtp } from "../utils/otp.js";
import { OtpType } from "@prisma/client";
import { sendEmail } from "../utils/sendEmail.js";
import { verifyGoogleToken } from "../utils/googleAuth.js";

// registering a new user
export async function registerUser(name, email, password) {
  const user = await findByEmail(email);
  if (user) {
    throw new ApiError(409, "Email already exists");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const otp = generateOtp();
  const hashedOtp = await hashOtp(otp);
  const otpType = "VERIFY_EMAIL";
  const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
  const html = `
    <h2>StudyMuse Verification</h2>
    <p>Your OTP is:</p>
    <h1>${otp}</h1>
    <p>This OTP is valid for 5 minutes.</p>
`;
  const subject = "StudyMuse - Verify Your Email";
  const result = await insertUser({
    name,
    email,
    hashPassword,
    hashedOtp,
    otpExpiresAt,
    otpType,
  });

  await sendEmail(email, subject, html);
  return result;
}

//login: finding email and comparing hash password with plain password
export async function loginUser(email, password) {
  const user = await findByEmail(email);
  if (!user) {
    throw new ApiError(401, "Invalid credential!");
  }
  if (user.isVerified === false) {
    throw new ApiError(
      403,
      "Please verify your email address!",
      "EMAIL_NOT_VERIFIED",
    );
  }
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    throw new ApiError(401, "Invalid Password");
  }
  return { token: generateToken(user), isVerified: user.isVerified };
}

//fetch profile
export async function profileService(user_id) {
  console.log(user_id);
  const result = await profileQuery(user_id);
  console.log(result);
  if (!result) {
    throw new ApiError(404, "Profile not found!");
  }
  return result;
}

//update profile
export async function profileUpdateService(user_id, editFields) {
  try {
    const findDuplicate = await profileQuery(user_id);
    if (
      findDuplicate.name === editFields.name ||
      findDuplicate.email === editFields.email
    ) {
      throw new ApiError(400, "Name or Email can't be same as old!");
    }

    const result = await editProfileQuery(user_id, editFields);
    return { name: result.name, email: result.email };
  } catch (err) {
    if (err.code === "P2002") throw new ApiError(400, "Email already exists!");
    throw err;
  }
}

// password reset otp generation service
export async function passwrodResetOtpService(email) {
  const user = await findByEmail(email);
  if (!user) {
    throw new ApiError(404, "User not found!");
  }
  const user_id = user.id;
  const otp = generateOtp();
  const hashedOtp = await hashOtp(otp);
  const otpType = "PASSWORD_RESET";
  const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
  const html = `
    <h2>StudyMuse Verification</h2>
    <p>Your OTP is:</p>
    <h1>${otp}</h1>
    <p>This OTP is valid for 5 minutes.</p>
`;
  const subject = "StudyMuse - Password reset";
  await editProfileQuery(user_id, {
    otp: hashedOtp,
    otpType: otpType,
    otpExpiresAt: otpExpiresAt,
  });

  await sendEmail(email, subject, html);
  return;
}

//reset password
export async function passwrodResetService(email, password) {
  const user = await findByEmail(email);
  if (!user) {
    throw new ApiError(404, "User not found!");
  }
  const user_id = user.id;
  if (user.canResetPassword === false) {
    throw new ApiError(400, "OTP is not verified!");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await editProfileQuery(user_id, {
    password: hashedPassword,
    canResetPassword: false,
  });
  return;
}

// verify email otp service
export async function verifyOtpService(email, otp) {
  const user = await findByEmail(email);
  if (!user) {
    throw new ApiError(400, "Email doesn't exist!");
  }
  if (!user.otp) {
    throw new ApiError(404, "OTP doesn't exist!");
  }
  if (Date.now() > user.otpExpiresAt.getTime()) {
    throw new ApiError(400, "OTP expired!");
  }
  const isMatched = await verifyOtp(otp, user.otp);
  const user_id = user.id;
  if (isMatched === false) {
    throw new ApiError(400, "Please enter valid OTP!");
  }
  if (!user.otpType) {
    throw new ApiError(400, "OTP session not found!");
  }

  if (user.otpType === "VERIFY_EMAIL") {
    return await editProfileQuery(user_id, {
      otp: null,
      otpType: null,
      otpExpiresAt: null,
      isVerified: true,
    });
  }

  if (user.otpType === "PASSWORD_RESET") {
    return await editProfileQuery(user_id, {
      otp: null,
      otpType: null,
      otpExpiresAt: null,
      canResetPassword: true,
    });
  }
}

// resend OTP service
export async function resendOtpService(email, type) {
  const user = await findByEmail(email);
  if (!user) {
    throw new ApiError(404, "User not found!");
  }

  const user_id = user.id;
  const otp = generateOtp();
  const hashedOtp = await hashOtp(otp);
  const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
  const html = `
    <h2>StudyMuse Verification</h2>
    <p>Your OTP is:</p>
    <h1>${otp}</h1>
    <p>This OTP is valid for 5 minutes.</p>
`;
  const subject = "StudyMuse - new OTP";

  if (user.isVerified === true && type === "VERIFY_EMAIL") {
    throw new ApiError(409, "User already verified");
  }
  const updateOtpDb = await editProfileQuery(user_id, {
    otp: hashedOtp,
    otpType: type,
    otpExpiresAt: otpExpiresAt,
  });

  await sendEmail(email, subject, html);
}

// Google Auth
export async function googleAuthService(idToken) {
  const payload = await verifyGoogleToken(idToken);
  const googleUser = await findByGoogleId(payload.sub);

  if (googleUser) {
    return generateToken(googleUser);
  }
  const user = await findByEmail(payload.email);
  if (user) {
    const updateUser = await editProfileQuery(user.id, {
      googleId: payload.sub,
      isVerified: true,
    });
    return generateToken(updateUser);
  }

  if (!user) {
    const register = await insertUser({
      name: payload.name,
      email: payload.email,
      password: null,
      googleId: payload.sub,
      isVerified: true,
    });
    return generateToken(register);
  }
}
