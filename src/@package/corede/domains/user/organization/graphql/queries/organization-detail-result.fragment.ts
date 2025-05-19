import { gql } from "graphql-tag";
import { organizationActiveSubscriptionsFragment } from "./organization-active-subscription.fragment";
import { publicImageFileMetadataFragment } from "@common_package";
import {
  socialMediasFragment,
  baseAddressFragment,
} from "../../../../../common";
import { userBillingInfoFragment } from "../../../common";

export const organizationDetailResultFragment = gql`
  ${socialMediasFragment}
  ${baseAddressFragment}
  ${publicImageFileMetadataFragment}
  ${userBillingInfoFragment}
  ${organizationActiveSubscriptionsFragment}

  fragment OrganizationDetailResultFragment on OrganizationDetailResult {
    _id
    name
    logo {
      ...PublicImageFileMetadataFragment
    }
    legalName
    summary
    website
    addresses {
      ...BaseAddressFragment
    }
    phone
    email
    socialMedias {
      ...SocialMediasFragment
    }
    status
    admin {
      _id
    }
    roles {
      _id
    }
    departments {
      _id
    }
    users {
      _id
    }
    billingInfo {
      ...UserBillingInfoFragment
    }
    integrations {
      iyzicoUserCard {
        cardUserKey
      }
      parasutCustomer {
        referenceId
        error
        createdAt
        updatedAt
      }
    }
    activeSubscriptions {
      ...OrganizationActiveSubscriptionsFragment
    }
  }
`;
