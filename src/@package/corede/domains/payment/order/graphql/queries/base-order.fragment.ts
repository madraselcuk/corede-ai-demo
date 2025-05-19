import { gql } from "graphql-tag";

export const baseOrderEntityFragment = gql`
  fragment BaseOrderEntityFragment on BaseOrderEntity {
    _id
    orderTarget
    orderStatus
    error {
      name
      data
    }
    orderedUser {
      _id
    }
    products {
      paymentProduct {
        _id
      }
      isRecurring
      recurringInterval
    }
    totalPrice {
      currency
      taxRate
      price
      discount
      discountedPrice
    }
    payment {
      paymentStatus
      paymentMethod
      conversationId
      apiPaymentId
      apiPayment
      checkoutFormToken
      error
    }
    organization {
      _id
    }
  }
`;
