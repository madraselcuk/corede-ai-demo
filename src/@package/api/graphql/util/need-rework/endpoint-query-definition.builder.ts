import {
  IBaseGraphqlError,
  IBaseGraphqlResponse,
  IGraphqlVariables,
} from '@common_package'
import {
  IEndpointQueryDefinition,
  IEndpointQueryDefinitionBuildParams,
  IHasQueryNode,
  QueryOfEndpointQueryDefinition,
  TransformErrorResponseOfEndPointQueryDefinition,
  TransformResponseOfEndPointQueryDefinition,
} from './endpoint-query-definition.interface'
import { getOperationName } from '@apollo/client/utilities'

import { print } from 'graphql'

export class EndpointQueryDefinitionBuilder<
  TRequest,
  TResponse extends IBaseGraphqlResponse<TInput>,
  TResult,
  TInput = undefined,
  TFilter = undefined,
> {
  private queryDefinitionCallback?: QueryOfEndpointQueryDefinition<
    TRequest,
    TInput,
    TFilter
  >
  private transformResponseCallback?: TransformResponseOfEndPointQueryDefinition<
    TResponse,
    TResult,
    TInput
  >
  private transformErrorResponseCallBack?: TransformErrorResponseOfEndPointQueryDefinition

  providesTags?: string[]
  invalidatesTags?: string[]

  private generateQueryCallback(params: IHasQueryNode) {
    const defaultHeaders: { [key: string]: string } = {}
    const stringQuery = print(params.query)
    this.queryDefinitionCallback = (
      variables?: IGraphqlVariables<TInput, TFilter> & {
        headers?: {
          [key: string]: string
        }
      },
    ) =>
      ({
        url: '',
        body: JSON.stringify({
          query: stringQuery,
          variables: { ...variables, headers: undefined } as IGraphqlVariables<
            TInput,
            TFilter
          >,
        }),
        headers: variables?.headers ?? defaultHeaders,
      }) as TRequest

    return this
  }

  private generateTransformResponseCallback(params: IHasQueryNode) {
    const operationName = getOperationName(params.query)
    this.transformResponseCallback = (response: TResponse): TResult | null => {
      if (!response.data) {
        // TODO: Eger undefined response alma durumunda genel yapilmasi gereken bi aksiyion varsa burda yapilabilir.
        return null
      }
      if (!operationName) {
        return null
      }
      return response.data[operationName]
    }
    return this
  }
  private generateTransformErrorResponseCallback() {
    this.transformErrorResponseCallBack = (response: IBaseGraphqlError) => {
      // TODO: response may not be in the form of IBaseGraphqlError, handle those errors too.
      return response
    }
    return this
  }

  private addProvidesTags(providesTags?: string[]) {
    this.providesTags = providesTags
    return this
  }

  private addInvalidatesTags(invalidatesTags?: string[]) {
    this.invalidatesTags = invalidatesTags
    return this
  }

  public build(): IEndpointQueryDefinition<
    TRequest,
    TResponse,
    TResult,
    TInput,
    TFilter
  > {
    if (!this.queryDefinitionCallback) {
      // TODO implement a suitable error.
      throw Error('Error')
    }
    if (!this.transformResponseCallback) {
      // TODO implement a suitable error.
      throw Error('Error')
    }
    if (!this.transformErrorResponseCallBack) {
      // TODO implement a suitable error.
      throw Error('Error')
    }
    return {
      query: this.queryDefinitionCallback,
      transformResponse: this.transformResponseCallback,
      transformErrorResponse: this.transformErrorResponseCallBack,
      invalidatesTags: this.invalidatesTags,
      providesTags: this.providesTags,
    }
  }

  public static buildEndpointQueryDefinition<
    TRequest,
    TResponse extends IBaseGraphqlResponse<TInput>,
    TResult,
    TInput = undefined,
    TFilter = undefined,
  >(
    params: IEndpointQueryDefinitionBuildParams,
  ): IEndpointQueryDefinition<TRequest, TResponse, TResult, TInput, TFilter> {
    const builder = new EndpointQueryDefinitionBuilder<
      TRequest,
      TResponse,
      TResult,
      TInput,
      TFilter
    >()
    return builder
      .generateQueryCallback(params)
      .generateTransformResponseCallback(params)
      .generateTransformErrorResponseCallback()
      .addInvalidatesTags(params.invalidatesTags)
      .addProvidesTags(params.providesTags)
      .build()
  }
}
