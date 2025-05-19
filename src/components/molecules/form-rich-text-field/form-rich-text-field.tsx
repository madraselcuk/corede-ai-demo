import { BaseFormFieldWrapperProps } from '../form-field-wrapper/form-field-wrapper'
import RichTextEditor, {
  RichTextEditorProps,
} from '@/components/shared/RichTextEditor/RichTextEditor'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import { formFieldTheme } from '@/theme'

export interface FormRichTextFieldProps
  extends BaseFormFieldWrapperProps<RichTextEditorProps> {}

export const FormRichTextFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
}: FormRichTextFieldProps) => {
  return (
    <FormField
      key={`${hookName}-form-field`}
      control={form.control}
      name={hookName}
      render={({ field, fieldState }) => (
        <FormItem {...formFieldTheme?.containerProps} {...containerProps}>
          {!label?.noLabel && label?.content && (
            <FormLabel {...formFieldTheme?.label?.props} {...label?.props}>
              {label?.content}
            </FormLabel>
          )}

          <FormControl>
            <RichTextEditor              
              key={field.value}
              content={field.value || ''}
              invalid={Boolean(fieldState.error)}
              onChange={({ html }) => {
                field.onChange(html)
              }}
            />
          </FormControl>

          {description?.content && (
            <FormDescription
              {...formFieldTheme?.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage {...formFieldTheme?.messageProps} {...messageProps} />
        </FormItem>
      )}
    />
  )
}
