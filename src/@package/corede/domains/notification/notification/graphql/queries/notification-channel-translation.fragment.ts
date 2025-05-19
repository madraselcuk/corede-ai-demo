import gql from 'graphql-tag';

export const notificationChannelTranslationFragment = gql`
  fragment NotificationChannelTranslationFragment on BaseTranslationType {
    en
    tr
  }
`;
