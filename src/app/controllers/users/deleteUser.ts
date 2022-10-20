import { Request, Response } from 'express';

import deleteUser from '../../repositories/users/deleteUser';
import getUser from '../../repositories/users/getUser';

export default async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await getUser(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  await deleteUser(id, error => {
    if (error) {
      return res.status(500).json({ error });
    }
    return res.status(204).send();
  });
};
