import { Input } from "@/components/ui/co/input"
import { BaseFilterProps, NumberFilterValue } from "./types"

export function NumberFilter({
  value,
  onChange,
  label,
  placeholder,
  className
}: BaseFilterProps<NumberFilterValue>) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <Input
        type="number"
        value={value?.value ?? ""}
        onChange={(e) => {
          const val = e.target.value ? Number(e.target.value) : null
          onChange({ value: val })
        }}
        placeholder={placeholder}
        className={className}
      />
    </div>
  )
}
