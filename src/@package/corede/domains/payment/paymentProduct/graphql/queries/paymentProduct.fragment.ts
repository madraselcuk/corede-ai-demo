import { fileMetadataFragment } from '@common_package';
import { gql } from 'graphql-tag';
import { recurringFragment } from './paymentProduct-recurring.fragment';

export const paymentProductFragment = gql`
  ${fileMetadataFragment}
  ${recurringFragment}

  fragment PaymentProductFragment on PaymentProduct {
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
