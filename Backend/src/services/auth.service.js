import bcrypt from 'bcrypt';
import { insertUser } from '../db/user.query.js';

export async function registerUser(name, email, password) {
    const hashPassword = await bcrypt.hash(password,10 );
    return await insertUser(name, email, hashPassword);
}