import {
  IRegisterByInput as ICommonRegisterByInput,
  Language,
} from "@common_package";

export interface IRegisterByInput extends ICommonRegisterByInput {
  language?: Language;
}
