import { forwardRef, ElementType } from 'react'
import { CoInput } from '../input/input'
import { textInputTheme } from '@/theme/text-input.theme'
import { CoInputProps } from '../input/input.props'

export interface TextInputProps extends Omit<CoInputProps, 'type'> {}

const TextInput = forwardRef<ElementType | HTMLInputElement | HTMLTextAreaElement, TextInputProps>(
  ({ className = textInputTheme.className, ...props }, ref) => {
    return (
      <CoInput
        ref={ref}
        {...textInputTheme}
        {...props}
        className={className}
        type="text"
      />
    )
  },
)

TextInput.displayName = TextInput.name

export { TextInput }
