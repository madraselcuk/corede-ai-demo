import { progressTheme } from "@/theme/progress.theme"
import {
  coProgressBarVariants,
  CoProgressProps,
  coProgressVariants
} from "./progress.props"

export function CoProgress({
  variant = progressTheme.variant,
  barVariant = progressTheme.barVariant,
  value,
  className = progressTheme.className,
  barClassName = progressTheme.barClassName
}: CoProgressProps) {
  const percentage = Math.min(100, Math.max(0, value))
  const currentVariant =
    variant ??
    (percentage > 66 ? "success" : percentage > 33 ? "warning" : "error")

  return (
    <div className="flex items-center gap-2">
      <div
        className={coProgressVariants({
          className: className,
          variant: currentVariant
        })}
      >
        <div
          className={coProgressBarVariants({
            className: barClassName,
            barVariant
          })}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-medium">{percentage}%</span>
    </div>
  )
}
