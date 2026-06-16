import jwt from "jsonwebtoken";

//auth middleware:
export const authMiddleware = (req, res, next) => {
  const tokenStr = req.headers.authorization;
  if (!tokenStr) {
    return res.status(401).json({ message: "Invalid headers!" });
  }
  // separating Bearer and token
  const splitToken = tokenStr.split(" ");
  const token = splitToken[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token!" });
  }
};
