import { FormBlogCategorySelectorProps } from './form-blog-category-selector.props'
import { formBlogCategorySelectorDefaultProps } from './form-blog-category-selector.props.default'
import { formFieldTheme } from '@/theme/form-field.theme'
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import { useEffect, useState } from 'react'
import { useBlogCategoryListQuery } from '@/domains/blog/api'
import {
  CoAutoCompleteSelect,
  Option,
} from '@/components/atoms/select-autocomplete'
import { selectAutocompleteTheme } from '@/theme/select-autocomplete.theme'
import { useI18n } from '@/localization/hooks/useI18n'

export const FormBlogCategorySelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormBlogCategorySelectorProps) => {
  const { t } = useI18n()
  const [options, setOptions] = useState<Option[]>([])

  const inputHookName = hookName ?? 'input.categoryId'

  const { data: blogCategoryListData, isLoading: loading } =
    useBlogCategoryListQuery({
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
      (blogCategoryListData?.data ?? []).map((c) => {
        return {
          label: c.name,
          value: c._id,
        }
      }),
    )
  }, [blogCategoryListData])

  return (
    <FormField
      control={form.control}
      name={inputHookName}
      render={({ field }) => (
        <FormItem
          {...formFieldTheme.containerProps}
          {...formBlogCategorySelectorDefaultProps.containerProps}
          {...containerProps}
        >
          {!label?.noLabel && (
            <FormLabel
              {...formFieldTheme.label?.props}
              {...formBlogCategorySelectorDefaultProps.label?.props}
              {...label?.props}
            >
              {label?.content ?? t('blog:blogCategory')}
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
              emptyClassName:
                inputProps?.emptyProps?.emptyClassName ??
                selectAutocompleteTheme.emptyProps?.emptyClassName,
            }}
            placeholder={
              inputProps?.placeholder ?? t(`blog:selectCategory`)
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
          options: blogCategoryListData?.data.map((c) => {
            return {
              label: c.name,
              value: c.name
            }
          }),
          ...formBlogCategorySelectorPropsDefaultValues.selectProps?.selectProps,
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
              {...formBlogCategorySelectorDefaultProps.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage
            {...formFieldTheme.messageProps}
            {...formBlogCategorySelectorDefaultProps.messageProps}
            {...messageProps}
          />
        </FormItem>
      )}
    />
  )
}
