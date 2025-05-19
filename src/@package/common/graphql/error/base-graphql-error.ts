import { IBaseError } from "../../interfaces";

export interface IBaseGraphqlErrorCause {
  context?: any;
  devMessage?: string;
  error?: any;
}

export interface IBaseGraphqlError {
  statusCode: number;
  error: IBaseError;
  cause?: IBaseGraphqlErrorCause;
}
