import { Request, Response } from 'express';

import getUser from '../../repositories/users/getUser';
import getUserByEmail from '../../repositories/users/getUserByEmail';
import updateUser from '../../repositories/users/updateUser';

export default async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const user = await getUser(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.email !== email) {
    const userAlreadyExists = await getUserByEmail(email);

    if (userAlreadyExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
  }

  const userUpdated = await updateUser(id, { name, email });

  return res.status(204).json(userUpdated);
};
