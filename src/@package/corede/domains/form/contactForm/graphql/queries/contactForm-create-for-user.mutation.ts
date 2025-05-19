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

export const contactFormCreateForUserQuery = gql`
  mutation contactFormCreateForUser($input: ContactFormCreateInput!) {
    contactFormCreateForUser(input: $input) {
      _id
    }
  }
`

export interface IContactFormCreateForUserRequest
  extends IBaseGraphqlRequest<IContactFormCreateInput> {}

export interface IContactFormCreateForUserResponse
  extends IBaseGraphqlResponse<IContactFormCreateInput> {
  data: {
    contactFormCreateForUser: IContactFormCreateResult
  }
  errors: TGraphqlErrors<IContactFormCreateInput>
}
