import { Request, Response, Router } from 'express';

import ProductsController from '../controllers/productsController';
import validation from '../middlewares/validateReqMiddleware';
// import authorization from '../middlewares/authMiddleware';
import validateProduct from '../utils/joiSchemas/validateProduct';

const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.get(
  '/',
  async (req: Request, res: Response) => {
    await productsController.getAllProducts(req, res);
  },
);

productsRouter.post(
  '/',
  // authorization,
  validation(validateProduct),
  async (req: Request, res: Response) => {
    await productsController.createNewProduct(req, res);
  },
);

export default productsRouter;