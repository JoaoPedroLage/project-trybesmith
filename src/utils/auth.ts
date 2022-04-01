import dotenv from 'dotenv';

import jwt, { JwtPayload } from 'jsonwebtoken';
import { IUser } from '../interfaces';

dotenv.config();

const SECRET: string | undefined = process.env.JWT_SECRET;

export function createToken(user: IUser) {
  // const { password: passDb, ...userWithouPassword } = user.dataValues;
  if (SECRET !== undefined) {
    const token = jwt.sign({ user }, SECRET);

    return token;
  }
}

export function verifyToken(token: string): jwt.JwtPayload | undefined {
  try {
    if (SECRET !== undefined) {
      const dataUser = jwt.verify(token, SECRET) as JwtPayload;

      return dataUser;
    }
  } catch (error) {
    console.log(error);

    return undefined;
  }
}