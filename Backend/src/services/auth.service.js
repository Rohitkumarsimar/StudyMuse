import bcrypt from "bcrypt";
import { insertUser, findByEmail } from "../db/user.query.js";
import { generateToken } from "../utils/generateToken.js";

// registering a new user
export async function registerUser(name, email, password) {
  const result = await findByEmail(email)
  if(result){
    throw new Error("Email existed already!")
  }
  const hashPassword = await bcrypt.hash(password, 10);
  return await insertUser(name, email, hashPassword);
}

//finding email and comparing hash password with plain password
export async function loginUser(email, password) {
  const user = await findByEmail(email);
  if (!user) {
    throw new Error("Invalid credential!");
  }
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) {
    throw new Error("Invalid Password!");
  }
  return generateToken(user);
}
