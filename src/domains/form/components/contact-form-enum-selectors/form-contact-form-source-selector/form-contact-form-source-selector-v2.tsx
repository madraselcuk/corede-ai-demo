import { FieldPath, FieldValues } from 'react-hook-form'

import { ContactFormSource } from '@corede_package'
import {
  FormEnumSelectorGroupV2,
  FormEnumSelectorGroupPropsV2,
} from '@/components/molecules/form-enum-selectors/form-enum-selector/form-enum-selector-v2'
import { TranslationResourceNamespace } from '@/localization/resources'

export interface FormContactFormSourceSelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<
    FormEnumSelectorGroupPropsV2<typeof ContactFormSource>,
    'hookName' | 'enumObj' | 'enumName' | 'namespace'
  > {
  hookName?: TName
}

export const FormContactFormSourceSelectorGroupV2 = ({
  hookName = 'input.source',
  ...props
}: FormContactFormSourceSelectorPropsV2) => {
  return (
    <FormEnumSelectorGroupV2
      hookName={hookName}
      enumObj={ContactFormSource}
      enumName="contactFormSource"
      namespace={TranslationResourceNamespace.form}
      {...props}
    />
  )
}
