import { forwardRef, useState } from "react"
import { CoInput } from "../input/input"
import { PasswordInputProps } from "./password-input.props"
import { EyeIcon } from "../icons/eye.icon"
import { CoButtonV2 } from "../button-v2/button-v2"
import { passwordInputTheme } from "@/theme/password-input.theme"

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className = passwordInputTheme.className, rightIcon, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <CoInput
        ref={ref}
        {...passwordInputTheme}
        {...props}
        className={className}
        type={showPassword ? "text" : "password"}
        rightIcon={
          rightIcon === null ? null : rightIcon === undefined ? (
            <CoButtonV2
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setShowPassword(!showPassword)
              }}
              className="transition-opacity hover:opacity-75"
            >
              <EyeIcon />
            </CoButtonV2>
          ) : (
            rightIcon
          )
        }
      />
    )
  }
)

PasswordInput.displayName = PasswordInput.name
