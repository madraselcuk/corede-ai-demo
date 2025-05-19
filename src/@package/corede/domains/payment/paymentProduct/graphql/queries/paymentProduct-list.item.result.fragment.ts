import { fileMetadataFragment } from "@common_package";
import { gql } from "graphql-tag";
import { baseRecurringFragment } from "./paymentProduct-recurring.fragment";

export const paymentProductListItemResultFragment = gql`
  ${fileMetadataFragment}
  ${baseRecurringFragment}

  fragment PaymentProductListItemResultFragment on PaymentProductListItemResult {
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
        ...BaseRecurringFragment
      }
      weekly {
        ...BaseRecurringFragment
      }
      monthly {
        ...BaseRecurringFragment
      }
      yearly {
        ...BaseRecurringFragment
      }
    }
    recurringActions {
      daily {
        subscriptionStatus
        canBePurchased
        paymentTypes
        willUpgrade
        upgradeDiscount
      }
      weekly {
        subscriptionStatus
        canBePurchased
        paymentTypes
        willUpgrade
        upgradeDiscount
      }
      monthly {
        subscriptionStatus
        canBePurchased
        paymentTypes
        willUpgrade
        upgradeDiscount
      }
      yearly {
        subscriptionStatus
        canBePurchased
        paymentTypes
        willUpgrade
        upgradeDiscount
      }
    }
  }
`;
