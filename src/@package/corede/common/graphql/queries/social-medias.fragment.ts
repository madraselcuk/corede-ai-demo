import { gql } from "graphql-tag";

export const socialMediasFragment = gql`
  fragment SocialMediasFragment on SocialMedias {
    linkedin
    x
    instagram
    facebook
    youtube
  }
`;
