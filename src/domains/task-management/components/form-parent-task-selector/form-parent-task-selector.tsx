import { FormParentTaskSelectorProps } from './form-parent-task-selector.props'
import { formParentTaskSelectorDefaultProps } from './form-parent-task-selector.props.default'

import { formFieldTheme } from '@/theme/form-field.theme'
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/co/form'
import { useEffect, useState } from 'react'

import {
  CoAutoCompleteSelect,
  Option,
} from '@/components/atoms/select-autocomplete'
import { useI18n } from '@/localization/hooks/useI18n'
import { useTaskListQuery } from '../../api'


export const FormParentTaskSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormParentTaskSelectorProps) => {
  const { t } = useI18n()
  const [options, setOptions] = useState<Option[]>([])

  const inputHookName = hookName ?? 'input.parentTaskId'

  const { data: taskListData, isLoading: loading } = useTaskListQuery({
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
      (taskListData?.data ?? []).map((c) => {
        return {
          label: c.title,
          value: c._id,
        }
      }),
    )
  }, [taskListData])

  return (
    <FormField
      control={form.control}
      name={inputHookName}
      render={({ field }) => (
        <FormItem
          {...formFieldTheme.containerProps}
          {...formParentTaskSelectorDefaultProps.containerProps}
          {...containerProps}
        >
          {!label?.noLabel && (
            <FormLabel
              {...formFieldTheme.label?.props}
              {...formParentTaskSelectorDefaultProps.label?.props}
              {...label?.props}
            >
              {label?.content ?? t('taskManagement:parentTask')}
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
            placeholder={inputProps?.placeholder ?? t(`taskManagement:selectParent`)}
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
          options: parentTaskListData?.data.map((c) => {
            return {
              label: c.name,
              value: c.name
            }
          }),
          ...formParentSelectorPropsDefaultValues.selectProps?.selectProps,
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
              {...formParentTaskSelectorDefaultProps.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage
            {...formFieldTheme.messageProps}
            {...formParentTaskSelectorDefaultProps.messageProps}
            {...messageProps}
          />
        </FormItem>
      )}
    />
  )
}
