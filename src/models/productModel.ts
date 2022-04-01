import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct, IProductModel, ProductSelectResponse } from '../interfaces';
import connection from './connection';

export default class ProductModel implements IProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  getAllProducts = async () => {
    const SQL = 'SELECT * FROM Trybesmith.Products';

    const [firstRow] = await this.connection.execute(SQL);

    return firstRow as ProductSelectResponse[];
  };

  createNewProduct = async ({ name, amount }: IProduct) => {
    const SQL = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';

    const [firstRow] = await this.connection.execute<ResultSetHeader>(SQL, [name, amount]);

    return firstRow.insertId;
  };
}