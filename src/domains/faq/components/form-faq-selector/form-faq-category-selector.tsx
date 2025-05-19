import { i18n } from '@/localization'
import { formFieldTheme } from '@/theme/form-field.theme'
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import { useEffect, useState } from 'react'
import { useFaqCategoryListQuery } from '../../api/faq-category-api'
import { BaseFormFieldProps } from '@/components/interface'
import { FieldPath, FieldValues } from 'react-hook-form'
import {
  CoAutocompleteSelectProps,
  CoAutoCompleteSelect as AutoComplete,
} from '@/components/atoms/select-autocomplete'

export const formFaqCategorySelectorDefaultProps: Partial<FormFaqCategorySelectorProps> =
  {
    label: {
      content: i18n.t('faq:faqCategory'),
    },
  }

export interface FormFaqCategorySelectorProps<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<BaseFormFieldProps, 'hookName'> {
  hookName?: TName
  inputProps?: Omit<CoAutocompleteSelectProps, 'options'>
}

export const FormFaqCategorySelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormFaqCategorySelectorProps) => {
  const [options, setOptions] = useState<Option[]>([])

  const inputHookName = hookName ?? 'input.faqCategory'

  const { data: faqCategoryListData, isLoading: loading } =
    useFaqCategoryListQuery({
      input: {
        pagination: {
          sort: {
            name: 1,
          },
        },
      },
    })

  useEffect(() => {
    setOptions(
      (faqCategoryListData?.data ?? []).map((c) => {
        return {
          label: c.name,
          value: c._id,
        }
      }),
    )
  }, [faqCategoryListData])

  return (
    <FormField
      control={form.control}
      name={inputHookName}
      render={({ field }) => (
        <FormItem
          {...formFieldTheme.containerProps}
          {...formFaqCategorySelectorDefaultProps.containerProps}
          {...containerProps}
        >
          {!label?.noLabel && (
            <FormLabel
              {...formFieldTheme.label?.props}
              {...formFaqCategorySelectorDefaultProps.label?.props}
              {...label?.props}
            >
              {label?.content ?? i18n.t('faq:faqCategory')}
            </FormLabel>
          )}

          <AutoComplete
            key={options.find((o) => o.value === field.value)?.value}
            value={options.find((o) => o.value === field.value)}
            options={options}
            emptyProps={{
              emptyMessage:
                inputProps?.emptyMessage ?? i18n.t('noResultPlaceholder'),
            }}
            placeholder={
              inputProps?.placeholder ?? i18n.t(`faq:selectFaqCategory`)
            }
            isLoading={loading || inputProps?.isLoading}
            onValueChange={(option: Option) => {
              inputProps?.onValueChange && inputProps?.onValueChange(option)
              field.onChange(option.value)
            }}
            disabled={inputProps?.disabled}
          />
          {/* <CoSelect
        control={props.control}
        inputHookName={inputHookName}
        selectProps={{
          options: faqCategoryListData?.data.map((c) => {
            return {
              label: c.name,
              value: c.name
            }
          }),
          ...formFaqCategorySelectorPropsDefaultValues.selectProps?.selectProps,
          ...props.selectProps?.selectProps,
          loading:
        }}
        placeholderProps={{
          placeholder
        }}
      /> */}

          {description?.content && (
            <FormDescription
              {...formFieldTheme.description?.props}
              {...formFaqCategorySelectorDefaultProps.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage
            {...formFieldTheme.messageProps}
            {...formFaqCategorySelectorDefaultProps.messageProps}
            {...messageProps}
          />
        </FormItem>
      )}
    />
  )
}
