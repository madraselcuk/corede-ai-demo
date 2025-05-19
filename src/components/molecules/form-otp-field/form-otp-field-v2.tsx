import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import OtpInput, { OTPInputProps } from '@/components/shared/OtpInput'

export const DEFAULT_OTP_LENGTH = 6

export interface FormOtpFieldPropsV2
  extends FormFieldWrapperV2Props<OTPInputProps> {}

export const FormOtpFieldGroupV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormOtpFieldPropsV2) => {
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
          <OtpInput
            length={DEFAULT_OTP_LENGTH}
            {...field}
            {...inputProps}
            {...field}
          />
        )}
      />
    </FormItem>
  )
}
