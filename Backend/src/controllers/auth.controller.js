import { registerUser, loginUser } from "../services/auth.service.js";
import { response } from "../utils/apiResponse.js";

export async function register(req, res, next) {
  const { name, email, password } = req.body;
  const result = await registerUser(name, email, password);
  response(res, 201, result, "User created successfully.");
}

export async function login(req, res, next) {
  const { email, password } = req.body;
  const result = await loginUser(email, password);
  response(res, 200, result, "Login successfully");
}
