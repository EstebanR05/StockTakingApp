import { Request, Response } from "express";
import { createSpareParts, deleteSpareParts, findAllSpareParts, findByIdSpareParts, updateSpareParts } from "../services/replacementService";
import { IReplacement } from "../interface/replacement.interface";


export const getAllSpareParts = async (_req: Request, res: Response) => {
    try {
        const result: IReplacement[] = await findAllSpareParts();
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const getByIdReplacement = async (_req: Request, res: Response) => {
    try {
        const result: IReplacement = await findByIdSpareParts(parseInt(_req.params.id, 10));
        res.status(200).send(result);
    } catch (error: any) { 
        res.status(500).json({ message: error.error });
    }
}

export const createReplacement = async (_req: Request, res: Response) => { 
    try {
        const body: IReplacement = _req.body;
        const result: IReplacement = await createSpareParts(body);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const updateReplacement = async (_req: Request, res: Response) => { 
    try {
        const body: IReplacement = _req.body;
        const result: IReplacement = await updateSpareParts(parseInt(_req.params.id),body);
        res.status(200).send(result);
    } catch (error: any) { 
        res.status(500).json({ message: error.error });
     }
}

export const deleteReplacement = async (_req: Request, res: Response) => { 
    try {
        await deleteSpareParts(parseInt(_req.params.id, 10));
        res.status(200).send('success');
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
 }