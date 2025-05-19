import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import {
  IContactFormCreateResult,
  IContactFormCreateInput,
} from '../resolverTypes'

export const contactFormCreateQuery = gql`
  mutation contactFormCreate($input: ContactFormCreateInput!) {
    contactFormCreate(input: $input) {
      _id
    }
  }
`

export interface IContactFormCreateRequest
  extends IBaseGraphqlRequest<IContactFormCreateInput> {}

export interface IContactFormCreateResponse
  extends IBaseGraphqlResponse<IContactFormCreateInput> {
  data: {
    contactFormCreate: IContactFormCreateResult
  }
  errors: TGraphqlErrors<IContactFormCreateInput>
}
