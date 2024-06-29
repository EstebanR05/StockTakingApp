import express from "express";
import { validatedToken } from "../Core/security";
import { 
    createReplacement,
    deleteReplacement,
    getAllSpareParts,
    getByIdReplacement,
    updateReplacement } from "../controller/replacementController";

const router = express.Router();

router
  .get("", validatedToken, getAllSpareParts)
  .get("/:id", validatedToken, getByIdReplacement)
  .post("", validatedToken, createReplacement)
  .put("/:id", validatedToken, updateReplacement)
  .delete("/:id", validatedToken, deleteReplacement);
  
export default router;