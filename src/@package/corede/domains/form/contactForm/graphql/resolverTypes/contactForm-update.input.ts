import { IEntity } from "@common_package";
import { ContactFormStatus } from "../../enums/contact-form-status.enum";
import { ContactFormType, ContactFormSource } from "../../enums";

export interface IContactFormUpdateFilterInput extends IEntity {}

export interface IContactFormUpdateInput {
  status?: ContactFormStatus;
  note?: string;
  escalatedUserId?: string;
  responsibleUserId?: string;
  type?: ContactFormType;
  source?: ContactFormSource;
}
