import { enumValues, IGraphqlVariables } from '@common_package'
import {
  cityListQuery,
  ICityListInput,
  ICityListRequest,
  ICityListResponse,
  ICityListResult,
} from '@corede_package'
import { GeoTags } from './geo.tags.enum'
import { EndpointQueryBuilder, IApi, injectTags } from '@api_package'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { GeoEndpointDefinitions } from './geo.api.types'

const geoApiReducerPath = 'geoApi'

export const injectGeoTags = (api: IApi) =>
  injectTags({
    api,
    name: geoApiReducerPath,
    tagTypes: enumValues(GeoTags),
    options: { registerTagTypes: true },
  })

export const geoEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => GeoEndpointDefinitions = (builder) => ({
  cityList: builder.query<ICityListResult, IGraphqlVariables<ICityListInput>>(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ICityListRequest,
      ICityListResponse,
      ICityListResult,
      ICityListInput
    >({
      query: cityListQuery(),
      providesTags: [GeoTags.city],
    }),
  ),
})
