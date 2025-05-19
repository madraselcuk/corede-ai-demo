import { FieldPath, FieldValues } from 'react-hook-form'

import { ContactFormType } from '@corede_package'
import {
  FormEnumSelectorGroupV2,
  FormEnumSelectorGroupPropsV2,
} from '@/components/molecules/form-enum-selectors/form-enum-selector/form-enum-selector-v2'
import { TranslationResourceNamespace } from '@/localization/resources'
export interface FormContactFormTypeSelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<
    FormEnumSelectorGroupPropsV2<typeof ContactFormType>,
    'hookName' | 'enumObj' | 'enumName' | 'namespace'
  > {
  hookName?: TName
}

export const FormContactFormTypeSelectorGroupV2 = ({
  hookName = 'input.type',
  ...props
}: FormContactFormTypeSelectorPropsV2) => {
  return (
    <FormEnumSelectorGroupV2
      hookName={hookName}
      enumObj={ContactFormType}
      enumName="contactFormType"
      namespace={TranslationResourceNamespace.form}
      {...props}
    />
  )
}
