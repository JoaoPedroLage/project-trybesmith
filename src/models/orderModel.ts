import { Pool } from 'mysql2/promise';
import { IOrderModel, OrderSelectResponse } from '../interfaces';
import connection from './connection';

export default class OrderModel implements IOrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  getAllOrders = async () => {
    const SQL = `
    SELECT 
      Ord.id, Ord.userId, Prod.id AS products
    FROM
        Trybesmith.Orders AS Ord
            JOIN
        Trybesmith.Products AS Prod ON Prod.orderId = Ord.id
    ORDER BY Ord.userId;`;

    const [firstRow] = await this.connection.execute(SQL);

    return firstRow as OrderSelectResponse[];
  };
}