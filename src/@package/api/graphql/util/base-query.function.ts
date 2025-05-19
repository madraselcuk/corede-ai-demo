import {
  BaseQueryFn,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from '@reduxjs/toolkit/query/react'
import {
  IBaseGraphqlError,
  IBaseGraphqlResponse,
  isNullOrUndefinedOrEmpty,
  Language,
  unknownError,
} from '@common_package'
// import { TranslationHelper } from '@/localization/helpers/translation.helper'  // TODO: inject this
// import { CONFIG } from '@/global-config'
// import { tokenStorage } from '@/auth/index'

export const customBaseQuery: (params: {
  baseUrl: string
  language: Language
  accessToken?: string
}) => BaseQueryFn =
  ({ baseUrl, language, accessToken }) =>
  async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
      // baseUrl: `${CONFIG.serverUrl}/graphql`, // TODO: inject this
      baseUrl: baseUrl,
      method: 'POST',
      prepareHeaders(headers) {
        //   headers.set('Accept-Language', TranslationHelper.getCurrentLanguage()) // TODO: inject this
        headers.set('Accept-Language', language)
        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')

        // const accessToken = tokenStorage.getAccessToken() ?? undefined // TODO: inject this
        if (!isNullOrUndefinedOrEmpty(accessToken)) {
          headers.set('authorization', 'Bearer ' + accessToken)
        }
        if (args.headers?.authorization) {
          headers.set('authorization', args?.headers?.authorization)
        }
        return headers
      },
    })

    let response: QueryReturnValue<
      unknown,
      FetchBaseQueryError,
      FetchBaseQueryMeta
    >
    try {
      response = await baseQuery(args, api, extraOptions)
    } catch (error) {
      console.error(error, 'baseQuery.error')
      return {
        error: {
          statusCode: 500,
          error: unknownError,
        },
      }
    }

    if (response.error) {
      // If fetchBaseQuery reports an error (e.g., network issues), return it directly.
      if (
        response.error.status === 'FETCH_ERROR' ||
        response.error.status === 'TIMEOUT_ERROR'
      ) {
        return {
          error: {
            statusCode: 500,
            error: {
              code: 100,
              name: 'connectionError',
              message: {
                en: 'Please check your internet connection',
                tr: 'Lutfen internet baglantinizi kontrol ediniz',
              },
            },
          },
        }
      }
      return response
    }

    if (response.data && (response.data as IBaseGraphqlResponse).errors) {
      // If GraphQL reports an error in the `errors` field, treat it as an error.
      const customError = (response.data as IBaseGraphqlResponse).errors?.at(0)

      let responseError: IBaseGraphqlError = {
        statusCode: 500,
        error: unknownError,
      }

      if (
        customError?.extensions?.code === 'BAD_USER_INPUT' &&
        !customError?.extensions?.custom
      ) {
        responseError.statusCode = 400
        responseError.error = {
          code: 100,
          name: 'badUserInputError',
          message: {
            en: 'Please check your inputs',
            tr: 'Lutfen girmis oldugunuz verileri kontrol ediniz',
          },
        }
      } else if (customError?.extensions?.custom) {
        responseError = customError?.extensions?.custom
      }

      return {
        error: responseError,
      }
    }

    return response // Return the response if everything is okay.
  }
