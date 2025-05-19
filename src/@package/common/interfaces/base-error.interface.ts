import { Language } from "../enums";

export type TErrorMessage = { [Key in Language]?: string };

export interface IBaseError {
  code: number;
  name: string;
  message: TErrorMessage;
}
