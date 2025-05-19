import {
  BaseQueryFn,
  Api,
  EndpointBuilder,
  coreModuleName,
} from '@reduxjs/toolkit/query'
import { reactHooksModuleName } from '@reduxjs/toolkit/query/react'

export type ApiEndpoints = (builder: EndpointBuilder<any, any, any>) => any

export type IApi = Api<
  BaseQueryFn,
  {},
  'commonApi',
  never,
  typeof coreModuleName | typeof reactHooksModuleName
>

// Define the RTK Query API type
export interface ApiWithInject {
  injectEndpoints: (options: { endpoints: ApiEndpoints }) => any
  enhanceEndpoints?: (options: { addTagTypes?: string[] }) => any
}

export interface InjectOptions {
  /**
   * Whether to register auth tag types on the API.
   * Default is true. Set to false if you've already registered these tags.
   */
  registerTagTypes?: boolean
}
