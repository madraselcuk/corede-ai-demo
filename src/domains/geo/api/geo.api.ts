import { commonApi } from '@/api/common.api'
import {
  GeoEndpointDefinitions,
  geoEndpoints,
  injectGeoTags,
} from '@api_package'

injectGeoTags(commonApi)

const injectedGeoApi = commonApi.injectEndpoints<GeoEndpointDefinitions>({
  endpoints: geoEndpoints,
})

export const useCityListQuery = injectedGeoApi.endpoints.cityList.useQuery
export const useLazyCityListQuery =
  injectedGeoApi.endpoints.cityList.useLazyQuery
