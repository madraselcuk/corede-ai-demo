import { createApi } from '@reduxjs/toolkit/query/react'
import { tokenStorage } from '@/auth/index'
import { CONFIG } from '@/global-config'
import { TranslationHelper } from '@/localization/helpers/translation.helper'
import { customBaseQuery } from '@api_package'

const commonApiReducerPath = 'commonApi'

export const commonApi = createApi({
  reducerPath: commonApiReducerPath,
  baseQuery: customBaseQuery({
    baseUrl: `${CONFIG.serverUrl}/graphql`,
    language: TranslationHelper.getCurrentLanguage(),
    accessToken: tokenStorage.getAccessToken() ?? undefined,
  }),

  tagTypes: [],

  endpoints: () => ({}),
})
