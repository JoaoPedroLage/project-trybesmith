import { IOrder } from '../interfaces';
import OrderModel from '../models/orderModel';

export default class OrderService {
  private orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel();
  }

  getAllOrders = async () => {
    const ordersQuery = await this.orderModel.getAllOrders();
    const orders = ordersQuery.map((order: IOrder) => {
      const array: number[] = []; 
      const Order: any = order;

      array.push(Order.products);
      
      Order.products = array;

      return Order; 
    });

    return { status: 200, data: orders };
  };
}