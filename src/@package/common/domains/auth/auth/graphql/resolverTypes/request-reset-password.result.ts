import { IBaseResult } from "../../../../../interfaces/base-result.interface";
import { IResetPasswordTokenCredential } from "./code-credential.type";

export interface IRequestResetPasswordResult extends IBaseResult {
  devMetaData?: IResetPasswordTokenCredential;
}
