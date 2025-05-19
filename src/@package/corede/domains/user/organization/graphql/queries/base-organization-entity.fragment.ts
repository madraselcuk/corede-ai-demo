import { publicImageFileMetadataFragment } from "@common_package";
import { gql } from "graphql-tag";

export const baseOrganizationEntityFragment = gql`
  ${publicImageFileMetadataFragment}

  fragment BaseOrganizationEntityFragment on BaseOrganizationEntity {
    _id
    status
    name
    legalName
    logo {
      ...PublicImageFileMetadataFragment
    }
    admin {
      _id
    }
  }
`;
