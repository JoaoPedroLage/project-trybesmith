import { IUser } from '../interfaces';
import UserModel from '../models/userModel';

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  createNewUser = async (newUserData: IUser) => {
    const userId = await this.userModel.createNewUser(newUserData);

    return { status: 201, data: { userId, ...newUserData } };
  };
}