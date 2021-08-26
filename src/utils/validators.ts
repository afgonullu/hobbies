import { arrayOf, enumOf, objectOf, primitives } from '@altostra/type-validations';
import { IHobby, PassionLevelEnum } from '../interfaces/IHobby';
import { IUser } from '../interfaces/IUser';

export const isHobby = objectOf<IHobby>({
  id: primitives.string,
  name: primitives.string,
  year: primitives.number,
  passionLevel: enumOf<PassionLevelEnum>(
    PassionLevelEnum.LOW,
    PassionLevelEnum.MEDIUM,
    PassionLevelEnum.HIGH,
    PassionLevelEnum.VERYHIGH,
  ),
});

export const isUser = objectOf<IUser>({
  id: primitives.string,
  name: primitives.string,
  hobbies: arrayOf(isHobby),
});
