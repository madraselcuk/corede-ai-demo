'use client'

import { FormControl } from '@/components/ui/co/form'
import { enumSelectTheme } from '../../../theme/enum-select.theme'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/co/popover'
import { Button } from '@/components/ui/co/button'
import { cn } from '@/utils/css-class-name.utility'
import { Check, ChevronsUpDown } from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/co/command'
import { forwardRef } from 'react'
import { useI18n } from '@/localization/hooks/useI18n'
import { SelectItemProps } from '@/components/interface'

export interface EnumSelectProps {
  options?: SelectItemProps[]
  value?: string
  onChange?: (value: string) => void
  input?: {
    inputContainerClassName?: string
    button?: {
      buttonClassName?: string
      noValueSelectedClassName?: string
      buttonPlaceholder?: string
    }
  }
  select?: {
    selectContainerClassName?: string
    search?: {
      noSearch?: boolean
      searchClassName?: string
      searchPlaceholder?: string
    }
    noResultContent?: React.ReactNode
  }
}

export const EnumSelect = forwardRef<HTMLButtonElement, EnumSelectProps>(
  ({ options = [], value, onChange, input = {}, select = {} }, ref) => {
    const { t } = useI18n()

    // Destructure input with defaults from theme
    const {
      inputContainerClassName = enumSelectTheme.input?.inputContainerClassName,
      button = {},
    } = input

    // Destructure button with defaults from theme
    const {
      buttonClassName = enumSelectTheme.input?.button?.buttonClassName,
      noValueSelectedClassName = enumSelectTheme.input?.button
        ?.noValueSelectedClassName,
      buttonPlaceholder = enumSelectTheme.input?.button?.buttonPlaceholder,
    } = button

    // Destructure select with defaults from theme
    const {
      selectContainerClassName = enumSelectTheme.select
        ?.selectContainerClassName,
      search = {},
      noResultContent = enumSelectTheme.select?.noResultContent,
    } = select

    // Destructure search with defaults from theme
    const {
      noSearch = enumSelectTheme.select?.search?.noSearch,
      searchClassName = enumSelectTheme.select?.search?.searchClassName,
      searchPlaceholder = enumSelectTheme.select?.search?.searchPlaceholder,
    } = search

    return (
      <Popover>
        <PopoverTrigger asChild>
          <FormControl className={inputContainerClassName}>
            <Button
              ref={ref}
              variant="outline"
              role="combobox"
              className={cn(
                buttonClassName,
                !value && noValueSelectedClassName,
              )}
            >
              {value
                ? options?.find((option) => option.value === value)?.label
                : (buttonPlaceholder ?? t('common:selectPlaceholder'))}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className={selectContainerClassName}>
          <Command>
            {!noSearch && (
              <CommandInput
                className={searchClassName}
                placeholder={searchPlaceholder ?? t('common:searchPlaceholder')}
              />
            )}
            <CommandList>
              <CommandEmpty>
                {noResultContent ?? t('common:noResultPlaceholder')}
              </CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    value={option.label}
                    key={option.value}
                    onSelect={() => {
                      onChange && onChange(option.value)
                    }}
                  >
                    {option.label}
                    <Check
                      className={cn(
                        'ml-auto',
                        option.value === value ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  },
)

EnumSelect.displayName = 'EnumSelect'
