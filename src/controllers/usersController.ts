import { Request, Response } from 'express';
import UserService from '../services/userService';
import { createToken } from '../utils/auth';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createNewUser(req: Request, res: Response) {
    const { status, data } = await this.userService.createNewUser(req.body);

    const token = createToken(data);

    return res.status(status).json({ token });
  }
}
