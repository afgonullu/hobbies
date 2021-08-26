import { IUser } from '../interfaces/IUser';
import User from '../models/User';

const getAll = async (): Promise<IUser[]> => {
  const users = await User.find();

  return users;
};

const get = async (id: string): Promise<IUser> => {
  const user = await User.findOne({ _id: id });

  if (!user) throw new Error('Invalid ID');

  return user;
};

const create = async (newUser: IUser): Promise<IUser> => {
  const user = new User(newUser);

  const createdUser = await user.save();

  return createdUser;
};

const update = async (id: string, userUpdate: IUser): Promise<IUser | null> => {
  const updatedUser = await User.findOneAndUpdate({ _id: id }, userUpdate, { new: true });

  return updatedUser;
};

const remove = async (id: string): Promise<IUser | null> => {
  const deletedUser = await User.findOneAndRemove({ _id: id });

  return deletedUser;
};

export default { getAll, get, create, update, remove };
