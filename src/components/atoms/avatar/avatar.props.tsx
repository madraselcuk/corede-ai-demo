import {
  avatarVariantBaseClassName,
  avatarVariants
} from "@/theme/avatar.theme"
import {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps
} from "@radix-ui/react-avatar"
import { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { JSX } from "react"

export const coAvatarVariants = cva(avatarVariantBaseClassName, avatarVariants)

export type AvatarVariantProps = VariantProps<typeof coAvatarVariants>

export interface CoAvatarProps extends AvatarVariantProps {
  rootProps?: AvatarProps & React.RefAttributes<HTMLSpanElement>
  imageProps?: AvatarImageProps
  fallbackProps?: AvatarFallbackProps & {
    fallbackIcon?: JSX.Element
    fallbackLetters?: string
  }
}
