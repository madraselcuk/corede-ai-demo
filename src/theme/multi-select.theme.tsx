import { MultiSelectProps } from "@/components/atoms/select-multi-v2/multi-select-v2.props"

export const multiSelectTheme: Partial<MultiSelectProps> = {
  search: {
    button: {
      className: "w-[200px] justify-between",
      noValueSelectedClassName: "text-muted-foreground"
    }
  }
}
