import { Language } from '@common_package'
import { TranslatableTextInputProps } from './translatable-text-input.props'

export const translatableTextInputDefaultProps: Partial<TranslatableTextInputProps> =
  {
    supportedLanguages: [Language.en, Language.tr],
  }
