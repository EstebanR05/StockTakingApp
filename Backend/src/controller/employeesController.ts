import { Request, Response } from "express";
import {
    createEmployees,
    deleteEmployees,
    findAllEmployee,
    findByIdEmployee,
    updateEmployees,
} from "../services/employeesService";
import { IEmployees } from "../interface/employees.interface";


export const getAllEmployee = async (_req: Request, res: Response) => {
    try {
        const result: IEmployees[] = await findAllEmployee((_req as any).userId);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const getByIdEmployee = async (_req: Request, res: Response) => {
    try {
        const result: IEmployees = await findByIdEmployee(parseInt(_req.params.id, 10), (_req as any).userId);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const createEmployee = async (_req: Request, res: Response) => {
    try {
        const body: IEmployees = _req.body;
        body.id_admin = parseInt((_req as any).userId);

        const result: IEmployees = await createEmployees(body);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const updateEmployee = async (_req: Request, res: Response) => {
    try {
        const body: IEmployees = _req.body;
        body.id_admin = parseInt((_req as any).userId);

        const result: IEmployees = await updateEmployees(parseInt(_req.params.id, 10), body);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}

export const deleteEmployee = async (_req: Request, res: Response) => {
    try {
        await deleteEmployees(parseInt(_req.params.id, 10));
        res.status(200).send('success');
    } catch (error: any) {
        res.status(500).json({ message: error.error });
    }
}