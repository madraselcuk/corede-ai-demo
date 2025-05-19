import { Language } from '@common_package';

export interface IFaqCreateInput {
  question: string;
  answer: string;
  readingTime: string;
  categoryId: string;
  language: Language;
  popular?: boolean;
}
