import { ButtonProps } from "@/components/ui/co/button"

export type ButtonVariant = "primary" | "secondary" | "danger" | "outline"
export type ButtonSize = "sm" | "md" | "lg"

export interface CoButtonProps extends ButtonProps {
  // size?: ButtonSize
  // variant?: ButtonVariant
  isLoading?: boolean
}
