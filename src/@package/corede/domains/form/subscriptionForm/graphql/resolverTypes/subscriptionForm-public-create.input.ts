import { Language } from '@common_package';

export interface ISubscriptionFormPublicCreateInput {
  email: string;
  language: Language;
  page?: string;
}
