import { selectQuery, insertQuery, updateQuery, deleteQuery } from "../Core/generalQuerys";
import { IInventory } from "../interface/inventory.interface";




export const findAllInventories = async (idUser: number): Promise<IInventory[]> => {
    return await selectQuery<IInventory[]>('inventory', ['*'], 'idUser = ?', [idUser]);
    
}

export const findByIdInventories = async (id: number, idUser: number): Promise<IInventory> => {
    const result = await selectQuery<IInventory[]>('inventory', ['*'], 'id = ? and idUser = ?', [id, idUser]);
    return result.length > 0? result[0] : {} as IInventory;
    
}


export const createInventories = async (inventory: IInventory): Promise<IInventory> => { 
    const result = await insertQuery<any>('inventory', inventory);
    return findByIdInventories(result.insertId, inventory.idUser);
}

export const updateInventories = async (id: number, inventory: IInventory): Promise<IInventory> => {
    await updateQuery<void>('inventory', inventory, 'id =?', [id]);
    return findByIdInventories(id, inventory.idUser);
}


export const deleteInventories = async (id: number): Promise<void> => {
    await deleteQuery<IInventory>('inventory', 'id = ?', [id]);
}