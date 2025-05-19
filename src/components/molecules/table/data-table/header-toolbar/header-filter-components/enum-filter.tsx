import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/co/select"
import { BaseFilterProps, EnumFilterValue } from "./types"

interface EnumFilterProps<T> extends BaseFilterProps<EnumFilterValue<T>> {
  options: Array<{ label: string; value: T }>
}

export function EnumFilter<T>({
  value,
  onChange,
  label,
  placeholder,
  className,
  options
}: EnumFilterProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <Select
        value={value?.value?.toString()}
        onValueChange={(val) => onChange({ value: val as T })}
      >
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value as string}
              value={option.value as string}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
