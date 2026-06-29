import jwt from "jsonwebtoken";

// jwt token generated
export function generateToken(user) {
  const jwtToken = jwt.sign(
    { email: user.email, id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );
  return jwtToken;
}
