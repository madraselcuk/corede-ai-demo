import { useEffect, useState } from 'react'
import {
  CoAutoCompleteSelect,
  CoAutocompleteSelectProps,
  Option,
} from '@/components/atoms/select-autocomplete'
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import { formFieldTheme } from '@/theme/form-field.theme'
import { i18n } from '@/localization'
import { BaseFormFieldProps } from '@/components/interface'
import { FieldPath, FieldValues } from 'react-hook-form'
import { useCityListQuery } from '@/domains/geo/api'

export const formCitySelectorDefaultProps: Partial<FormCitySelectorProps> = {
  label: {
    content: i18n.t('state'),
  },
}

export interface FormCitySelectorProps<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<BaseFormFieldProps, 'hookName'> {
  hookName?: TName
  inputProps?: Omit<CoAutocompleteSelectProps, 'options'>
  queryOptions?: {
    stateNameQuery?: string
  }
}

export const FormStateSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
  queryOptions,
}: FormCitySelectorProps) => {
  const [options, setOptions] = useState<Option[]>([])

  const inputHookName = hookName ?? 'input.city'

  let placeholder = inputProps?.placeholder ?? i18n.t(`selectCity`)
  if (!queryOptions?.stateNameQuery)
    placeholder = i18n.t(`stateSelectionIsRequired`)

  const { data: cityListData, isLoading: loading } = useCityListQuery(
    {
      input: {
        filter: {
          country_name: queryOptions?.stateNameQuery,
        },
        pagination: {
          sort: {
            name: 1,
          },
        },
      },
    },
    {
      skip: !queryOptions?.stateNameQuery,
    },
  )

  useEffect(() => {
    console.log(queryOptions?.stateNameQuery, 'queryOptions?.stateNameQuery')
  }, [queryOptions?.stateNameQuery])

  useEffect(() => {
    setOptions(
      (cityListData?.data ?? []).map((c) => {
        return {
          label: c.name,
          value: c.name,
        }
      }),
    )
  }, [setOptions, cityListData])

  return (
    <FormField
      control={form.control}
      name={inputHookName}
      render={({ field }) => (
        <FormItem
          {...formFieldTheme.containerProps}
          {...formCitySelectorDefaultProps.containerProps}
          {...containerProps}
        >
          {!label?.noLabel && (
            <FormLabel
              {...formFieldTheme.label?.props}
              {...formCitySelectorDefaultProps.label?.props}
              {...label?.props}
            >
              {label?.content ?? i18n.t('city')}
            </FormLabel>
          )}

          <CoAutoCompleteSelect
            key={options.find((o) => o.value === field.value)?.value}
            value={options.find((o) => o.value === field.value)}
            options={options}
            emptyProps={{
              emptyMessage:
                inputProps?.emptyProps?.emptyMessage ??
                i18n.t('noResultPlaceholder'),
              emptyClassName: inputProps?.emptyProps?.emptyClassName,
            }}
            placeholder={placeholder}
            isLoading={loading || inputProps?.isLoading}
            onValueChange={(option) => {
              inputProps?.onValueChange && inputProps?.onValueChange(option)
              field.onChange(option.value)
            }}
            disabled={inputProps?.disabled}
          />

          {description?.content && (
            <FormDescription
              {...formFieldTheme.description?.props}
              {...formCitySelectorDefaultProps.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage
            {...formFieldTheme.messageProps}
            {...formCitySelectorDefaultProps.messageProps}
            {...messageProps}
          />
        </FormItem>
      )}
    />
  )
}
