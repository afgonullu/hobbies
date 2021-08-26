import { IHobby } from './IHobby';

export interface IUser {
  id?: string;
  name: string;
  hobbies: IHobby[];
}
