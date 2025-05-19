import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import Select, {
  Option as DefaultOption,
  SelectProps,
} from '@/components/ui/Select'
import { components, ControlProps, OptionProps } from 'react-select'
import { FormFieldWrapperV2Props } from '@/components/molecules/form-field-wrapper/form-field-wrapper-v2'
import Avatar from '@/components/ui/Avatar'
import { SelectItemProps } from '@/components/interface'
import { countries } from '@api_package'

export type CountryOption = SelectItemProps & {
  iso2: string
  dialCode: string
}

export interface FormCountrySelectorV2Props
  extends Omit<
    FormFieldWrapperV2Props<SelectProps<CountryOption>>,
    'hookName'
  > {
  hookName?: string
  inputProps?: Omit<SelectProps<CountryOption>, 'options'> & {
    onValueChange?: (option?: CountryOption) => void
  }
}

const { Control } = components

const CustomSelectOption = (props: OptionProps<CountryOption>) => {
  return (
    <DefaultOption<CountryOption>
      {...props}
      customLabel={(data, label) => (
        <span className="flex items-center gap-2">
          <Avatar
            shape="circle"
            size={20}
            src={`/img/countries/${data.iso2}.png`}
          />
          <span>{label}</span>
        </span>
      )}
    />
  )
}

const CustomControl = ({ children, ...props }: ControlProps<CountryOption>) => {
  const selected = props.getValue()[0]
  return (
    <Control {...props}>
      {selected && (
        <Avatar
          className="ltr:ml-4 rtl:mr-4"
          shape="circle"
          size={20}
          src={`/img/countries/${selected.iso2}.png`}
        />
      )}
      {children}
    </Control>
  )
}

export const FormCountrySelectorV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  errorMessage,
  ...rest
}: FormCountrySelectorV2Props) => {
  const inputHookName = hookName ?? 'input.country'

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
          <Select<CountryOption>
            instanceId="country"
            placeholder=""
            {...inputProps}
            options={countries.map((country) => ({
              label: country.name,
              value: country.name,
              dialCode: country.phone_code,
              iso2: country.iso2,
            }))}
            {...field}
            components={{
              Option: CustomSelectOption,
              Control: CustomControl,
            }}
            value={countries
              .map((option) => ({
                label: option.name,
                value: option.name,
                dialCode: option.phone_code,
                iso2: option.iso2,
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
