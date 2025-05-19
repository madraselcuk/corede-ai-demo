import { cva, VariantProps } from "class-variance-authority"
import { buttonVariantBaseClassName, buttonVariants } from "@/theme"

export const coButtonVariants = cva(buttonVariantBaseClassName, buttonVariants)

export type ButtonVariantProps = VariantProps<typeof coButtonVariants>

export interface CoButtonV2Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconSpacing?: string | number
  customLoader?: React.ReactNode
}
