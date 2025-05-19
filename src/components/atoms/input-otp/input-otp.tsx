import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Minus } from "lucide-react"

import { cn } from "@/utils/css-class-name.utility"
import { inputOtpDefaultProps } from "./input-otp.props.default"

export interface OtpInputProps {
  inputContainerClassName?: string
  inputClassName?: string
  inputGroupClassName?: string
  inputSlot?: {
    className?: string
    activeClassName?: string
  }
  inputSlotActive?: string
  fakeCaret?: React.JSX.Element
}

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      inputOtpDefaultProps?.inputContainerClassName,
      containerClassName
    )}
    className={cn(inputOtpDefaultProps?.inputClassName, className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(inputOtpDefaultProps?.inputGroupClassName, className)}
    {...props}
  />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    index: number
    activeClassName?: string
  }
>(({ index, className, activeClassName, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        className ?? inputOtpDefaultProps.inputSlot?.className,
        (isActive && activeClassName) ??
          inputOtpDefaultProps.inputSlot?.activeClassName
      )}
      {...props}
    >
      {char}
      {hasFakeCaret &&
        (inputOtpDefaultProps.fakeCaret ?? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-neutral-950 duration-1000 dark:bg-neutral-50" />
          </div>
        ))}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
