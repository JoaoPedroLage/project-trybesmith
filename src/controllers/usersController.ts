import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createNewUser(req: Request, res: Response) {
    const { statusCode, token } = await this.userService.createNewUser(req.body);

    req.body.token = token;

    return res.status(statusCode).json({ token });
  }
}
