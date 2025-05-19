import { baseTranslationFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const helpCenterCategoryListItemResultFragment = gql`
  ${baseTranslationFragment}

  fragment HelpCenterCategoryListItemResultFragment on HelpCenterCategoryListItemResult {
    _id
    name
    nameTranslation {
      ...BaseTranslationFragment
    }
    icon
    parentCategory {
      _id
    }
    hasSubHelpCenterCategory
  }
`;
