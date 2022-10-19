import { Request, Response } from 'express';

import getUsers from '../../repositories/users/getUsers';

export default async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
};
