import { IBaseResult } from "../../../../../interfaces/base-result.interface";
import { IRegisterCodeCredential } from "./code-credential.type";

export interface IResendRegistrationConfirmationResult extends IBaseResult {
  devMetaData?: IRegisterCodeCredential;
}
