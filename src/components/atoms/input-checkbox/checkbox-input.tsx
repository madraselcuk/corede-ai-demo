import { cn } from "@/lib/utils"
import { CoCheckboxInputProps } from "./checkbox-input.props"
import { Input } from "@/components/ui/input"
import { checkboxTheme } from "@/theme/checkbox-input.theme"

export const CoCheckboxInput = ({
  className = checkboxTheme.className,
  ...props
}: CoCheckboxInputProps) => {
  return <Input type="checkbox" className={cn(className)} {...props} />
}
