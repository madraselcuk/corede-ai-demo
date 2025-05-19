import Select, { SelectProps } from '@/components/ui/Select'
import CreatableSelect from 'react-select/creatable'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import { Controller } from 'react-hook-form'
import { FormItem } from '@/components/ui/Form'

export type MultiChipOptions = {
  value: string
  label: string
}

const defaultOptions: MultiChipOptions[] = []

export type MultiChipSelectorProps = SelectProps<MultiChipOptions, true> & {
  defaultOptions?: MultiChipOptions[]
}

export interface FormMultiChipSelectorV2Props
  extends FormFieldWrapperV2Props<MultiChipSelectorProps> {}

export const FormMultiChipSelectorV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormMultiChipSelectorV2Props) => {
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
          <Select
            isMulti
            isClearable
            componentAs={CreatableSelect}
            options={inputProps?.defaultOptions || defaultOptions}
            {...inputProps}
            {...field}
            value={
              Array.isArray(field.value)
                ? field.value.map((val) => ({
                    value: val,
                    label: val,
                  }))
                : []
            }
            onChange={(options) => {
              const newValue = options?.map((option) => option.value) || []
              field.onChange(newValue)
            }}
          />
        )}
      />
    </FormItem>
  )
}
