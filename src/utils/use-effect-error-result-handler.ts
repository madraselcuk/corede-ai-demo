import { Language, unknownError } from '@common_package'

export function GetUseEffectErrorResult(params: {
  error: any // this is the type for a graphql response containing error
  currentLanguage: Language
  defaultMessage?: string
}): string | undefined {
  const { error, currentLanguage, defaultMessage } = params

  if (error) {
    return error.error?.message && error.error?.message[currentLanguage]
      ? error.error?.message[currentLanguage]
      : (defaultMessage ?? unknownError.message[currentLanguage])
  }
}
