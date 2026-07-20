import { ApiError } from "../utils/AppError.js";

export const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (result.success == false) {
      return next(new ApiError(400, "Please enter a valid input!"));
    }
    next();
  };
};
