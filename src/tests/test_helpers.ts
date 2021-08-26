import { IHobby, PassionLevelEnum } from '../interfaces/IHobby';

export const initialHobbies: IHobby[] = [
  {
    name: 'Jogging',
    passionLevel: PassionLevelEnum.LOW,
    year: 2018,
  },
  {
    name: 'Walking',
    passionLevel: PassionLevelEnum.MEDIUM,
    year: 2015,
  },
  {
    name: 'Music',
    passionLevel: PassionLevelEnum.VERYHIGH,
    year: 2010,
  },
];
