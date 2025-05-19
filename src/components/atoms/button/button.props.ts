import { cva } from "class-variance-authority"

export const coButtonVariants = cva(
  // Base styles
  "relative inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/30",
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary/30",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive/30",
        outline:
          "bg-background border border-input hover:bg-accent hover:text-accent-foreground focus:ring-accent/30",
        ghost:
          "hover:bg-accent hover:text-accent-foreground focus:ring-accent/30",
        link: "text-primary underline-offset-4 hover:underline focus:ring-primary/30"
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-lg",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export interface CoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
  size?: "sm" | "default" | "lg" | "icon"
  isLoading?: boolean
  children?: React.ReactNode
}
