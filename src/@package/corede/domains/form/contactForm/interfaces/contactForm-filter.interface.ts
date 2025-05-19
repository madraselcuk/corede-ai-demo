import { Language, IDateFilter, IFilter } from "@common_package";
import { ContactFormStatus } from "../enums/contact-form-status.enum";
import { ContactFormSource, ContactFormType } from "../enums";

export interface IFilterContactForm extends IFilter {
  fullName?: string; // check with regex
  email?: string; // check with regex
  statuses?: ContactFormStatus[];
  types?: ContactFormType[];
  sources?: ContactFormSource[];
  languages?: Language[];
  responsibleUserIds?: string[];
  escalatedUserIds?: string[];
  createdAtDateFilter?: IDateFilter;
  updatedAtDateFilter?: IDateFilter;
}
