export interface IHobby {
  id?: string;
  name: string;
  year: number;
  passionLevel: PassionLevelEnum;
}

export enum PassionLevelEnum {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  VERYHIGH = 'Very-High',
}
