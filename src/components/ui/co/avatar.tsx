import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/utils/css-class-name.utility'

export const avatarDefaultProps: AvatarProps = {
  containerClassName:
    'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
  image: {
    className: 'aspect-square h-full w-full',
  },
  fallback: {
    className:
      'flex h-full w-full items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800',
  },
}

export interface AvatarProps {
  containerClassName?: string
  image?: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
  fallback?: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarDefaultProps?.containerClassName, className)}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(avatarDefaultProps?.image?.className, className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarDefaultProps?.fallback?.className, className)}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
