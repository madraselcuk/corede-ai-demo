import { CoProgressProps } from "@/components/atoms/progress/progress.props"

export const progressVariantBaseClassName =
  "h-2 w-full rounded-full bg-secondary"

export const progressVariants = {
  variants: {
    variant: {
      default: "",
      success: "bg-success/20",
      warning: "bg-warning/20",
      error: "b g-error/20"
    }
  },
  defaultVariants: {
    variant: "default"
  }
} as const

export const progressBarVariantBaseClassName =
  "h-full rounded-full transition-all"

export const progressBarVariants = {
  variants: {
    barVariant: {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      error: "bg-error"
    }
  },
  defaultVariants: {
    barVariant: "default"
  }
} as const

export const progressTheme: CoProgressProps = {
  className: progressVariantBaseClassName,
  barClassName: progressBarVariantBaseClassName,
  value: 0,
  barVariant: progressBarVariants.defaultVariants.barVariant,
  variant: progressVariants.defaultVariants.variant
}
