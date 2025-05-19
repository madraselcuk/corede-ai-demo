import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/co/select"
import { BaseFilterProps, BooleanFilterValue } from "./types"

export function BooleanFilter({
  value,
  onChange,
  label,
  placeholder,
  className
}: BaseFilterProps<BooleanFilterValue>) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <Select
        value={value?.value?.toString()}
        onValueChange={(val) =>
          onChange({
            value: val === "true" ? true : val === "false" ? false : null
          })
        }
      >
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder ?? "Select..."} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="true">Yes</SelectItem>
          <SelectItem value="false">No</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
