import { Input } from "@/components/ui/co/input"
import { BaseFilterProps, NumberRangeFilterValue } from "./types"

export function NumberRangeFilter({
  value,
  onChange,
  label,
  className
}: BaseFilterProps<NumberRangeFilterValue>) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="flex gap-2">
        <Input
          type="number"
          value={value?.from ?? ""}
          onChange={(e) => {
            const val = e.target.value ? Number(e.target.value) : null
            onChange({ ...value, from: val ?? undefined })
          }}
          placeholder="From"
          className={className}
        />
        <Input
          type="number"
          value={value?.to ?? ""}
          onChange={(e) => {
            const val = e.target.value ? Number(e.target.value) : null
            onChange({ ...value, to: val ?? undefined })
          }}
          placeholder="To"
          className={className}
        />
      </div>
    </div>
  )
}
