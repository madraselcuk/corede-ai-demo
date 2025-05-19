import { FormBlogTargetCategorySelectorProps } from './form-blog-target-category-selector.props'
import { formBlogTargetCategorySelectorDefaultProps } from './form-blog-target-category-selector.props.default'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  CoAutoCompleteSelect,
  Option,
} from '@/components/atoms/select-autocomplete'
import { formFieldTheme } from '@/theme/form-field.theme'
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import { useEffect, useState } from 'react'
import { useBlogTargetCategoryListQuery } from '@/domains/blog/api'

export const FormBlogTargetCategorySelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormBlogTargetCategorySelectorProps) => {
  const { t } = useI18n()
  const [options, setOptions] = useState<Option[]>([])

  const inputHookName = hookName ?? 'input.targetCategoryId'

  const { data: blogTargetCategoryListData, isLoading: loading } =
    useBlogTargetCategoryListQuery({
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
      (blogTargetCategoryListData?.data ?? []).map((c) => {
        return {
          label: c.name,
          value: c._id,
        }
      }),
    )
  }, [blogTargetCategoryListData])

  return (
    <FormField
      control={form.control}
      name={inputHookName}
      render={({ field }) => (
        <FormItem
          {...formFieldTheme.containerProps}
          {...formBlogTargetCategorySelectorDefaultProps.containerProps}
          {...containerProps}
        >
          {!label?.noLabel && (
            <FormLabel
              {...formFieldTheme.label?.props}
              {...formBlogTargetCategorySelectorDefaultProps.label?.props}
              {...label?.props}
            >
              {label?.content ?? t('blog:blogTargetCategory')}
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
            placeholder={
              inputProps?.placeholder ?? t(`blog:selectBlogTargetCategory`)
            }
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
          options: blogTargetCategoryListData?.data.map((c) => {
            return {
              label: c.name,
              value: c.name
            }
          }),
          ...formBlogTargetCategorySelectorPropsDefaultValues.selectProps?.selectProps,
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
              {...formBlogTargetCategorySelectorDefaultProps.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage
            {...formFieldTheme.messageProps}
            {...formBlogTargetCategorySelectorDefaultProps.messageProps}
            {...messageProps}
          />
        </FormItem>
      )}
    />
  )
}
