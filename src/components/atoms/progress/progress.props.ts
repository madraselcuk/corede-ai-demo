import { cva, VariantProps } from "class-variance-authority"
import {
  progressBarVariantBaseClassName,
  progressBarVariants,
  progressVariantBaseClassName,
  progressVariants
} from "@/theme/progress.theme"

export const coProgressVariants = cva(
  progressVariantBaseClassName,
  progressVariants
)

export type ProgressVariantProps = VariantProps<typeof coProgressVariants>

export const coProgressBarVariants = cva(
  progressBarVariantBaseClassName,
  progressBarVariants
)

export type ProgressBarVariantProps = VariantProps<typeof coProgressBarVariants>

export interface CoProgressProps
  extends ProgressVariantProps,
    ProgressBarVariantProps {
  value: number
  className?: string
  barClassName?: string
}
