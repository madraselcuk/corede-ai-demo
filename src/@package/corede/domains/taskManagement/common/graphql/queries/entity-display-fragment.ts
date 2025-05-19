import { thumbnailFileMetadataFragment } from '@common_package'
import { gql } from 'graphql-tag'

export const entityDisplayMetadataFragment = gql`
  ${thumbnailFileMetadataFragment}

  fragment EntityDisplayMetadataFragment on EntityDisplay {
    _id
    name
    image {
      ...ThumbnailFileMetadataFragment
    }
  }
`
