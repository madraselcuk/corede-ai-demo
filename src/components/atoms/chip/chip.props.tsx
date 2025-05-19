export interface CoChipProps extends React.HTMLAttributes<HTMLDivElement> {
  removable?: boolean
  variant?: "default" | "secondary" | "success" | "warning" | "error"
  buttonProps?: {
    onRemove?: () => void
    className?: string
  }
}
