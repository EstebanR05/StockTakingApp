import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createToken } from "../security/jwt";
import { user, userLogin } from "../interface/user.interface";
import {
  createUserService,
  findByIdUser,
  findOneByEmail,
  updateUserService,
} from "../services/UserService";

export async function login(_req: Request, res: Response): Promise<any> {
  const login: userLogin = _req.body;
  const user: user = await findOneByEmail(login.email);

  const passwordCorrect =
    user == null ? false : await bcrypt.compare(login.password, user.password); // Comparing hashed password with plaintext password

  if (!(user && !passwordCorrect)) {
    return res.status(401).json({ message: "Invalid email or password!" });
  }

  const token: string = createToken(user);
  user.token = token;

  return res.status(200).json(user);
}

export async function logout(_req: Request, res: Response): Promise<any> {
  res.clearCookie("token").json({ message: "token deleted!" });
}

export async function register(_req: Request, res: Response): Promise<any> {
  try {
    const body: user = _req.body;
    const user: user = await findOneByEmail(body.email);

    if (user) {
      throw new Error("can not create, existing other user using the email!");
    }

    const result: user = await createUserService(body);
    res.status(201).send(result || {});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateUser(_req: Request, res: Response): Promise<any> {
  try {
    const body: user = _req.body;
    const userId: number = (_req as any).userId;
    const user: user = await findOneByEmail(body.email);

    if (!(user.id == userId)) {
      throw new Error("can not update, this process is invalid!");
    }

    const result: user = await updateUserService(userId, body);
    res.status(201).send(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function getUser(_req: Request, res: Response) {
  try {
    const userId: number = (_req as any).userId;
    const result: user = await findByIdUser(userId);
    res.status(201).send(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
