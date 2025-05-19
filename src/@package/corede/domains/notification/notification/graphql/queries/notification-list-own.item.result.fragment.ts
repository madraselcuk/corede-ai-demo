import { gql } from "graphql-tag";
import { notificationChannelTranslationFragment } from "./notification-channel-translation.fragment";

export const notificationListOwnItemResultFragment = gql`
  ${notificationChannelTranslationFragment}

  fragment NotificationListOwnItemResultFragment on NotificationListOwnItemResult {
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
        content {
          ...NotificationChannelTranslationFragment
        }
        variables
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
  }
`;
