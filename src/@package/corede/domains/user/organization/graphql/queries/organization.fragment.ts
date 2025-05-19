import { gql } from "graphql-tag";
import { organizationActiveSubscriptionsFragment } from "./organization-active-subscription.fragment";
import { publicImageFileMetadataFragment } from "@common_package";
import {
  baseAddressFragment,
  socialMediasFragment,
} from "../../../../../common";
import { userBillingInfoFragment } from "../../../common";

export const organizationFragment = gql`
  ${socialMediasFragment}
  ${baseAddressFragment}
  ${publicImageFileMetadataFragment}
  ${userBillingInfoFragment}
  ${organizationActiveSubscriptionsFragment}

  fragment OrganizationFragment on Organization {
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
    billingInfos {
      ...UserBillingInfoFragment
    }
    integrations {
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
