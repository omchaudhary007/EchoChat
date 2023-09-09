import jwt from "jsonwebtoken";

// generate JSON Web Token (JWT) and set it as an HTTP-only cookie
export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true,
    sameSite: "none", // Changed to 'none' to allow cross-site cookies
    secure: true, // Always use secure in production
    domain: process.env.NODE_ENV === "production" ? "echochat-dtlr.onrender.com" : undefined
  });

  return token;
};
