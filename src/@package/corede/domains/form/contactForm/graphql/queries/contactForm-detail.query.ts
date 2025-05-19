import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import {
  IContactFormDetailResult,
  IContactFormDetailInput,
} from '../resolverTypes'
import { contactFormDetailResultFragment } from './contactForm-detail.result.fragment'

export const contactFormDetailQuery = gql`
  ${contactFormDetailResultFragment}

  query contactFormDetail($input: ContactFormDetailInput!) {
    contactFormDetail(input: $input) {
      ...ContactFormDetailResultFragment
    }
  }
`

export interface IContactFormDetailRequest
  extends IBaseGraphqlRequest<IContactFormDetailInput, undefined> {}

export interface IContactFormDetailResponse
  extends IBaseGraphqlResponse<IContactFormDetailInput> {
  data: {
    contactFormDetail: IContactFormDetailResult
  }
  errors: TGraphqlErrors<IContactFormDetailInput>
}
