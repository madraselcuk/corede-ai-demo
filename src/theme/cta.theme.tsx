import { CoCtaProps } from "@/components/atoms/cta/cta.props"

export const ctaVariantBaseClassName =
  "font-semibold transition-all duration-200" as const

export const ctaVariants = {
  variants: {
    variant: {
      primary: "text-primary hover:text-primary/80",
      secondary: "text-secondary hover:text-secondary/80",
      ghost: "text-muted-foreground hover:text-foreground",
      link: "text-blue-600 hover:underline"
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    },
    underline: {
      none: "",
      hover: "hover:underline",
      always: "underline"
    }
  },
  defaultVariants: {
    variant: "link",
    size: "sm",
    weight: "semibold",
    underline: "hover"
  }
} as const

export const ctaTheme: Partial<CoCtaProps> = {
  variant: "link",
  size: "sm",
  weight: "semibold",
  underline: "hover"
}
