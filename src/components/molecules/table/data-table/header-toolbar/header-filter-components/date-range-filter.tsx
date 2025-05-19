import { CoDateRangePicker } from '@/components/atoms/date-range-picker/date-range-picker'
import { BaseFilterProps, DateRangeFilterValue } from './types'

export function DateRangeFilter({
  value,
  onChange,
  label,
  className,
}: BaseFilterProps<DateRangeFilterValue>) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <CoDateRangePicker
        startDate={value?.from ?? undefined}
        endDate={value?.to ?? undefined}
        onChange={(range) =>
          onChange(
            range
              ? { from: range.from, to: range.to }
              : { from: undefined, to: undefined },
          )
        }
        className={className}
      />
    </div>
  )
}
