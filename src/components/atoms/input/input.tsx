import { forwardRef, ElementType } from 'react'
import { Input } from '@/components/ui/Input'
import { cn } from '@/utils/css-class-name.utility'
import { CoInputProps } from './input.props'
import { inputTheme } from '@/theme/input.theme'

const CoInput = forwardRef<ElementType | HTMLInputElement | HTMLTextAreaElement, CoInputProps>(
  (
    { className = inputTheme.className, error, leftIcon, rightIcon, ...props },
    ref,
  ) => {
    return (
      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            {leftIcon}
          </span>
        )}
        <Input
          ref={ref}
          className={cn(
            className,
            error && 'border-error',
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
          )}
          data-error={error}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightIcon}
          </span>
        )}
      </div>
    )
  },
)

CoInput.displayName = CoInput.name

export { CoInput }
