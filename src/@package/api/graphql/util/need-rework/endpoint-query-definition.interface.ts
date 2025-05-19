import {
  IBaseGraphqlResponse,
  IGraphqlVariables,
  IBaseGraphqlError,
} from '@common_package'

export interface IEndpointQueryDefinition<
  TRequest,
  TResponse extends IBaseGraphqlResponse<TInput>,
  TResult,
  TInput = undefined,
  TFilter = undefined,
> {
  query: QueryOfEndpointQueryDefinition<TRequest, TInput, TFilter>
  transformResponse: TransformResponseOfEndPointQueryDefinition<
    TResponse,
    TResult,
    TInput
  >
  transformErrorResponse: TransformErrorResponseOfEndPointQueryDefinition

  providesTags?: string[]
  invalidatesTags?: string[]
}

export type QueryOfEndpointQueryDefinition<
  TRequest,
  TInput = undefined,
  TFilter = undefined,
> = (
  variables?: IGraphqlVariables<TInput, TFilter> & {
    headers?: {
      [key: string]: string
    }
  },
) => TRequest

export type TransformResponseOfEndPointQueryDefinition<
  TResponse extends IBaseGraphqlResponse<TInput>,
  TResult,
  TInput = undefined,
> = (response: TResponse) => TResult | null

export type TransformErrorResponseOfEndPointQueryDefinition = (
  response: IBaseGraphqlError,
) => IBaseGraphqlError

export interface IEndpointQueryDefinitionBuildParams extends IHasQueryNode {
  providesTags?: string[]
  invalidatesTags?: string[]
}

export interface IHasQueryNode {
  query: any
}

// TODO
// export type IEndpointQueryDefinitionRequest<
//   TInput = undefined,
//   TFilter = undefined
// > =
//   | {
//       url?: string
//       body?: string
//       headers?: {
//         [key: string]: string
//       }
//     }
//   | IBaseGraphqlRequest<TInput, TFilter>
