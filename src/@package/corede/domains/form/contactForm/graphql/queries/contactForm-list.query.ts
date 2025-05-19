import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import {
  IContactFormListResult,
  IContactFormListInput,
} from '../resolverTypes/'
import { contactFormListItemResultFragment } from './contactForm-list.item.result.fragment'

export const contactFormListQuery = gql`
  ${contactFormListItemResultFragment}

  query contactFormList($input: ContactFormListInput) {
    contactFormList(input: $input) {
      data {
        ...ContactFormListItemResultFragment
      }
      count
    }
  }
`

export interface IContactFormListRequest
  extends IBaseGraphqlRequest<IContactFormListInput, undefined> {}

export interface IContactFormListResponse
  extends IBaseGraphqlResponse<IContactFormListInput> {
  data: {
    contactFormList: IContactFormListResult
  }
  errors: TGraphqlErrors<IContactFormListInput>
}
