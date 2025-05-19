import { IBaseResult } from "../../../../../interfaces/base-result.interface";
import { IRegisterByCodeCredential } from "./code-credential.type";

export interface IResendRegistrationByUserConfirmationResult extends IBaseResult {
  devMetaData?: IRegisterByCodeCredential;
}
