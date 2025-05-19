import { IFileMetadata, Language } from "@common_package";

export interface IHelpCenterCreateInput {
  question: string;
  answer: string;
  videoAttachment?: IFileMetadata;
  readingTime: string;
  categoryId: string;
  language: Language;
}
