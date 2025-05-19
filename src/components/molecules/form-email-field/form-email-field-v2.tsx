import { FormItem } from '@/components/ui/Form'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import Input, { InputProps } from '@/components/ui/Input'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import { i18n } from '@/localization'

export interface FormEmailFieldPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<FormFieldWrapperV2Props<InputProps>, 'hookName'> {
  hookName?: TName
}

export const FormEmailFieldGroupV2 = ({
  form,
  hookName = 'input.email',
  className,
  label = i18n.t('common:email'),
  labelShow = true,
  //CHANGED labelShow 
  layout = 'vertical',
  size = 'md',
  inputProps = {} as InputProps,
  required,
  ...rest
}: FormEmailFieldPropsV2) => {
  const { placeholder = i18n.t('common:email'), ...inputPropsRest } = inputProps

  return (
    <FormItem
      form={form}
      hookName={hookName}
      label={label}
      labelShow={labelShow}
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
          <Input
            type="email"
            autoComplete="off"
            placeholder={placeholder}
            {...inputPropsRest}
            {...field}
          />
        )}
      />
    </FormItem>
  )
}
