import { CoImageProps } from "@/components/atoms/image/image.props"

export const imageVariantBaseClassName = "transition-all duration-200" as const

export const imageVariants = {
  variants: {
    fit: {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      scaleDown: "object-scale-down"
    },
    position: {
      center: "object-center",
      top: "object-top",
      bottom: "object-bottom",
      left: "object-left",
      right: "object-right"
    },
    shape: {
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]",
      auto: "aspect-auto"
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg"
    }
  },
  defaultVariants: {
    fit: "cover",
    position: "center",
    shape: "auto",
    rounded: "none",
    shadow: "none"
  }
} as const

export const imageTheme: Partial<CoImageProps> = {
  fit: "cover",
  position: "center",
  shape: "auto",
  rounded: "none",
  shadow: "none"
}
