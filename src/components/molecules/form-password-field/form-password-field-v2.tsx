import { FormItem } from '@/components/ui/Form'
import { Controller, FieldValues, FieldPath } from 'react-hook-form'
import Input, { InputProps } from '@/components/ui/Input'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import { useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export interface FormPasswordFieldPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<FormFieldWrapperV2Props<InputProps>, 'hookName'> {
  hookName?: TName
}

export const FormPasswordFieldGroupV2 = ({
  form,
  hookName = 'input.password',
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormPasswordFieldPropsV2) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <FormItem
      form={form}
      hookName={hookName}
      label={label}
      className={className}
      layout={layout}
      size={size}
      asterisk={required}
      {...rest}
    >
      <Controller
        name={hookName}
        control={form.control}
        render={({ field }) => (
          <div className="relative">
            <Input
              type={passwordVisible ? 'text' : 'password'}
              autoComplete="off"
              {...inputProps}
              {...field}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
              tabIndex={-1}
            >
              {passwordVisible ? (
                <HiEyeOff className="h-5 w-5" />
              ) : (
                <HiEye className="h-5 w-5" />
              )}
            </button>
          </div>
        )}
      />
    </FormItem>
  )
}
