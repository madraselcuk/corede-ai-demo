import { formFieldTheme } from '@/theme/form-field.theme'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import { BaseFormFieldProps } from '@/components/interface'

export interface BaseFormFieldWrapperProps<TInputProps>
  extends BaseFormFieldProps {
  inputProps?: TInputProps
}

export interface FormFieldWrapperProps<TInputProps>
  extends BaseFormFieldWrapperProps<TInputProps> {
  inputComponent: React.ElementType
}

export const FormFieldWrapper = <TInputProps,>({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputComponent: InputComponent,
  inputProps,
}: FormFieldWrapperProps<TInputProps>) => {
  return (
    <FormField
      key={`${hookName}-form-field`}
      control={form.control}
      name={hookName}
      render={({ field, fieldState }) => (
        <FormItem
          key={`${hookName}-form-item`}
          {...formFieldTheme?.containerProps}
          {...containerProps}
        >
          {!label?.noLabel && label?.content && (
            <FormLabel
              key={`${hookName}-form-label`}
              htmlFor={`${hookName}-form-input`}
              {...formFieldTheme?.label?.props}
              {...label?.props}
            >
              {label?.content}
            </FormLabel>
          )}

          <FormControl key={`${hookName}-form-control`}>
            <InputComponent
              key={`${hookName}-form-input`}
              {...formFieldTheme?.inputProps}
              error={fieldState.error}
              {...field}
              {...inputProps}
            />
          </FormControl>

          {description?.content && (
            <FormDescription
              key={`${hookName}-form-description`}
              {...formFieldTheme?.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage
            key={`${hookName}-form-message`}
            {...formFieldTheme?.messageProps}
            {...messageProps}
          />
        </FormItem>
      )}
    />
  )
}
