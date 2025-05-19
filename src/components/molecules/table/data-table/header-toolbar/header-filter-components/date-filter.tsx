import { Calendar } from "@/components/ui/co/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/co/popover"
import { Button } from "@/components/ui/co/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/utils/css-class-name.utility"
import { BaseFilterProps, DateFilterValue } from "./types"

export function DateFilter({
  value,
  onChange,
  label,
  placeholder,
  className
}: BaseFilterProps<DateFilterValue>) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !value?.value && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 size-4" />
            {value?.value
              ? format(value.value, "PPP")
              : placeholder ?? "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value?.value ?? undefined}
            onSelect={(date) => onChange({ value: date ?? null })}
            autoFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
