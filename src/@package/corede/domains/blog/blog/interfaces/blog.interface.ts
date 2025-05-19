import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IFileMetadata,
  Language,
} from '@common_package';
import {
  IAuthor,
  IBaseAuthorEntity,
} from '../../author/interfaces/author.interface';
import {
  IBaseBlogCategoryEntity,
  IBlogCategory,
} from '../../blogCategory/interfaces/blogCategory.interface';

export interface IBaseBlog {
  title: string; // unique
  content: string;
  description?: string;
  image?: IFileMetadata;
  slug: string;
  readingTime: string;
  tags: string[];
  references: string[];
  relatedVideo?: string;
  author: IBaseAuthorEntity;
  category: IBaseBlogCategoryEntity;
  targetCategory: IBaseBlogCategoryEntity;
  language: Language;
  showcase: boolean;
  editorsChoice: boolean;
  popular: boolean;
}

export interface IBaseBlogEntity extends IEntity, IBaseBlog {}

export interface IBlog
  extends IBaseBlogEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  author: IAuthor;
  category: IBlogCategory;
  targetCategory: IBlogCategory;
}
