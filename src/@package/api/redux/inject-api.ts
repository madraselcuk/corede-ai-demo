import { InjectOptions, ApiEndpoints, IApi } from './api.interface'

export function injectTags(params: {
  api: IApi
  name: string
  tagTypes?: string[]
  options: InjectOptions
}) {
  const { api, name, tagTypes, options } = params

  // Register tag types if requested
  if (options.registerTagTypes && tagTypes && api.enhanceEndpoints) {
    try {
      // Register domain tags if the API supports enhanceEndpoints
      api.enhanceEndpoints({ addTagTypes: tagTypes })
      console.debug(`${name} tags registered successfully:`, tagTypes)
    } catch (error) {
      // Log warning but continue - some APIs might not support enhanceEndpoints
      console.warn(
        'Unable to register tag types. ' +
          "Please ensure you've added these tag types when creating your API: ",
        tagTypes,
        error,
      )
    }
  }
}

/**
 * Injects auth API endpoints into the provided API instance
 * @param api The RTK Query API instance
 * @param options Configuration options for injection
 * @returns The auth API endpoints
 */
export function injectApi(
  api: IApi,
  name: string,
  endpoints: ApiEndpoints,
  tagTypes: string[],
  options: InjectOptions = {},
) {
  const { registerTagTypes = true } = options

  // Register tag types if requested
  if (registerTagTypes && api.enhanceEndpoints) {
    try {
      // Register domain tags if the API supports enhanceEndpoints
      api.enhanceEndpoints({ addTagTypes: tagTypes })
      console.debug(`${name} tags registered successfully:`, tagTypes)
    } catch (error) {
      // Log warning but continue - some APIs might not support enhanceEndpoints
      console.warn(
        'Unable to register tag types. ' +
          "Please ensure you've added these tag types when creating your API: ",
        tagTypes,
        error,
      )
    }
  }

  // Inject endpoints
  return api.injectEndpoints({
    endpoints,
  })
}
