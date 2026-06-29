import {prisma} from "../config/prisma.js";

// registering user
export async function insertUser(name, email, password) {
  const result = await prisma.users.create({
    data: { 
      name: name, 
      email: email, 
      password: password },
      select: {
        name: true,
        email: true
      }
  });
  return result;
}

// finding email
export async function findByEmail(email) {
  const result = await prisma.users.findUnique({ where: { email: email } });
  return result;
}

// fetch profile
export async function profileQuery(user_id) {
  const result = await prisma.users.findUnique({
    where: { id: user_id },
    select: { name: true, email: true },
  });

  return result;
}

//edit profile
export async function editProfileQuery(user_id, editFields) {
  const result = await prisma.users.update({
    where: { id: user_id },
    data: editFields,
    select: {
      name: true,
      email: true
    }
  });
  return result;
}
