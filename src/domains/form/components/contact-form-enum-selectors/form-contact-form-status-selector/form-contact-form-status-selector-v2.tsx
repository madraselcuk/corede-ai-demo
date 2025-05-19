import { FieldPath, FieldValues } from 'react-hook-form'

import { ContactFormStatus } from '@corede_package'
import {
  FormEnumSelectorGroupV2,
  FormEnumSelectorGroupPropsV2,
} from '@/components/molecules/form-enum-selectors/form-enum-selector/form-enum-selector-v2'
import { TranslationResourceNamespace } from '@/localization/resources'

export interface FormContactFormStatusSelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<
    FormEnumSelectorGroupPropsV2<typeof ContactFormStatus>,
    'hookName' | 'enumObj' | 'enumName' | 'namespace'
  > {
  hookName?: TName
}

export const FormContactFormStatusSelectorGroupV2 = ({
  hookName = 'input.status',
  ...props
}: FormContactFormStatusSelectorPropsV2) => {
  return (
    <FormEnumSelectorGroupV2
      hookName={hookName}
      enumObj={ContactFormStatus}
      enumName="contactFormStatus"
      namespace={TranslationResourceNamespace.form}
      {...props}
    />
  )
}
