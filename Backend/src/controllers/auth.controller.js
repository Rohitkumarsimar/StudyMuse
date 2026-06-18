import { registerUser, loginUser } from "../services/auth.service.js";

export async function register(req, res, next) {
    const { name, email, password } = req.body;
    const result = await registerUser(name, email, password);
    res.status(201).json(result);
}  

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}
