import { gql } from 'graphql-tag';

export const notificationFragment = gql`
  fragment NotificationFragment on Notification {
    _id
    # TODO: add fields

    organization {  # TODO: Check organization 
      _id
    }
    department {    # TODO: Check department
      _id
    }
  }
`;
