import crypto from "crypto"
import bcrypt from "bcrypt"

export function generateOtp(){
   const otp = crypto.randomInt(100000, 1000000).toString()
   return otp
}

export async function hashOtp(otp){
    const hashedOtp = await bcrypt.hash(otp, 10)
    return hashedOtp
}


export async function verifyOtp(plainOtp, hashedOtp){
    const otpMatched = await bcrypt.compare(plainOtp, hashedOtp)
    return otpMatched

}
