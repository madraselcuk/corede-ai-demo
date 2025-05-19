import RichTextEditor, {
  RichTextEditorProps,
} from '@/components/shared/RichTextEditor/RichTextEditor'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'

export interface FormRichTextFieldPropsV2
  extends FormFieldWrapperV2Props<RichTextEditorProps> {}

export const FormRichTextFieldGroupV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormRichTextFieldPropsV2) => {
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
          <RichTextEditor
            {...inputProps}
            {...field}
            key={field.value}
            content={field.value || ''}
            onChange={({ html }) => {
              field.onChange(html)
            }}
          />
        )}
      />
    </FormItem>
  )
}
