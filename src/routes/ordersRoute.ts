import { Request, Response, Router } from 'express';

import OrdersControllers from '../controllers/ordersController';

const ordersControllers = new OrdersControllers();

const ordersRouter = Router();

ordersRouter.get(
  '/',
  async (req: Request, res: Response) => {
    await ordersControllers.getAllOrders(req, res);
  },
);

export default ordersRouter;