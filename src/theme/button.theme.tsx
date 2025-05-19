import { CoButtonV2Props } from "@/components/atoms/button-v2/button-v2.props"

export const buttonVariantBaseClassName =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" as const

export const buttonSizeVariants = {
  xs: "h-7 px-2 text-xs",
  sm: "h-9 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-8",
  xl: "h-12 px-10 text-lg"
} as const

export const buttonVariantStyles = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  solid: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
  subtle: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
} as const

export const buttonDefaultVariants = {
  variant: "solid",
  size: "md"
} as const

export const buttonTheme: CoButtonV2Props = {
  variant: "solid",
  size: "md",
  iconSpacing: "2",
  isLoading: false,
  asChild: false
}
