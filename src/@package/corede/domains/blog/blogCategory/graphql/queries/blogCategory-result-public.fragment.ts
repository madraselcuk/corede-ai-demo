import { gql } from 'graphql-tag'
import { baseBlogCategoryFragment } from './blogCategory.fragment'
import { baseTranslationFragment } from '@common_package'

export const blogCategoryPublicResultFragment = gql`
  ${baseBlogCategoryFragment}

  fragment BlogCategoryPublicResultFragment on BlogCategoryResult {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      ...BaseBlogCategoryFragment
    }
    subCategories {
      ...BaseBlogCategoryFragment
    }
  }
`

export const blogCategoriesItemPublicResultFragment = gql`
  ${baseTranslationFragment}

  fragment BlogCategoriesItemPublicResultFragment on BlogCategoriesItemPublicResult {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      _id
    }
    hasSubBlogCategory
  }
`
