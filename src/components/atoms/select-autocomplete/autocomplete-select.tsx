import { Command as CommandPrimitive } from 'cmdk'
import { useState, useRef, useCallback, type KeyboardEvent } from 'react'

import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/co/command'
import { cn } from '@/utils/css-class-name.utility'
import { i18n } from '@/localization'
import { CoAutocompleteSelectProps, Option } from './autocomplete-select.props'
import { selectAutocompleteTheme } from '@/theme/select-autocomplete.theme'

export const CoAutoCompleteSelect = ({
  options,
  placeholder,
  value,
  onValueChange,
  disabled,
  isLoading = false,
  primitiveClassName = selectAutocompleteTheme.primitiveClassName,
  inputClassName = selectAutocompleteTheme.inputClassName,
  listContainerClassName = selectAutocompleteTheme.listContainerClassName,
  listClassName = selectAutocompleteTheme.listClassName,
  listGroupClassName = selectAutocompleteTheme.listGroupClassName,
  listItem = {},
  emptyProps = {},
  loadingProps = {},
}: CoAutocompleteSelectProps) => {
  const {
    listItemClassName = selectAutocompleteTheme.listItem?.listItemClassName,
    listItemClassNameAddForSelected = selectAutocompleteTheme.listItem
      ?.listItemClassNameAddForSelected,
    listItemSelectedElement = selectAutocompleteTheme.listItem
      ?.listItemSelectedElement,
  } = listItem
  const {
    emptyMessage = selectAutocompleteTheme.emptyProps?.emptyMessage,
    emptyClassName = selectAutocompleteTheme.emptyProps?.emptyClassName,
  } = emptyProps
  const {
    loadingElement = selectAutocompleteTheme.loadingProps?.loadingElement,
  } = loadingProps

  const inputRef = useRef<HTMLInputElement>(null)

  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<Option>(value as Option)
  const [inputValue, setInputValue] = useState<string>(value?.label || '')

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (!input) {
        return
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true)
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === 'Enter' && input.value !== '') {
        const optionToSelect = options.find(
          (option) => option.label === input.value,
        )
        if (optionToSelect) {
          setSelected(optionToSelect)
          onValueChange?.(optionToSelect)
        }
      }

      if (event.key === 'Escape') {
        input.blur()
      }
    },
    [isOpen, options, onValueChange],
  )

  const handleBlur = useCallback(() => {
    setOpen(false)
    setInputValue(selected?.label)
  }, [selected])

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label)

      setSelected(selectedOption)
      onValueChange?.(selectedOption)

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur()
      }, 0)
    },
    [onValueChange],
  )

  return (
    <CommandPrimitive onKeyDown={handleKeyDown} className={primitiveClassName}>
      <div>
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={isLoading ? undefined : setInputValue}
          onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClassName}
        />
      </div>
      <div className="relative mt-1">
        <div
          className={cn(listContainerClassName, isOpen ? 'block' : 'hidden')}
        >
          <CommandList className={listClassName}>
            {isLoading ? (
              <CommandPrimitive.Loading className="">
                {loadingElement}
              </CommandPrimitive.Loading>
            ) : null}
            {options.length > 0 && !isLoading ? (
              <CommandGroup className={listGroupClassName}>
                {options.map((option) => {
                  const isSelected = selected?.value === option.value
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onMouseDown={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                      }}
                      onSelect={() => handleSelectOption(option)}
                      className={cn(
                        listItemClassName,
                        !isSelected ? listItemClassNameAddForSelected : null,
                      )}
                    >
                      {isSelected ? listItemSelectedElement : null}
                      {option.label}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            ) : null}
            {!isLoading ? (
              <CommandPrimitive.Empty className={emptyClassName}>
                {emptyMessage ?? i18n.t('noResultPlaceholder')}
              </CommandPrimitive.Empty>
            ) : null}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  )
}
