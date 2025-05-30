import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/utils/css-class-name.utility'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-5 w-5 shrink-0 rounded-md border border-neutral-200 shadow focus-visible:outline-none',
      'focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-neutral-700 data-[state=checked]:text-neutral-50 dark:border-neutral-900 dark:bg-neutral-900/50',
      'dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-100 dark:data-[state=checked]:text-neutral-900',
      'hover:bg-neutral-100 hover:border-neutral-300 dark:hover:bg-neutral-800 dark:hover:border-neutral-700',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
