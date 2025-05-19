import { formFieldTheme } from '@/theme/form-field.theme'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import Select, { SelectProps } from '@/components/ui/Select'
import CreatableSelect from 'react-select/creatable'
import { BaseFormFieldWrapperProps } from '../form-field-wrapper/form-field-wrapper'

export type MultiChipOptions = {
  value: string
  label: string
}

const defaultOptions: MultiChipOptions[] = []

export type MultiChipSelectorProps = SelectProps<MultiChipOptions, true> & {
  defaultOptions?: MultiChipOptions[]
}

export interface FormMultiChipSelectorProps
  extends BaseFormFieldWrapperProps<MultiChipSelectorProps> {}

export const FormMultiChipSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormMultiChipSelectorProps) => {
  return (
    <FormField
      control={form.control}
      name={hookName}
      render={({ field }) => {
        // Convert string array to MultiChipOptions array
        const value = Array.isArray(field.value)
          ? field.value.map((val) => ({
              value: val,
              label: val,
            }))
          : []

        return (
          <FormItem {...formFieldTheme?.containerProps} {...containerProps}>
            {!label?.noLabel && label?.content && (
              <FormLabel {...formFieldTheme?.label?.props} {...label?.props}>
                {label?.content}
              </FormLabel>
            )}

            <FormControl>
              <Select
                {...inputProps}
                isMulti
                isClearable
                instanceId={inputProps?.instanceId ?? hookName}
                placeholder={inputProps?.placeholder}
                componentAs={CreatableSelect}
                options={inputProps?.defaultOptions || defaultOptions}
                value={value}
                onChange={(options) => {
                  const newValue = options?.map((option) => option.value) || []
                  field.onChange(newValue)
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
        )
      }}
    />
  )
}
