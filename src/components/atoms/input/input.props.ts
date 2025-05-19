import { InputProps } from "@/components/ui/Input"

export type CoInputProps = InputProps & {
  error?: boolean
  /**
   * @value null : no left icon (for inputs that use this component as base component)
   * @value undefined : default left icon if any (for inputs that use this component as base component)
   */
  leftIcon?: React.ReactNode
  /**
   * @value null : no right icon (for inputs that use this component as base component)
   * @value undefined : default right icon if any (for inputs that use this component as base component)
   */
  rightIcon?: React.ReactNode
}
