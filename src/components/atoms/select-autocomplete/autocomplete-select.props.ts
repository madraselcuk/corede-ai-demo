export type Option = Record<"value" | "label", string> & Record<string, string>

export interface CoAutocompleteSelectProps {
  options: Option[]
  value?: Option
  onValueChange?: (value: Option) => void
  isLoading?: boolean
  disabled?: boolean
  placeholder?: string
  primitiveClassName?: string
  inputClassName?: string
  listContainerClassName?: string
  listClassName?: string
  listGroupClassName?: string
  listItem?: {
    listItemClassName?: string
    listItemClassNameAddForSelected?: string
    listItemSelectedElement?: React.ReactNode
  }
  emptyProps?: {
    emptyMessage?: string
    emptyClassName?: string
  }
  loadingProps?: {
    loadingElement?: React.ReactNode
  }
}
