import { Input } from "@/components/ui/co/input"
import { BaseFilterProps, TextFilterValue } from "./types"

export function TextFilter({
  value,
  onChange,
  label,
  placeholder,
  className
}: BaseFilterProps<TextFilterValue>) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <Input
        value={value?.value ?? ""}
        onChange={(e) => onChange({ value: e.target.value })}
        placeholder={placeholder}
        className={className}
      />
    </div>
  )
}
