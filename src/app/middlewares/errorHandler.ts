
import { Request, Response, NextFunction } from 'express';

export default (error: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Error Handler', error);
  res.sendStatus(500);
};
