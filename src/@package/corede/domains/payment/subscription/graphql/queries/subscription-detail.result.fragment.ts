import { gql } from "graphql-tag";
import { paymentProductFragment } from "../../../paymentProduct";
import { statusUpdateHistoryFragment } from "../../../../form";

export const subscriptionDetailResultFragment = gql`
  ${paymentProductFragment}
  ${statusUpdateHistoryFragment}

  fragment SubscriptionDetailResultFragment on SubscriptionDetailResult {
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
    statusHistory {
      ...StatusUpdateHistoryFragment
    }
    error

    createdAt
    updatedAt
    createdBy {
      _id
    }
  }
`;
