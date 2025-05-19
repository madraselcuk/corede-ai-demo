import { SelectItemProps } from '@/components/interface'
import { FormItem } from '@/components/ui/Form'
import { useState, useEffect } from 'react'
import { Controller } from 'react-hook-form'
import AsyncSelect from 'react-select/async'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import Select, { SelectProps } from '@/components/ui/Select'
import { TbChecks } from 'react-icons/tb'
import { components, OptionProps, SingleValueProps } from 'react-select'
import Tag from '@/components/ui/Tag'

export interface FormEntityAsyncSelectorProps<
  TEntity,
  T extends SelectItemProps,
> extends FormFieldWrapperV2Props<SelectProps<T>> {
  // TODO: type is mutation type
  useEntityListQuery: any
  convertEntityToSelectItemProps: (entity: TEntity) => SelectItemProps
}

const { SingleValue } = components

const CustomEntitySelectOption = <T extends SelectItemProps>({
  innerProps,
  data,
  isSelected,
}: OptionProps<T>) => {
  return (
    <div
      className={`flex items-center justify-between p-2 ${
        isSelected
          ? 'bg-gray-100 dark:bg-gray-500'
          : 'hover:bg-gray-50 dark:hover:bg-gray-600'
      }`}
      {...innerProps}
    >
      <div className="flex items-center gap-2">
        <span className="font-semibold heading-text">{data.label}</span>
      </div>
      {isSelected && <TbChecks className="text-emerald-500 text-xl" />}
    </div>
  )
}

const CustomEntitySelectedLabel = <T extends SelectItemProps>({
  data,
  ...props
}: SingleValueProps<T>) => {
  return (
    <SingleValue data={data} {...props}>
      <div className="flex items-center gap-2">
        <Tag className="inline-flex items-center gap-2">
          <span className="font-semibold heading-text">{data.label}</span>
        </Tag>
      </div>
    </SingleValue>
  )
}

export const FormEntityAsyncSelector = <
  TEntity,
  T extends SelectItemProps = SelectItemProps,
>({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  useEntityListQuery,
  convertEntityToSelectItemProps,
  ...rest
}: FormEntityAsyncSelectorProps<TEntity, T>) => {
  const [options, setOptions] = useState<T[]>([])
  const [page, setPage] = useState(1)
  const pageSize = 10

  const { data: entityListData, isLoading } = useEntityListQuery({
    input: {
      pagination: {
        page,
        pageSize,
        sort: {
          name: 1,
        },
      },
    },
  })

  useEffect(() => {
    if (entityListData?.data) {
      const newOptions = entityListData.data.map(convertEntityToSelectItemProps)

      if (page === 1) {
        setOptions(newOptions)
      } else {
        setOptions((prev) => [...prev, ...newOptions])
      }
    }
  }, [entityListData, page, convertEntityToSelectItemProps])

  // const loadOptions = async (inputValue: string) => {
  const loadOptions = async () => {
    setPage(1)
    return options
  }

  const handleMenuScrollToBottom = () => {
    if (entityListData?.hasMore) {
      setPage((prev) => prev + 1)
    }
  }

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
          <Select<T>
            {...inputProps}
            {...field}
            componentAs={AsyncSelect}
            components={{
              Option: CustomEntitySelectOption,
              SingleValue: CustomEntitySelectedLabel,
            }}
            isClearable
            isLoading={isLoading}
            defaultOptions={options}
            loadOptions={loadOptions}
            onMenuScrollToBottom={handleMenuScrollToBottom}
            value={options.find((option) => option.value === field.value)}
            onChange={(option) => field.onChange(option?.value)}
          />
        )}
      />
    </FormItem>
  )
}
