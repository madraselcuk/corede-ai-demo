import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import Select, { SelectProps } from '@/components/ui/Select'
import { FormFieldWrapperV2Props } from '@/components/molecules/form-field-wrapper/form-field-wrapper-v2'
import { SelectItemProps } from '@/components/interface'
import { getStates } from '@api_package'

export type StateOption = SelectItemProps & {
  country_name: string
}

export interface FormStateSelectorV2Props
  extends Omit<FormFieldWrapperV2Props<SelectProps<StateOption>>, 'hookName'> {
  countryName?: string
  hookName?: string
  inputProps?: Omit<SelectProps<StateOption>, 'options'> & {
    onValueChange?: (option?: StateOption) => void
  }
}

export const FormStateSelectorV2 = ({
  countryName,
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  errorMessage,
  ...rest
}: FormStateSelectorV2Props) => {
  const inputHookName = hookName ?? 'input.state'

  return (
    <FormItem
      label={label}
      className={className}
      layout={layout}
      size={size}
      invalid={Boolean(form.formState.errors[inputHookName])}
      errorMessage={
        errorMessage ??
        (form.formState.errors[inputHookName]?.message as string)
      }
      {...rest}
    >
      <Controller
        name={inputHookName}
        control={form.control}
        render={({ field }) => (
          <Select<StateOption>
            instanceId="state"
            placeholder=""
            {...inputProps}
            options={
              countryName
                ? getStates({
                    countryName: countryName ?? form.watch('input.country'),
                  }).map((state) => ({
                    label: state.name,
                    value: state.name,
                    country_name: state.country_name,
                  }))
                : []
            }
            {...field}
            value={getStates({
              countryName: countryName ?? form.watch('input.country'),
            })
              .map((state) => ({
                label: state.name,
                value: state.name,
                country_name: state.country_name,
              }))
              .filter((option) => option.value === field.value)}
            onChange={(option) => {
              inputProps?.onValueChange &&
                inputProps?.onValueChange(option ?? undefined)
              field.onChange(option?.value)
            }}
          />
        )}
      />
    </FormItem>
  )
}
