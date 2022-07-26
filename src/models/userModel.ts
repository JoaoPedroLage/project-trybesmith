import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  createNewUser = async ({ username, classe, level, password }: IUser) => {
    const SQL = (
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)'
    );

    const [result] = await this.connection
      .execute<ResultSetHeader>(SQL, [username, classe, level, password]);

    return result.insertId;
  };
}