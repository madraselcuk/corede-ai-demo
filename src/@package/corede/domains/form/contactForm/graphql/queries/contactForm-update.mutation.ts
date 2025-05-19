import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import {
  IContactFormUpdateInput,
  IContactFormUpdateFilterInput,
  IContactFormUpdateResult,
} from '../resolverTypes'

export const contactFormUpdateQuery = gql`
  mutation contactFormUpdate(
    $filter: ContactFormUpdateFilterInput!
    $input: ContactFormUpdateInput!
  ) {
    contactFormUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`

export interface IContactFormUpdateRequest
  extends IBaseGraphqlRequest<
    IContactFormUpdateInput,
    IContactFormUpdateFilterInput
  > {}

export interface IContactFormUpdateResponse
  extends IBaseGraphqlResponse<IContactFormUpdateInput> {
  data: {
    contactFormUpdate: IContactFormUpdateResult
  }
  errors: TGraphqlErrors<IContactFormUpdateInput>
}
