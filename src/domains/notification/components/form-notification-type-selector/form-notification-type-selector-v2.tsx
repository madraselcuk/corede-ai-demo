import { FieldPath, FieldValues } from 'react-hook-form'

import { NotificationType } from '@corede_package'
import {
  FormEnumSelectorGroupV2,
  FormEnumSelectorGroupPropsV2,
} from '@/components/molecules/form-enum-selectors/form-enum-selector/form-enum-selector-v2'
import { TranslationResourceNamespace } from '@/localization/resources'
export interface FormNotificationTypeSelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<
  FormEnumSelectorGroupPropsV2<typeof NotificationType>,
  'hookName' | 'enumObj' | 'enumName' | 'namespace'
> {
  hookName?: TName
}

export const FormNotificationTypeSelectorGroupV2 = ({
  hookName = 'input.type',
  ...props
}: FormNotificationTypeSelectorPropsV2) => {
  return (
    <FormEnumSelectorGroupV2
      hookName={hookName}
      enumObj={NotificationType}
      enumName="notificationType"
      namespace={TranslationResourceNamespace.form}
      {...props}
    />
  )
}
