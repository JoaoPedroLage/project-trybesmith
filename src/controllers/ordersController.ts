import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  async getAllOrders(_req: Request, res: Response) {
    const { status, data } = await this.orderService.getAllOrders();

    return res.status(status).json(data);
  }
}