import { EnumTranslationFactory } from '@/localization/helpers/enum.translation.factory'
import { FormItem } from '@/components/ui/Form'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '../../form-field-wrapper/form-field-wrapper-v2'
import {
  EnumSelectOption,
  EnumSelectV2,
} from '@/components/atoms/select-enum/enum-select-v2'
import { ControlProps, OptionProps, components } from 'react-select'
import Avatar from '@/components/ui/Avatar'
import { Option as DefaultOption } from '@/components/ui/Select'
import { Language } from '@/@package/common'

export interface LanguageEnumSelectOption extends EnumSelectOption {
  imgPath: string
}

const { Control } = components

const CustomSelectOption = (props: OptionProps<LanguageEnumSelectOption>) => {
  return (
    <DefaultOption<LanguageEnumSelectOption>
      {...props}
      customLabel={(data, label) => (
        <span className="flex items-center gap-2">
          <Avatar shape="circle" size={20} src={data.imgPath} />
          <span className="ml-2 rtl:mr-2">{label}</span>
        </span>
      )}
    />
  )
}

const CustomControl = ({
  children,
  ...props
}: ControlProps<LanguageEnumSelectOption>) => {
  const selected = props.getValue()[0]
  return (
    <Control {...props}>
      {selected && (
        <Avatar
          className="ltr:ml-4 rtl:mr-4"
          shape="circle"
          size={18}
          src={selected.imgPath}
        />
      )}
      {children}
    </Control>
  )
}

export interface FormLanguageSelectorPropsV2<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<FormFieldWrapperV2Props<LanguageEnumSelectOption>, 'hookName'> {
  hookName?: TName
}

export const FormLanguageSelectorGroupV2 = ({
  form,
  hookName = 'input.language',
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormLanguageSelectorPropsV2) => {
  const langOptions = EnumTranslationFactory.languageEnumOptions
  const options: LanguageEnumSelectOption[] = langOptions
    .map((option) => ({
      value: option.value,
      label: option.label,
      imgPath: `/img/countries/${option.value === 'en' ? 'US' : option.value.toUpperCase()}.png`,
    }))
    .filter(
      (option) => option.value == Language.en || option.value == Language.tr,
    )

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
          <EnumSelectV2<LanguageEnumSelectOption>
            options={options}
            {...inputProps}
            {...field}
            components={{
              Control: CustomControl,
              Option: CustomSelectOption,
            }}
            value={options.filter((option) => option.value === field.value)}
            onChange={(option) => field.onChange(option?.value)}
          />
        )}
      />
    </FormItem>
  )
}
