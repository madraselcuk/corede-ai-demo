import { forwardRef } from "react"
import { CoInput } from "../input/input"
import { CoEmailInputProps } from "./email-input.props"
import { MailIcon } from "lucide-react"
import { emailInputTheme } from "@/theme/email-input.theme"

export const CoEmailInput = forwardRef<HTMLInputElement, CoEmailInputProps>(
  ({ className = emailInputTheme.className, ...props }, ref) => {
    return (
      <CoInput
        ref={ref}
        {...emailInputTheme}
        {...props}
        className={className}
        type="email"
        rightIcon={
          props.rightIcon === null ? null : props.rightIcon === undefined ? (
            <MailIcon />
          ) : (
            props.rightIcon === undefined
          )
        }
      />
    )
  }
)

CoEmailInput.displayName = CoEmailInput.name
