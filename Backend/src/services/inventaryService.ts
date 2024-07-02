import { selectQuery, insertQuery, updateQuery, deleteQuery } from "../Core/generalQuerys";
import { IInventory } from "../interface/inventory.interface";
import { Iuser } from "../interface/user.interface";
import { findByIdUser } from "./UserService";

export const findAllInventories = async (idUser: number): Promise<IInventory[]> => {
    let id: number = await getIdAdmin(idUser);
    return await selectQuery<IInventory[]>('inventory', ['*'], 'id_Admin = ?', [id]);
}

export const findByIdInventories = async (id: number): Promise<IInventory> => {
    const result = await selectQuery<IInventory[]>('inventory', ['*'], 'id = ?', [id]);
    return result.length > 0 ? result[0] : {} as IInventory;

}


export const createInventories = async (inventory: IInventory): Promise<IInventory> => {
    inventory.id_Admin = await getIdAdmin(inventory.idUser);
    const result = await insertQuery<any>('inventory', inventory);
    return findByIdInventories(result.insertId);
}

export const updateInventories = async (id: number, inventory: IInventory): Promise<IInventory> => {
    await updateQuery<void>('inventory', inventory, 'id =?', [id]);
    return findByIdInventories(id);
}


export const deleteInventories = async (id: number): Promise<void> => {
    await deleteQuery<IInventory>('inventory', 'id = ?', [id]);
}

const getIdAdmin = async (id: number): Promise<number> => {
    const user: Iuser = await findByIdUser(id);
    return (user.id_admin) ? user.id_admin : user.id;
}