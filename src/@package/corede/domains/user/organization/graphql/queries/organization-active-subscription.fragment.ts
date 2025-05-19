import { gql } from "graphql-tag";

export const organizationActiveSubscriptionsFragment = gql`
  fragment OrganizationActiveSubscriptionsFragment on OrganizationActiveSubscriptions {
    main {
      _id
      status
      error
    }
    trial {
      status
      startDate
      dueDate
      error
    }
    userUsageLimit {
      current
      total
    }
    storageUsageLimit {
      current
      total
    }
  }
`;
