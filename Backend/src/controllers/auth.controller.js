import {
  registerUser,
  loginUser,
  profileService,
  profileUpdateService,
  verifyOtpService,
  passwrodResetOtpService,
  passwrodResetService,
  resendOtpService,
  googleAuthService
} from "../services/auth.service.js";
import { response } from "../utils/apiResponse.js";

//registering the user
export async function register(req, res, next) {
  const { name, email, password } = req.body;
  const normalizedEmail = email.trim().toLowerCase();
  const result = await registerUser(name, normalizedEmail, password);
  response(res, 201, result, "User created successfully.");
}

//logging in the user
export async function login(req, res, next) {
  const { email, password } = req.body;
  const normalizedEmail = email.trim().toLowerCase();
  const result = await loginUser(normalizedEmail, password);
  response(res, 200, result, "Login successfully");
}

// fetching profile
export async function profileController(req, res, next) {
  const user_id = req.user.id;
  const result = await profileService(user_id);
  response(res, 200, result, "Profile fetched");
}

// editing profile
export async function editProfileController(req, res, next) {
  const user_id = req.user.id;
  const { name, email } = req.body;
  const normalizedEmail = email?.trim().toLowerCase();
  const editFields = { name, normalizedEmail };
  const result = await profileUpdateService(user_id, editFields);

  response(res, 200, result, "Profile edited successfully");
}

// Password reset otp generation controller
export async function passwordResetOtpController(req, res, next) {
  const email = req.body.email;
  const normalizedEmail = email.trim().toLowerCase();
  const result = await passwrodResetOtpService(normalizedEmail);
  response(res, 200, result, "OTP generated successfully");
}

// Password reset controller
export async function passwordResetController(req, res, next) {
  const { email, password } = req.body;
  const normalizedEmail = email.trim().toLowerCase();
  const result = await passwrodResetService(normalizedEmail, password);

  response(res, 200, result, "Password reset successfully");
}

// verification via otp
export async function verifyOtpController(req, res, next) {
  const { email, otp } = req.body;
  const normalizedEmail = email.trim().toLowerCase();
  const result = await verifyOtpService(normalizedEmail, otp);

  response(res, 200, result, "OTP verified successfully");
}

// resend otp controller
export async function resendOtpController(req, res, next) {
  const { email, type } = req.body;
  const normalizedEmail = email.trim().toLowerCase();
  const result = await resendOtpService(normalizedEmail, type);

  response(res, 200, result, "OTP resent successfully");
}


//google auth controller
export async function googleAuthController(req, res, next){
  const idToken = req.body.idToken
 const result = await googleAuthService(idToken)

 response(res, 200, result, "Google login successful")
}