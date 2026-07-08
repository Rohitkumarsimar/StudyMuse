import nodemailer from "nodemailer";
import { ApiError } from "./AppError.js";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export async function sendEmail(to, subject, html) {
    
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: html,
    });
     
     return info
  } catch (err) {
    console.log(err);
    throw new ApiError(500, "internal server error!");
  }
}
