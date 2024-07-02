import { Request, Response } from 'express';
import { createInventories, deleteInventories, findAllInventories, findByIdInventories, updateInventories } from '../services/inventaryService';
import { IInventory } from '../interface/inventory.interface';



export const getAllInventory = async (_req: Request, res: Response) => {
    try {
        const result: IInventory[] = await findAllInventories((_req as any).userId);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const getByIdInventory = async (_req: Request, res: Response) => { 
    try {
        const result: IInventory = await findByIdInventories(parseInt(_req.params.id, 10));
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
 }

 export const createInventory = async (_req: Request, res: Response) => { 
    try {
        const body: IInventory = _req.body;
        body.idUser = parseInt((_req as any).userId);
        const result: IInventory = await createInventories(body);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
  }

   export const updateInventory = async (_req: Request, res: Response) => { 
    try {
        const body: IInventory = _req.body;
        const result: IInventory = await updateInventories(parseInt(_req.params.id, 10),body);
        res.status(200).send(result);
    } catch (error: any) { 
        res.status(500).json({ message: error.error });
     }
}

export const deleteInventory = async (req: Request, res: Response) => {
    try {
        await deleteInventories(parseInt(req.params.id, 10));
        res.status(200).send({ success: 'success' });
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
 
}