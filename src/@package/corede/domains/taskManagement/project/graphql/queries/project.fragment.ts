import { gql } from 'graphql-tag';
// import { userProfileMetadataFragment } from "@corede_package";

export const projectFragment = gql`

  fragment ProjectFragment on Project {
    _id
    title
    description
    tags
    isMain
    status
    progress
    priority
    milestones {
      _id
    }
    assignees {
      _id
      # ...UserProfileMetadataFragment
    }
    followers {
      _id
      # ...UserProfileMetadataFragment
    }
    comments {
      _id
    }
    notes {
      _id
    }
    mainProject {
      _id
    }
    parentProject {
      _id
    }
    childProjects {
      _id
    }
    documents {
      ...FileMetadataFragment
    }
    organization {
      _id
    }
    department {
      _id
    }
    createdAt
    updatedAt
    createdBy {
      _id
      # ...UserProfileMetadataFragment
    }
    updatedBy {
      _id
      # ...UserProfileMetadataFragment
    }
  }
`;
