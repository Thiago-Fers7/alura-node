import { Request, Response } from "express";
import createUser from "../../repositories/users/createUser";
import getUserByEmail from "../../repositories/users/getUserByEmail";

export default async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing body params" });
  }

  const userAlreadyExists = await getUserByEmail(email);

  if (userAlreadyExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  await createUser({ name, email, password });

  return res.sendStatus(201);
}
