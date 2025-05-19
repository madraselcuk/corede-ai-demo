import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/co/avatar'
import { CoAvatarProps, coAvatarVariants } from './avatar.props'
import { forwardRef } from 'react'
import { cn } from '@/utils/css-class-name.utility'
import { avatarTheme, avatarVariantBaseClassName } from '@/theme'

export const CoAvatar = forwardRef<HTMLSpanElement, CoAvatarProps>(
  ({ size, shape, border, ...props }, ref) => {
    const currentSize = size ?? avatarTheme.size
    const currentShape = shape ?? avatarTheme.shape
    const currentBorder = border ?? avatarTheme.border
    const fallbackProps = {
      ...props.fallbackProps,
    }
    delete fallbackProps.fallbackLetters // Remove fallbackLetters from props
    delete fallbackProps.fallbackIcon // Remove fallbackIcon from props

    const fallback =
      props.fallbackProps?.fallbackIcon ??
      avatarTheme?.fallbackProps?.fallbackIcon ??
      props.fallbackProps?.fallbackLetters ??
      avatarTheme.fallbackProps?.fallbackLetters ??
      ''

    return (
      <Avatar
        ref={ref}
        {...props.rootProps}
        className={cn(
          coAvatarVariants({
            className: props.rootProps?.className ?? avatarVariantBaseClassName,
            size: currentSize,
            shape: currentShape,
            border: currentBorder,
          }),
        )}
      >
        <AvatarImage
          className={cn(
            'h-full w-full',
            currentShape === 'circle' && 'rounded-full',
            currentShape === 'rounded' && 'rounded-lg',
            avatarTheme?.imageProps?.className,
            props.imageProps?.className,
          )}
          {...props.imageProps}
        />
        <AvatarFallback
          className={cn(
            currentShape === 'circle' && 'rounded-full',
            currentShape === 'rounded' && 'rounded-lg',
            avatarTheme?.fallbackProps?.className,
            fallbackProps.className,
          )}
          {...fallbackProps}
        >
          {fallback}
        </AvatarFallback>
      </Avatar>
    )
  },
)

CoAvatar.displayName = CoAvatar.name
