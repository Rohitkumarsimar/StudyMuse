import jwt from "jsonwebtoken";
import { ApiError } from "../utils/AppError.js";

//auth middleware:
export const authMiddleware = (req, res, next) => {
  const tokenStr = req.headers.authorization;
  if (!tokenStr) {
    return next( new ApiError(401, "Unauthorized"));
  }
  // separating Bearer and token
  const token = tokenStr.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    throw new ApiError(401, "Unauthorized");
  }
};
