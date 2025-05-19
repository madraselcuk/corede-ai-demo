export interface IHasTimeStamp {
  createdAt: Date;
  updatedAt: Date;
}

export interface IHasOptionalTimeStamp {
  createdAt?: Date;
  updatedAt?: Date;
}
