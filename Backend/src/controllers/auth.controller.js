import { registerUser } from "../services/auth.service.js";

export async function register(req, res, next){
    const {name, email, password} = req.body;
    const result = await registerUser(name, email, password);
    res.status(201).json(result)
}