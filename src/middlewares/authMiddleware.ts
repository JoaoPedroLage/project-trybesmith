import { NextFunction, Request, Response } from 'express';

import { verifyToken } from '../utils/auth';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const userData = verifyToken(authorization);

  if (!userData) return res.status(401).json({ message: 'Expired or invalid token' });

  req.body.token = userData.data;
  
  next();
};
