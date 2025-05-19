import { gql } from 'graphql-tag'
import { notificationChannelTranslationFragment } from './notification-channel-translation.fragment'
import { contentLocaleVariableFragment } from './content-locale-variable.fragment'

export const notificationListItemResultFragment = gql`
  ${notificationChannelTranslationFragment}
  ${contentLocaleVariableFragment}

  fragment NotificationListItemResultFragment on NotificationListItemResult {
    _id
    name
    type
    domain
    channels {
      email {
        type
        subject {
          ...NotificationChannelTranslationFragment
        }
        content
        variables
        contentLocaleVariables {
          ...ContentLocaleVariableFragment
        }
      }
      sms {
        type
        subject {
          ...NotificationChannelTranslationFragment
        }
        content {
          ...NotificationChannelTranslationFragment
        }
        variables
      }
      push {
        type
        subject {
          ...NotificationChannelTranslationFragment
        }
        content {
          ...NotificationChannelTranslationFragment
        }
        variables
      }
      web {
        type
        subject {
          ...NotificationChannelTranslationFragment
        }
        content {
          ...NotificationChannelTranslationFragment
        }
        variables
      }
    }
    createdAt
    updatedAt
  }
`
