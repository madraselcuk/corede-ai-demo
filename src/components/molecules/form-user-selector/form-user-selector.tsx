import { FormItem } from '@/components/ui/Form'
import { useState, useEffect } from 'react'
import { Controller } from 'react-hook-form'
import AsyncSelect from 'react-select/async'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import { IUserProfile } from '@/@package/common'
import Select from '@/components/ui/Select'
import { UserOption } from './user-option.type'

export interface FormUserSelectorGroupPropsV2
  extends FormFieldWrapperV2Props<UserOption> {
  // TODO: type is mutation type
  useUserOptionListQuery: any
}

export const FormUserSelectorGroupV2 = ({
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
}: FormUserSelectorGroupPropsV2) => {
  const [options, setOptions] = useState<UserOption[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 10

  const { data: userListData, isLoading } = useUserOptionListQuery({
    input: {
      filter: {
        search: searchQuery,
      },
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
          <Select
            {...inputProps}
            {...field}
            componentAs={AsyncSelect}
            isClearable
            isLoading={isLoading}
            defaultOptions={options}
            loadOptions={loadOptions}
            onInputChange={handleInputChange}
            onMenuScrollToBottom={handleMenuScrollToBottom}
            value={options.find((option) => option.value === field.value)}
            onChange={(option) => field.onChange(option?.value)}
            formatOptionLabel={(option: UserOption) => (
              <div className="flex items-center gap-2">
                {option.avatar && (
                  <img
                    src={option.avatar}
                    alt={option.fullName}
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <div>
                  <div className="font-medium">{option.fullName}</div>
                  {/* <div className="text-sm text-gray-500">{option.email}</div> */}
                </div>
              </div>
            )}
          />
        )}
      />
    </FormItem>
  )
}
