import { Language } from "@common_package";
import { ContactFormType, ContactFormSource } from "../../enums";

export interface IContactFormCreateInput {
  fullName?: string;
  email: string;
  subject: string;
  message: string;
  type: ContactFormType;
  source: ContactFormSource;
  language: Language;
}
