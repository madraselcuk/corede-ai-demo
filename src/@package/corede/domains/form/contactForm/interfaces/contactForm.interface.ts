import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Language,
  IBaseUserEntity,
} from "@common_package";
import { ContactFormStatus } from "../enums/contact-form-status.enum";
import { IStatusUpdateHistory } from "../../../../common/statusUpdateHistory/interfaces/status-update-history.interface";
import { ContactFormSource, ContactFormType } from "../enums";

export interface IBaseContactForm {
  fullName?: string;
  email: string;
  subject: string;
  message: string;
  status: ContactFormStatus;
  type: ContactFormType;
  source: ContactFormSource;
  language: Language;
  statusHistory: IStatusUpdateHistory[];
}

export interface IBaseContactFormEntity extends IEntity, IBaseContactForm {}

export interface IContactForm
  extends IBaseContactFormEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  responsibleUser?: IBaseUserEntity;
  escalatedUser?: IBaseUserEntity;
}
