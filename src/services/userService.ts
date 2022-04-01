import { IUser } from '../interfaces';
import UserModel from '../models/userModel';
import { createToken } from '../utils/auth';

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  createNewUser = async (newUserData: IUser) => {
    const userId = await this.userModel.createNewUser(newUserData);

    const token = createToken(newUserData);

    return { statusCode: 201, data: { userId, ...newUserData }, token };
  };
}