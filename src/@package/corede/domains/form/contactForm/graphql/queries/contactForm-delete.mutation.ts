import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import {
  IContactFormDeleteResult,
  IContactFormDeleteInput,
} from '../resolverTypes'

export const contactFormDeleteQuery = gql`
  mutation contactFormDelete($input: ContactFormDeleteInput!) {
    contactFormDelete(input: $input) {
      success
    }
  }
`

export interface IContactFormDeleteRequest
  extends IBaseGraphqlRequest<IContactFormDeleteInput> {}

export interface IContactFormDeleteResponse
  extends IBaseGraphqlResponse<IContactFormDeleteInput> {
  data: {
    contactFormDelete: IContactFormDeleteResult
  }
  errors: TGraphqlErrors<IContactFormDeleteInput>
}
