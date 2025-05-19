import { ICityListInput, ICityListResult } from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import { BaseQueryFn, QueryDefinition } from '@reduxjs/toolkit/query'

type cityListType = QueryDefinition<
  IGraphqlVariables<ICityListInput>,
  BaseQueryFn,
  never,
  ICityListResult,
  'commonApi'
>

export type GeoEndpointDefinitions = {
  cityList: cityListType
}
