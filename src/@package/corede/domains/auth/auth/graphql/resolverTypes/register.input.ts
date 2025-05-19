import { IRegisterInput as ICommonRegisterInput, Language } from "@common_package";

export interface IRegisterInput extends ICommonRegisterInput {
  language?: Language
}
