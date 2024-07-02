import express from 'express'
import { validatedToken } from '../Core/security'
import { createInventory, deleteInventory, getAllInventory, getByIdInventory, updateInventory } from '../controller/inventoryController';


const router = express.Router();

router
    .get("", validatedToken, getAllInventory)
    .get("/:id", validatedToken, getByIdInventory)
    .post("", validatedToken, createInventory)
    .put("/:id", validatedToken, updateInventory)
    .delete("/:id", validatedToken, deleteInventory)

export default router;