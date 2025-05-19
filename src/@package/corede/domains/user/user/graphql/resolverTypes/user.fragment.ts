import { fileMetadataFragment } from '@common_package';
import { gql } from 'graphql-tag';

export const userFragment = gql`
  ${fileMetadataFragment}

  fragment UserFragment on User {
    _id
    status
    role

    roles {
      _id
    }

    organization {
      _id
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