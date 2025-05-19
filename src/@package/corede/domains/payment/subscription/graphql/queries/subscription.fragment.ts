import { gql } from "graphql-tag";
import { paymentProductFragment } from "../../../paymentProduct";
import { statusUpdateHistoryFragment } from "../../../../form";

export const subscriptionFragment = gql`
  ${paymentProductFragment}
  ${statusUpdateHistoryFragment}

  fragment SubscriptionFragment on Subscription {
    _id
    status
    paymentProduct {
      ...PaymentProductFragment
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
    error
    statusHistory {
      ...StatusUpdateHistoryFragment
    }

    createdAt
    updatedAt
    createdBy {
      _id
    }
  }
`;
