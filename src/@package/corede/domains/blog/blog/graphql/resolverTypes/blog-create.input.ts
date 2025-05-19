import { IFileMetadata, Language } from '@common_package';

export interface IBlogCreateInput {
  title: string; // unique
  content: string;
  description?: string;
  image?: IFileMetadata;
  readingTime: string;
  tags: string[];
  references?: string[];
  relatedVideo?: string;
  authorId: string;
  categoryId: string;
  targetCategoryId: string;
  language: Language;
  showcase?: boolean;
  editorsChoice?: boolean;
  popular?: boolean;
}
