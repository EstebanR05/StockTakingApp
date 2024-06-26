import { selectQuery, insertQuery, updateQuery } from "../Core/generalQuerys";
import { Iuser } from "../interface/user.interface";
import bcrypt from "bcrypt";

export async function findOneByEmail(email: string): Promise<Iuser> {
    const result = await selectQuery<Iuser[]>('Users', ['*'], 'email = ?', [email]);
    return result.length > 0 ? result[0] : {} as Iuser;
}

export async function findByIdUser(id: number): Promise<Iuser> {
    const result = await selectQuery<Iuser[]>('Users', ['*'], 'id = ?', [id]);
    return result.length > 0 ? result[0] : {} as Iuser;
}

export async function createUserService(user: Iuser): Promise<Iuser> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = {...user,password: hashedPassword};
    const result = await insertQuery<any>('Users', newUser);
    return findByIdUser(result.insertId) as Promise<Iuser>;
}

export async function updateUserService(id: number, user: Partial<Iuser>): Promise<Iuser> {
    const result = await updateQuery<any>('Users', user, 'id = ?', [id]);
    if (!result) {
        throw new Error("Can not update user!");
    }
    return findByIdUser(id) as Promise<Iuser>;
}
