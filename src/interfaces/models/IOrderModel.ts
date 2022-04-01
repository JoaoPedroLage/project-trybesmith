import { IOrder } from './IOrder';

export interface OrderSelectResponse extends IOrder {
  id: number
}

export interface IOrderModel {
  getAllOrders: () => Promise<OrderSelectResponse[]>;
}