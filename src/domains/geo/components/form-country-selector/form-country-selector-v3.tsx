import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import Select, {
  Option as DefaultOption,
  SelectProps,
} from '@/components/ui/Select'
import { components, ControlProps, OptionProps } from 'react-select'
import { FormFieldWrapperV2Props } from '@/components/molecules/form-field-wrapper/form-field-wrapper-v2'
import Avatar from '@/components/ui/Avatar'
import { countries } from '@api_package'

type CountryOption = {
  label: string
  dialCode: string
  value: string
}

export interface FormCountrySelectorV3Props
  extends Omit<
    FormFieldWrapperV2Props<SelectProps<CountryOption>>,
    'hookName'
  > {
  hookName?: string
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
            src={`/img/countries/${data.value}.png`}
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
          src={`/img/countries/${selected.value}.png`}
        />
      )}
      {children}
    </Control>
  )
}

export const FormCountrySelectorV3 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  errorMessage,
  ...rest
}: FormCountrySelectorV3Props) => {
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
            {...inputProps}
            instanceId="country"
            options={countries.map((country) => ({
              label: country.name,
              value: country.iso2,
              dialCode: country.phone_code,
            }))}
            {...field}
            components={{
              Option: CustomSelectOption,
              Control: CustomControl,
            }}
            placeholder=""
            value={field.value ? countries
              .filter((country) => country.name === field.value)
              .map((country) => ({
                label: country.name,
                value: country.iso2,
                dialCode: country.phone_code,
              }))[0] : null}
            onChange={(option) => field.onChange(option?.value)}
          />
        )}
      />
    </FormItem>
  )
}
