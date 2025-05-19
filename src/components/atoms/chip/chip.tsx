import { cn } from "@/utils/css-class-name.utility"
import { CoChipProps } from "./chip.props"
import { chipTheme } from "@/theme/chip.theme"

const variantStyles = {
  default: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
}

export function CoChip({
  className = chipTheme.className,
  removable,
  variant = "default",
  children,
  buttonProps: { onRemove, className: buttonClassName } = {
    className: chipTheme.buttonProps?.className
  },
  ...props
}: CoChipProps) {
  return (
    <div className={cn(className, variantStyles[variant], removable && "pr-1.5")} {...props}>
      {children}
      {removable && (
        <button onClick={onRemove} className={buttonClassName}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-3"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </div>
  )
}
//hover:bg-background/20 ml-1 rounded-full p-0.5
