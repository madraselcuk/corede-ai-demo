import { EnumTranslationFactory } from '@/localization/helpers/enum.translation.factory'
import { FormItem } from '@/components/ui/Form'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '@/components/molecules/form-field-wrapper/form-field-wrapper-v2'
import {
  EnumSelectOption,
  EnumSelectV2,
} from '@/components/atoms/select-enum/enum-select-v2'
import { PermissionActionScope } from '@/@package/common/domains/auth/permission/enums/PermissionActionScope'

export interface PermissionActionScopeEnumSelectOption extends EnumSelectOption {
  description?: string
}

export interface FormPermissionActionScopeSelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<FormFieldWrapperV2Props<PermissionActionScopeEnumSelectOption>, 'hookName'> {
  hookName?: TName
}

export const FormPermissionActionScopeSelectorV2 = ({
  form,
  hookName = 'input.actionScope',
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  errorMessage,
  ...rest
}: FormPermissionActionScopeSelectorPropsV2) => {
  // Get permission action options from the enum
  const permissionActionScopeOptions = EnumTranslationFactory.enumOptions({
    enumName: 'PermissionActionScope',
    enumObj: PermissionActionScope,
    namespace: 'auth',
  })


  return (
    <FormItem
      label={label}
      className={className}
      layout={layout}
      size={size}
      invalid={Boolean(form.formState.errors[hookName])}
      errorMessage={
        errorMessage ?? (form.formState.errors[hookName]?.message as string)
      }
      {...rest}
    >
      <Controller
        name={hookName}
        control={form.control}
        render={({ field }) => (
          <EnumSelectV2<PermissionActionScopeEnumSelectOption>
            options={permissionActionScopeOptions}
            {...inputProps}
            {...field}
            value={permissionActionScopeOptions.filter((option) => option.value === field.value)}
            onChange={(option) => field.onChange(option?.value)}
          />
        )}
      />
    </FormItem>
  )
}

