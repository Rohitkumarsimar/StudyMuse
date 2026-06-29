import bcrypt from "bcrypt";
import {
  insertUser,
  findByEmail,
  profileQuery,
  editProfileQuery,
} from "../db/user.query.js";
import { generateToken } from "../utils/generateToken.js";
import { ApiError } from "../utils/AppError.js";

// registering a new user
export async function registerUser(name, email, password) {
  const result = await findByEmail(email);
  if (result) {
    throw new ApiError(409, "Email already exists");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  return await insertUser(name, email, hashPassword);
}

//finding email and comparing hash password with plain password
export async function loginUser(email, password) {
  const user = await findByEmail(email);
  if (!user) {
    throw new ApiError(401, "Invalid credential!");
  }
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    throw new ApiError(401, "Invalid Password");
  }
  return generateToken(user);
}

export async function profileService(user_id) {
  const result = await profileQuery(user_id);
  if (!result) {
    throw new ApiError(404, "Profile not found!");
  }
  return result;
}

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
    return result;
  } 
  catch (err) {
    if (err.code === "P2002") throw new ApiError(400, "Email already exists!");
    throw err;
  }
}
