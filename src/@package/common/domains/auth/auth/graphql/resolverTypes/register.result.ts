import { IBaseResult } from "../../../../../interfaces/base-result.interface";
import { IRegisterCodeCredential } from "./code-credential.type";

export interface IRegisterResult extends IBaseResult {
  devMetaData?: IRegisterCodeCredential;
}
