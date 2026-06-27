import { registerUser, loginUser, profileService,  profileUpdateService } from "../services/auth.service.js";
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

export async function profileController(req, res, next){
  const user_id = req.user.id 
  const result = await profileService(user_id)
  response(res, 200,result,"Profile fetched")
}

export async function editProfileController(req, res, next){
  const user_id = req.user.id
  const {name, email} = req.body
  const editFields = {name, email}
  const result = await profileUpdateService(user_id, editFields)

  response ( res, 200, result, "Profile edited successfully")
}