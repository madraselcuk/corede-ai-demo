import { forwardRef } from "react"
import { CoTextProps } from "./text.props"
import { textTheme } from "@/theme/text.theme"

export const CoText = forwardRef<HTMLParagraphElement, CoTextProps>(
  ({ className = textTheme.className, ...props }, ref) => {
    return <p ref={ref} className={className} {...props} />
  }
)

CoText.displayName = CoText.name
