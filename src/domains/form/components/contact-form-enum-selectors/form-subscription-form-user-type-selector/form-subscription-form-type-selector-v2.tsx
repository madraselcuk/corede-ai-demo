import { FieldPath, FieldValues } from 'react-hook-form'

import { SubscriptionFormUserType } from '@corede_package'
import {
  FormEnumSelectorGroupV2,
  FormEnumSelectorGroupPropsV2,
} from '@/components/molecules/form-enum-selectors/form-enum-selector/form-enum-selector-v2'
import { TranslationResourceNamespace } from '@/localization/resources'

export interface FormSubscriptionFormTypeSelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<
    FormEnumSelectorGroupPropsV2<typeof SubscriptionFormUserType>,
    'hookName' | 'enumObj' | 'enumName' | 'namespace'
  > {
  hookName?: TName
}

export const FormSubscriptionFormTypeSelectorGroupV2 = ({
  hookName = 'input.userType',
  ...props
}: FormSubscriptionFormTypeSelectorPropsV2) => {
  return (
    <FormEnumSelectorGroupV2
      hookName={hookName}
      enumObj={SubscriptionFormUserType}
      enumName="subscriptionFormUserType"
      namespace={TranslationResourceNamespace.form}
      {...props}
    />
  )
}
