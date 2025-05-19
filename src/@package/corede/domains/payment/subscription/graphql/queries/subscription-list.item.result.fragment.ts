import { gql } from "graphql-tag";

export const subscriptionListItemResultFragment = gql`
  fragment SubscriptionListItemResultFragment on SubscriptionListItemResult {
    _id
    status
    paymentProduct {
      _id
    }
    recurringInterval
    currency
    startDate
    totalRecurrentCount
    currentRecurrentCount
    savedCardToken
    nextPaymentDate
    completedDate
    failedDate
    orders {
      _id
    }
    failedOrders {
      _id
    }
    failedOrdersForCurrentSession {
      _id
    }
    organization {
      _id
    }
    createdAt
    updatedAt
    createdBy {
      _id
    }
  }
`;
