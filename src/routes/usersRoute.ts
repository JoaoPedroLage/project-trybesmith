import { Request, Response, Router } from 'express';

import UserController from '../controllers/usersController';
import validation from '../middlewares/validateReqMiddleware';
import validateUser from '../utils/joiSchemas/validateUser';

const userController = new UserController();

const usersRouter = Router();

usersRouter.post(
  '/',
  validation(validateUser),
  async (req: Request, res: Response) => {
    await userController.createNewUser(req, res);
  },
);

export default usersRouter;