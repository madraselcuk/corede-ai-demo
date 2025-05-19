import { CoChipProps } from "@/components/atoms/chip/chip.props"
export const chipTheme: Partial<CoChipProps> = {
  className:
    "bg-primary text-primary-foreground hover:bg-primary/80 h-6 px-2.5 text-sm",
  buttonProps: {
    className: "hover:bg-background/20 ml-1 rounded-full p-0.5"
  }
}
