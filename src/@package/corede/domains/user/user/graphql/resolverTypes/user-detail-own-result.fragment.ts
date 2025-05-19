import { fileMetadataFragment } from "@common_package";
import { gql } from "graphql-tag";

export const userDetailOwnResultFragment = gql`
  ${fileMetadataFragment}

  fragment UserDetailOwnResultFragment on UserDetailOwnResult {
    _id
    type
    status
    role

    roles {
      _id
    }

    organization {
      _id
      name
    }
    department {
      _id
      name
    }

    name
    surname
    birthDate
    gender
    address
    phoneNumber
    profileImage {
      ...FileMetadataFragment
    }
    backgroundImage {
      ...FileMetadataFragment
    }
    description
    country
    state
    city

    phoneNumber
    phoneNumberVerified
    email
    emailVerified

    language
    twoFactorAuth {
      email
      sms
      push
    }
    signature {
      ...FileMetadataFragment
    }

    lastLoginDate
    createdAt
    updatedAt
    createdBy {
      _id
    }
    updatedBy {
      _id
    }
  }
`;
