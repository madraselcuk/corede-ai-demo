import { EnumTranslationFactory } from '@/localization/helpers/enum.translation.factory'
import { FormItem } from '@/components/ui/Form'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '@/components/molecules/form-field-wrapper/form-field-wrapper-v2'
import {
  EnumSelectOption,
  EnumSelectV2,
} from '@/components/atoms/select-enum/enum-select-v2'
import { PermissionCategory } from '@/@package/common/domains/auth/permission/enums/PermissionCategory'

export interface PermissionCategoryEnumSelectOption extends EnumSelectOption {
  description?: string
}

export interface FormPermissionCategorySelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<FormFieldWrapperV2Props<PermissionCategoryEnumSelectOption>, 'hookName'> {
  hookName?: TName
}

export const FormPermissionCategorySelectorV2 = ({
  form,
  hookName = 'input.category',
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  errorMessage,
  ...rest
}: FormPermissionCategorySelectorPropsV2) => {
  // Get permission category options from the enum
  const permissionActionOptions = EnumTranslationFactory.enumOptions({
    enumName: 'PermissionCategory',
    enumObj: PermissionCategory,
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
          <EnumSelectV2<PermissionCategoryEnumSelectOption>
            options={permissionActionOptions}
            {...inputProps}
            {...field}
            value={permissionActionOptions.filter((option) => option.value === field.value)}
            onChange={(option) => field.onChange(option?.value)}
          />
        )}
      />
    </FormItem>
  )
}

