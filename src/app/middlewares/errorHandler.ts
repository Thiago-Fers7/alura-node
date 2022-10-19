import { Request, Response, NextFunction } from 'express';

export default (
  error: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  console.log('Error Handler', error);
  return res.sendStatus(500);
};
