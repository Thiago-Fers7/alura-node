import { Request, Response } from 'express';

import getUserByEmail from '../../repositories/users/getUserByEmail';

export default async (req: Request, res: Response) => {
  const { email } = req.params;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res.status(200).json(user);
};
