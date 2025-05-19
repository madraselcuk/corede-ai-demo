import { fileMetadataFragment } from '@common_package';
import { gql } from 'graphql-tag';
import { recurringFragment } from './paymentProduct-recurring.fragment';

export const paymentProductDetailResultFragment = gql`
  ${fileMetadataFragment}
  ${recurringFragment}

  fragment PaymentProductDetailResultFragment on PaymentProductDetailResult {
    _id
    paymentProductStatus
    productType
    name
    description
    image {
      ...FileMetadataFragment
    }
    video {
      ...FileMetadataFragment
    }
    relatedFeatures
    restrictedFeatures
    baseCurrency
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
    hasShipping
    shippingPrice
    quota
    maxCount
    soldOut
    isRefundable
    isUpgradable
    recurring {
      mainSubscription
      level
      daily {
        ...RecurringFragment
      }
      weekly {
        ...RecurringFragment
      }
      monthly {
        ...RecurringFragment
      }
      yearly {
        ...RecurringFragment
      }
    }
    integrations {
      iyzicoSubscriptionProduct {
        referenceId
        createdAt
        updatedAt
        error
      }
      parasutProduct {
        referenceId
        createdAt
        updatedAt
        error
      }
    }
  }
`;
