import bcrypt from "bcrypt";
import { insertUser, findByEmail, profileQuery, editProfileQuery} from "../db/user.query.js";
import { generateToken } from "../utils/generateToken.js";
import { ApiError } from "../utils/AppError.js";

// registering a new user
export async function registerUser(name, email, password) {
  const result = await findByEmail(email)
  if(result){
    throw new ApiError(409, "Email already exists")
  }
  const hashPassword = await bcrypt.hash(password, 10);
  return await insertUser(name, email, hashPassword);
}

//finding email and comparing hash password with plain password
export async function loginUser(email, password) {
  const user = await findByEmail(email);
  if (!user) {
    throw new ApiError(401,"Invalid credential!");
  }
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    throw new ApiError(401, "Invalid Password");
  }
  return generateToken(user);
}

export async function profileService(user_id){
  const result = await profileQuery(user_id)
  if(!result){
    throw new ApiError(404, "Profile not found!")
  }
  return result
}

export async function editProfileService(user_id, editFields){
  const incomingProfile = Object.entries(editFields).filter(([_,val])=>
    val !== undefined
  )
  console.log(incomingProfile)
  if(incomingProfile.length == 0){
    throw new ApiError(400, "Invalid data!")
  }
  const result = await editProfileQuery(user_id, incomingProfile)
  if(!result){
    throw new ApiError(404, "Profile data not found!")
  }
  return result
}