import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Loader2 } from "lucide-react" // For loading spinner
import { coButtonVariants, CoButtonV2Props } from "./button-v2.props"
import { buttonVariantBaseClassName } from "@/theme"
import { cn } from "@/utils/css-class-name.utility"

export const CoButtonV2 = React.forwardRef<HTMLButtonElement, CoButtonV2Props>(
  (
    {
      className = buttonVariantBaseClassName,
      variant,
      size,
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      iconSpacing = "2",
      children,
      disabled,
      customLoader,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(coButtonVariants({ className, variant, size }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading &&
          (customLoader ?? <Loader2 className="mr-2 size-4 animate-spin" />)}
        {!isLoading && leftIcon && (
          <span className={`mr-${iconSpacing}`}>{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className={`ml-${iconSpacing}`}>{rightIcon}</span>
        )}
      </Comp>
    )
  }
)

CoButtonV2.displayName = CoButtonV2.name
