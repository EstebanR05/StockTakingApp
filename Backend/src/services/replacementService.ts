import { deleteQuery, insertQuery, selectQuery, updateQuery } from "../Core/generalQuerys";
import { IReplacement } from "../interface/replacement.interface";


export const findAllSpareParts = async (): Promise<IReplacement[]> => {
    return await selectQuery<IReplacement[]>('spareparts', ['*']);
    
}

export const findByIdSpareParts = async (id: number): Promise<IReplacement> => {
    const result = await selectQuery<IReplacement[]>('spareparts', ['*'], 'id = ?', [id]);
    return result.length > 0? result[0] : {} as IReplacement;
    
}


export const createSpareParts = async (replacement: IReplacement): Promise<IReplacement> => { 
    const result = await insertQuery<any>('spareparts', replacement);
    return findByIdSpareParts(result.insertId);
}

export const updateSpareParts = async (id: number, replacement: IReplacement): Promise<IReplacement> => {
    await updateQuery<void>('spareparts', replacement, 'id =?', [id]);
    return findByIdSpareParts(id);
}


export const deleteSpareParts = async (id: number): Promise<void> => {
    await deleteQuery<IReplacement>('spareparts', 'id = ?', [id]);
}