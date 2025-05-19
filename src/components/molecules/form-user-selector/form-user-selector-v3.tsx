import { FormItem } from '@/components/ui/Form'
import { useState, useEffect } from 'react'
import { Controller } from 'react-hook-form'
import AsyncSelect from 'react-select/async'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import { IUserProfile } from '@/@package/common'
import Select from '@/components/ui/Select'
import { TbChecks } from 'react-icons/tb'
import { Avatar } from '@/components/ui/Avatar'
import { components, OptionProps, SingleValueProps } from 'react-select'
import { User } from 'lucide-react'
import Tag from '@/components/ui/Tag'
import { UserOption } from './user-option.type'

export interface FormUserSelectorGroupPropsV3
  extends FormFieldWrapperV2Props<UserOption> {
  // TODO: type is mutation type
  useUserOptionListQuery: any
}

const { SingleValue } = components

const CustomUserSelectOption = ({
  innerProps,
  label,
  data,
  isSelected,
}: OptionProps<UserOption>) => {
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
        <Avatar shape="circle" size={20} src={data.avatar} icon={<User />} />
        <span className="font-semibold heading-text">{label}</span>
      </div>
      {isSelected && <TbChecks className="text-emerald-500 text-xl" />}
    </div>
  )
}

const CustomUserSelectedLabel = ({
  data,
  ...props
}: SingleValueProps<UserOption>) => {
  return (
    <SingleValue data={data} {...props}>
      <div className="flex items-center gap-2">
        <Tag className="inline-flex items-center gap-2">
          <Avatar shape="circle" size={20} src={data.avatar} icon={<User />} />
          <span className="font-semibold heading-text">{data.fullName}</span>
        </Tag>
      </div>
    </SingleValue>
  )
}

export const FormUserSelectorGroupV3 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  useUserOptionListQuery,
  ...rest
}: FormUserSelectorGroupPropsV3) => {
  const [options, setOptions] = useState<UserOption[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 10

  // Parse search query to extract name and surname
  const parseSearchQuery = (query: string) => {
    // If query is empty, return undefined filter
    if (!query.trim()) {
      return {}
    }

    if (query.length < 3) {
      return {}
    }

    const words = query.trim().split(/\s+/)

    if (words.length <= 1) {
      // If there's only one word, use it for name search
      return {
        name: query.trim(),
        surname: undefined,
      }
    } else {
      // If there are multiple words, use the last one for surname and the rest for name
      const surname = words.pop() || ''
      const name = words.join(' ')
      return {
        name,
        surname,
      }
    }
  }

  const {
    data: userListData,
    isLoading,
    refetch,
  } = useUserOptionListQuery({
    input: {
      filter: parseSearchQuery(searchQuery),
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
    refetch()
  }, [searchQuery, refetch])

  useEffect(() => {
    if (userListData?.data) {
      const newOptions = userListData.data.map((user: IUserProfile) => ({
        label:
          `${user.name || ''} ${user.surname || ''}`.trim() || 'Unknown User',
        value: user._id,
        name: user.name,
        surname: user.surname,
        fullName:
          `${user.name || ''} ${user.surname || ''}`.trim() || 'Unknown User',
        // email: user.email,
        // phone: user.phoneNumber,
        avatar: user.profileImage?.thumbnailPublicUrl,
        // role: user.role,
        // department: user.department,
      }))

      if (page === 1) {
        setOptions(newOptions)
      } else {
        setOptions((prev) => [...prev, ...newOptions])
      }
    }
  }, [userListData, page])

  const loadOptions = async (inputValue: string) => {
    setSearchQuery(inputValue)
    setPage(1)
    return options
  }

  const handleInputChange = (newValue: string) => {
    setSearchQuery(newValue)
    return newValue
  }

  const handleMenuScrollToBottom = () => {
    if (userListData?.hasMore) {
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
          <Select<UserOption>
            {...inputProps}
            {...field}
            componentAs={AsyncSelect}
            components={{
              Option: CustomUserSelectOption,
              SingleValue: CustomUserSelectedLabel,
            }}
            isClearable
            isLoading={isLoading}
            defaultOptions={options}
            loadOptions={loadOptions}
            onInputChange={handleInputChange}
            onMenuScrollToBottom={handleMenuScrollToBottom}
            value={options.find((option) => option.value === field.value)}
            onChange={(option) => field.onChange(option?.value)}

            // formatOptionLabel={(option: UserOption) => (
            //   <div className="flex items-center gap-2">
            //     {option.avatar && (
            //       <img
            //         src={option.avatar}
            //         alt={option.fullName}
            //         className="w-6 h-6 rounded-full"
            //       />
            //     )}
            //     <div>
            //       <div className="font-medium">{option.fullName}</div>
            //       {/* <div className="text-sm text-gray-500">{option.email}</div> */}
            //     </div>
            //   </div>
            // )}
          />
        )}
      />
    </FormItem>
  )
}
