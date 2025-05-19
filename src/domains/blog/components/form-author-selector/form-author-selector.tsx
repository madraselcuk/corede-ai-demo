import { FormAuthorSelectorProps } from './form-author-selector.props'
import { formAuthorSelectorDefaultProps } from './form-author-selector.props.default'

import { formFieldTheme } from '@/theme/form-field.theme'
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import { useEffect, useState } from 'react'
import { useAuthorListQuery } from '@/domains/blog/api'
import {
  CoAutoCompleteSelect,
  Option,
} from '@/components/atoms/select-autocomplete'
import { useI18n } from '@/localization/hooks/useI18n'

export const FormAuthorSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormAuthorSelectorProps) => {
  const { t } = useI18n()
  const [options, setOptions] = useState<Option[]>([])

  const inputHookName = hookName ?? 'input.authorId'

  const { data: authorListData, isLoading: loading } = useAuthorListQuery({
    input: {
      pagination: {
        sort: {
          name: 1,
        },
      },
    },
  })

  useEffect(() => {
    console.log(authorListData, 'authors.data')
  }, [authorListData])

  useEffect(() => {
    setOptions(
      (authorListData?.data ?? []).map((c) => {
        return {
          label: c.name,
          value: c._id,
        }
      }),
    )
  }, [authorListData])

  return (
    <FormField
      control={form.control}
      name={inputHookName}
      render={({ field }) => (
        <FormItem
          {...formFieldTheme.containerProps}
          {...formAuthorSelectorDefaultProps.containerProps}
          {...containerProps}
        >
          {!label?.noLabel && (
            <FormLabel
              {...formFieldTheme.label?.props}
              {...formAuthorSelectorDefaultProps.label?.props}
              {...label?.props}
            >
              {label?.content ?? t('blog:author')}
            </FormLabel>
          )}

          <CoAutoCompleteSelect
            key={options.find((o) => o.value === field.value)?.value}
            value={options.find((o) => o.value === field.value)}
            options={options}
            emptyProps={{
              emptyMessage:
                inputProps?.emptyProps?.emptyMessage ??
                t('common:noResultPlaceholder'),
            }}
            placeholder={inputProps?.placeholder ?? t(`blog:selectAuthor`)}
            isLoading={loading || inputProps?.isLoading}
            onValueChange={(option) => {
              inputProps?.onValueChange && inputProps?.onValueChange(option)
              field.onChange(option.value)
            }}
            disabled={inputProps?.disabled}
          />
          {/* <CoSelect
        control={props.control}
        inputHookName={inputHookName}
        selectProps={{
          options: authorListData?.data.map((c) => {
            return {
              label: c.name,
              value: c.name
            }
          }),
          ...formAuthorSelectorPropsDefaultValues.selectProps?.selectProps,
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
              {...formAuthorSelectorDefaultProps.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage
            {...formFieldTheme.messageProps}
            {...formAuthorSelectorDefaultProps.messageProps}
            {...messageProps}
          />
        </FormItem>
      )}
    />
  )
}
