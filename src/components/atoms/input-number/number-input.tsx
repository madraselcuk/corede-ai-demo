import { forwardRef } from 'react'
import { CoInput } from '../input/input'
import { CoNumberInputProps } from './number-input.props'
import { numberInputTheme } from '@/theme/number-input.theme'

export const CoNumberInput = forwardRef<HTMLInputElement, CoNumberInputProps>(
  ({ className = numberInputTheme.className, ...props }, ref) => {
    return (
      <CoInput
        ref={ref}
        {...numberInputTheme}
        {...props}
        className={className}
        type="number"
      />
    )
  },
)

CoNumberInput.displayName = CoNumberInput.name
