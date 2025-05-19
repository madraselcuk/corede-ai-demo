import { InputProps } from '@/components/ui/co/input'
import { IBaseTranslation, Language } from '@common_package'

export interface TranslatableTextInputProps
  extends Omit<InputProps, 'type' | 'value' | 'onChange'> {
  value?: IBaseTranslation
  onChange?: (translation: IBaseTranslation) => void
  supportedLanguages?: Language[]
}
