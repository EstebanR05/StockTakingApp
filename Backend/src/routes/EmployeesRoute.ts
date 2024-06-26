import express from "express";
import { validatedToken } from "../Core/security";
import {
    createEmployee,
    deleteEmployee,
    getAllEmployee,
    getByIdEmployee,
    updateEmployee,
} from "../controller/employeesController";

const router = express.Router();

router
    .get("", validatedToken, getAllEmployee)
    .get("/:id", validatedToken, getByIdEmployee)
    .post("", validatedToken, createEmployee)
    .put("/:id", validatedToken, updateEmployee)
    .delete("/:id", validatedToken, deleteEmployee);

export default router;
