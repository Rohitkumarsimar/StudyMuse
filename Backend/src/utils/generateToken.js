import jwt from 'jsonwebtoken'

export function generateToken(user){
    const jwtToken = jwt.sign({email: user.email, id: user.id},process.env.JWT_SECRET,{expiresIn: '7d'})
    return jwtToken
}
