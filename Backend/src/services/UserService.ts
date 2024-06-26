import { conexion } from "../conexion_bd";
import { Iuser } from "../interface/user.interface";
import bcrypt from "bcrypt";

export async function findOneByEmail(email: string) {
  const [resp]: any = await conexion.query(
    `SELECT * FROM Users where email = '${email}'`
  );

  return resp[0] as Iuser;
}

export async function findByIdUser(id: number): Promise<Iuser> {
  const [rows]: any = await conexion.query("SELECT * FROM Users WHERE id = ?", [
    id,
  ]);
  return rows[0] as Iuser;
}

export async function createUserService(user: Iuser): Promise<Iuser> {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const [resp]: any = await conexion.query(
    `INSERT INTO Users (id, name, email, password) 
    VALUES ('', ?, ?, ?)`,
    [user.name, user.email, hashedPassword]
  );

  if (!resp) {
    throw new Error("Can not create user!");
  }

  const id = resp.insertId;
  return findByIdUser(id);
}

export async function updateUserService(id: number, user: Iuser): Promise<Iuser> {
  //const hashedPassword = await bcrypt.hash(user.password, 10);

  const [resp] = await conexion.query(
    `UPDATE Users SET 
      name = '${user.name}', 
      lastName = '${user.lastName}', 
      email = '${user.email}',  
      username = '${user.username}',
      age = '${user.age}',
      staff = '${user.staff}',
      company = '${user.company}',
      address = '${user.address}',
      phone = '${user.phone}',
      city = '${user.city}',
      country = '${user.country}',
      userInformation = '${user.userInformation}',
      postalCode = '${user.postalCode}',
      aboutMe = '${user.aboutMe}' 
    WHERE Users.id = '${id}'`
  );

  if (!resp) {
    throw new Error("Can not update user!");
  }

  return findByIdUser(id);
}
