import {
  IBaseGraphqlError,
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IGraphqlVariables,
} from '@common_package'
import { print } from 'graphql'
import { getOperationName } from '@apollo/client/utilities'

export class EndpointQueryBuilder {
  static BuildGraphqlQuery<
    TRequest extends IBaseGraphqlRequest<TInput, TFilter>,
    TResponse extends IBaseGraphqlResponse<TInput>,
    TResult,
    TInput = undefined,
    TFilter = undefined,
  >(params: {
    query: any // type of `DocumentNode`
    providesTags?: string[]
    invalidatesTags?: string[]
  }): any {
    const operationName = getOperationName(params.query)
    return {
      query: (
        variables?: IGraphqlVariables<TInput, TFilter> & {
          headers?: { [key: string]: string }
        },
      ) => {
        //   `${operationName} variable: ` +
        //     JSON.stringify(variables, undefined, 2)
        // );
        return {
          url: '',
          body: JSON.stringify({
            query: print(params.query),
            variables: {
              ...variables,
              headers: undefined,
            } as IGraphqlVariables<TInput, TFilter>,
          } as TRequest),
          headers: variables?.headers ?? {},
        }
      },
      transformResponse: (response: TResponse): TResult | null => {
        if (!response.data) {
          // TODO: Eger undefined response alma durumunda genel yapilmasi gereken bi aksiyion varsa burda yapilabilir.
          return null
        }
        if (!operationName) {
          return null
        }
        return response.data[operationName]
      },
      transformErrorResponse: (response: IBaseGraphqlError) => {
        // TODO: response may not be in the form of IBaseGraphqlError, handle those errors too.
        return response
      },
      providesTags: params.providesTags,
      invalidatesTags: params.invalidatesTags,
    }
  }
}
