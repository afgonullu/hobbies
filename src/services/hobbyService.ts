import { IHobby } from '../interfaces/IHobby';
import Hobby from '../models/Hobby';

const getAll = async (): Promise<IHobby[]> => {
  const hobbies = await Hobby.find();

  return hobbies;
};

const get = async (id: string): Promise<IHobby> => {
  const hobby = await Hobby.findOne({ _id: id });

  if (!hobby) throw new Error('Invalid ID');

  return hobby;
};

const create = async (newHobby: IHobby): Promise<IHobby> => {
  const hobby = new Hobby(newHobby);

  const createdHobby = await hobby.save();

  return createdHobby;
};

const update = async (id: string, hobbyUpdate: IHobby): Promise<IHobby | null> => {
  const updatedHobby = await Hobby.findOneAndUpdate({ _id: id }, hobbyUpdate, { new: true });

  return updatedHobby;
};

const remove = async (id: string): Promise<IHobby | null> => {
  const deletedHobby = await Hobby.findOneAndRemove({ _id: id });

  return deletedHobby;
};

export default { getAll, get, create, update, remove };
