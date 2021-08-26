import express, { Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import userService from '../services/userService';
import { isUser } from '../utils/validators';

const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();

    res.status(200).json(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const user = await userService.get(id);

    if (!user) {
      res.status(404).send('User not found');
    }

    return res.status(200).json(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.post('/', async (req: Request, res: Response) => {
  const user: IUser = req.body;

  try {
    if (!user) throw new Error('No payload');

    if (!isUser(user)) throw new Error('Malformatted payload');

    const newUser = await userService.create(user);

    res.status(201).json(newUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.put('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const userUpdate: IUser = req.body;

  try {
    if (!userUpdate) throw new Error('No payload');

    if (!isUser(userUpdate)) throw new Error('Malformatted payload');

    const updatedUser = await userService.update(id, userUpdate);

    if (!updatedUser) {
      res.status(404).send('User not found');
    }
    return res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.delete('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const deletedUser = await userService.remove(id);

    if (!deletedUser) {
      res.status(404).send('User not found');
    }

    res.status(204).json(deletedUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default userRouter;
