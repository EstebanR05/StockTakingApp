import express from "express";
import { getUser, login, logout, register, updateUser } from "../controller/UserController";
import { validatedToken } from "../Core/security";
const router = express.Router();

router
  .post("/login", login)
  .post("/register", register)
  .put("/updateUser", validatedToken, updateUser)
  .get("/getUser", validatedToken, getUser)
  .get("/logout", logout);

export default router;
