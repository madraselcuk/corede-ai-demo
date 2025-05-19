import { IEntity, Language } from '@common_package';

export interface IBlogUpdateFilterInput extends IEntity {}

export interface IBlogUpdateInput {
  title?: string; // unique
  content?: string;
  description?: string;
  readingTime?: string;
  tags?: string[];
  references?: string[];
  relatedVideo?: string;
  authorId?: string;
  categoryId?: string;
  targetCategoryId?: string;
  language?: Language;
  showcase?: boolean;
  editorsChoice?: boolean;
  popular?: boolean;
}
