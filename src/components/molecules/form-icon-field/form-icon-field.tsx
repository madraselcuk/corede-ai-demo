'use client'

import { Controller } from 'react-hook-form'
import {
  IconSelect,
  IconSelectProps,
} from '@/components/molecules/icon-select/icon-select'
import { FormItem } from '@/components/ui/Form'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'

export interface FormIconFieldPropsV2
  extends FormFieldWrapperV2Props<IconSelectProps> {
  placeholder?: string
}

export function FormIconField({
  form,
  hookName,
  label,
  placeholder,
  isLoading = false,
  required,
  ...rest
}: FormIconFieldPropsV2) {
  return (
    <FormItem
      form={form}
      hookName={hookName}
      label={label}
      layout="vertical"
      size="md"
      asterisk={required}
      {...rest}
    >
      <Controller
        name={hookName}
        control={form.control}
        render={({ field }) => (
          <IconSelect
            value={field.value as string}
            onChange={field.onChange}
            placeholder={placeholder}
            isLoading={isLoading}
          />
        )}
      />
    </FormItem>
  )
}

export default FormIconField
