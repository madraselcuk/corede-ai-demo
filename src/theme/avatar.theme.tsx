import { CoAvatarProps } from "@/components/atoms/avatar/avatar.props"

export const avatarVariantBaseClassName =
  "inline-flex select-none items-center justify-center overflow-hidden" as const

export const avatarVariants = {
  variants: {
    size: {
      xs: "size-8",
      sm: "size-12",
      md: "size-16",
      lg: "size-24",
      xl: "size-32"
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-none",
      rounded: "rounded-xl" //CHANGED from lg to xl
    },
    border: {
      none: "",
      solid: "border-2 border-primary",
      dashed: "border-2 border-dashed border-primary",
      outline:
        "border border-input hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      subtle: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
    }
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
    border: "none"
  }
} as const

export const avatarTheme: CoAvatarProps = {
  size: "md",
  shape: "circle",
  border: "none",
  rootProps: {
    className: "bg-blackA1 align-middle"
  },
  imageProps: {
    className: "h-full w-full object-cover"
  },
  fallbackProps: {
    className:
      "leading-1 flex h-full w-full items-center justify-center bg-white text-violet11",
    fallbackIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-[65%]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    )
  }
}
