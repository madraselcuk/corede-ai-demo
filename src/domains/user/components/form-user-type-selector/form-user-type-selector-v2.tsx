import { FieldPath, FieldValues } from 'react-hook-form'

import { UserType } from '@corede_package'
import {
  FormEnumSelectorGroupV2,
  FormEnumSelectorGroupPropsV2,
} from '@/components/molecules/form-enum-selectors/form-enum-selector/form-enum-selector-v2'
import { TranslationResourceNamespace } from '@/localization/resources'
export interface FormUserTypeSelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<
  FormEnumSelectorGroupPropsV2<typeof UserType>,
  'hookName' | 'enumObj' | 'enumName' | 'namespace'
> {
  hookName?: TName
}

export const FormUserTypeSelectorGroupV2 = ({
  hookName = 'input.type',
  ...props
}: FormUserTypeSelectorPropsV2) => {
  return (
    <FormEnumSelectorGroupV2
      hookName={hookName}
      enumObj={UserType}
      enumName="userType"
      namespace={TranslationResourceNamespace.form}
      {...props}
    />
  )
}
