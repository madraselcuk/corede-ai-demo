import { FieldPath, FieldValues } from 'react-hook-form'
import {
  FormEnumSelectorGroupV2,
  FormEnumSelectorGroupPropsV2,
} from '../form-enum-selector/form-enum-selector-v2'
import { Gender } from '@/@package/common'

export interface FormGenderSelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<
    FormEnumSelectorGroupPropsV2<typeof Gender>,
    'hookName' | 'enumObj' | 'enumName' | 'namespace'
  > {
  hookName?: TName
}

export const FormGenderSelectorGroupV2 = ({
  hookName = 'input.gender',
  ...props
}: FormGenderSelectorPropsV2) => {
  return (
    <FormEnumSelectorGroupV2
      hookName={hookName}
      enumObj={Gender}
      enumName="gender"
      {...props}
    />
  )
}
