import { Request, Response } from 'express';

import getUser from '../../repositories/users/getUser';

export default async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await getUser(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.json(user);
};
