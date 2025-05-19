import { IBaseResult } from "../../../../../interfaces/base-result.interface";
import { IRegisterByCodeCredential } from "./code-credential.type";

export interface IRegisterByResult extends IBaseResult {
  devMetaData?: IRegisterByCodeCredential;
}
