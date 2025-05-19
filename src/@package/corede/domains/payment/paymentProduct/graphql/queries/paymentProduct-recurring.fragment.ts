import { gql } from 'graphql-tag';

export const baseRecurringFragment = gql`
  fragment BaseRecurringFragment on Recurring {
    packageName
    interval
    pricing {
      basePrice
      discountRate
      discountedPrice
      salesPrices {
        currency
        exchangeRate
        applicableCountries
      }
    }
    entitlements {
      userLimit
      storageLimit
    }
  }
`;

export const recurringFragment = gql`
  fragment RecurringFragment on Recurring {
    packageName
    interval
    pricing {
      basePrice
      discountRate
      discountedPrice
      salesPrices {
        currency
        exchangeRate
        applicableCountries
      }
    }
    entitlements {
      userLimit
      storageLimit
    }
    integrations {
      iyzicoSubscriptionPaymentPlan {
        referenceId
        createdAt
        updatedAt
        error
      }
    }
  }
`;
