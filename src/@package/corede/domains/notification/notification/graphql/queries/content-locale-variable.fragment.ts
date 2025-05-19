import { baseTranslationFragment } from '@common_package'
import gql from 'graphql-tag'

export const contentLocaleVariableFragment = gql`
  ${baseTranslationFragment}

  fragment ContentLocaleVariableFragment on ContentLocaleVariable {
    name
    value {
      ...BaseTranslationFragment
    }
  }
`
