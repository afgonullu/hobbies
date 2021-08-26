import express, { Request, Response } from 'express';
import { IHobby } from '../interfaces/IHobby';
import hobbyService from '../services/hobbyService';
import { isHobby } from '../utils/validators';

const hobbyRouter = express.Router();

hobbyRouter.get('/', async (req: Request, res: Response) => {
  try {
    const hobbies = await hobbyService.getAll();

    res.status(200).json(hobbies);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

hobbyRouter.get('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const hobby = hobbyService.get(id);

    if (!hobby) {
      res.status(404).send('User not found');
    }

    return res.status(200).json(hobby);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

hobbyRouter.post('/', async (req: Request, res: Response) => {
  const hobby: IHobby = req.body;

  try {
    if (!hobby) throw new Error('No payload');

    if (!isHobby(hobby)) throw new Error('Malformatted payload');

    const newUser = await hobbyService.create(hobby);

    res.status(201).json(newUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

hobbyRouter.put('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const hobbyUpdate: IHobby = req.body;

  try {
    if (!hobbyUpdate) throw new Error('No payload');

    if (!isHobby(hobbyUpdate)) throw new Error('Malformatted payload');

    const updatedHobby = await hobbyService.update(id, hobbyUpdate);

    if (!updatedHobby) {
      res.status(404).send('User not found');
    }
    return res.status(200).json(updatedHobby);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

hobbyRouter.delete('/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const deletedHobby = await hobbyService.remove(id);

    if (!deletedHobby) {
      res.status(404).send('User not found');
    }

    res.status(204).json(deletedHobby);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default hobbyRouter;
