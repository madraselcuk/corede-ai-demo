import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  OtpInputProps,
} from '@/components/atoms/input-otp/input-otp'
import { formFieldTheme } from '@/theme/form-field.theme'
import { BaseFormFieldProps } from '@/components/interface'

export interface FormOtpFieldProps extends BaseFormFieldProps {
  otpInputProps?: OtpInputProps & {
    length?: number
  }
}

export const formOtpFieldPropsDefaultValues: Partial<FormOtpFieldProps> = {}

export const FormOtpFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  otpInputProps,
}: FormOtpFieldProps) => {
  const length = otpInputProps?.length ?? 6

  return (
    <FormField
      control={form.control}
      name={hookName}
      render={({ field }) => (
        <FormItem
          {...formFieldTheme.containerProps}
          {...formOtpFieldPropsDefaultValues.containerProps}
          {...containerProps}
        >
          {!label?.noLabel && label?.content && (
            <FormLabel
              {...formFieldTheme.label?.props}
              {...formOtpFieldPropsDefaultValues.label?.props}
              {...label?.props}
            >
              {label?.content}
            </FormLabel>
          )}

          <FormControl>
            <InputOTP
              maxLength={length}
              containerClassName={
                otpInputProps?.inputContainerClassName ??
                formOtpFieldPropsDefaultValues.otpInputProps
                  ?.inputContainerClassName
              }
              className={
                otpInputProps?.inputClassName ??
                formOtpFieldPropsDefaultValues.otpInputProps?.inputClassName
              }
              {...field}
            >
              <InputOTPGroup
                className={
                  otpInputProps?.inputGroupClassName ??
                  formOtpFieldPropsDefaultValues.otpInputProps
                    ?.inputGroupClassName
                }
              >
                {[...Array(length).keys()].map((index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className={
                      otpInputProps?.inputSlot?.className ??
                      formOtpFieldPropsDefaultValues.otpInputProps?.inputSlot
                        ?.className
                    }
                    activeClassName={
                      otpInputProps?.inputSlot?.activeClassName ??
                      formOtpFieldPropsDefaultValues.otpInputProps?.inputSlot
                        ?.activeClassName
                    }
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </FormControl>

          {description?.content && (
            <FormDescription
              {...formFieldTheme.description?.props}
              {...formOtpFieldPropsDefaultValues.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage
            {...formFieldTheme.messageProps}
            {...formOtpFieldPropsDefaultValues.messageProps}
            {...messageProps}
          />
        </FormItem>
      )}
    />
  )
}
