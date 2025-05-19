import * as React from 'react'
import {
  addDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  format,
} from 'date-fns'
import { Calendar } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/co/popover'
import { DateTimePicker } from '../input-date-v2/date-time-picker-v2'
import { CoDateRangePickerProps } from './date-range-picker.props'
import { CoButtonV2 } from '../button-v2/button-v2'
import { useI18n } from '@/localization/hooks/useI18n'
import { i18n } from '@/localization'
import Button from '@/components/ui/Button'

const presetRanges = [
  {
    label: i18n.t('common:today'),
    getValue: () => ({
      from: new Date(),
      to: new Date(),
    }),
  },
  {
    label: i18n.t('common:last3Days'),
    getValue: () => ({
      from: addDays(new Date(), -3),
      to: new Date(),
    }),
  },
  {
    label: i18n.t('common:thisWeek'),
    getValue: () => ({
      from: startOfWeek(new Date()),
      to: endOfWeek(new Date()),
    }),
  },
  {
    label: i18n.t('common:thisMonth'),
    getValue: () => ({
      from: startOfMonth(new Date()),
      to: endOfMonth(new Date()),
    }),
  },
]

export function CoDateRangePicker({
  startDate,
  endDate,
  onChange,
  presets = true,
  placeholder,
}: CoDateRangePickerProps) {
  const { t } = useI18n()

  const [open, setOpen] = React.useState(false)
  const [fromDate, setFromDate] = React.useState<Date | undefined>(
    startDate ? new Date(startDate) : undefined,
  )
  const [toDate, setToDate] = React.useState<Date | undefined>(
    endDate ? new Date(endDate) : undefined,
  )

  React.useEffect(() => {
    setFromDate(startDate ? new Date(startDate) : undefined)
    setToDate(endDate ? new Date(endDate) : undefined)
  }, [startDate, endDate])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="md" className="p-2">
          <div className="flex items-center gap-2">
            <span>
              <Calendar className=" size-4" />
            </span>
            {startDate && endDate ? (
              `${format(startDate, 'PP')} - ${format(endDate, 'PP')}`
            ) : (
              <p className="text-xs whitespace-normal text-left">
                {placeholder ?? t('common:pickDateRange')}
              </p>
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-2 border-none bg-gray-100 dark:bg-gray-900 rounded-xl"
        align="end"
      >
        <div className="space-y-4 p-4">
          {presets && (
            <div className="flex flex-wrap gap-2">
              {presetRanges.map((preset) => (
                <CoButtonV2
                  key={preset.label}
                  variant="outline"
                  className="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                  size="sm"
                  onClick={() => {
                    const range = preset.getValue()
                    setFromDate(range.from)
                    setToDate(range.to)
                    onChange(range)
                    setOpen(false)
                  }}
                >
                  {preset.label}
                </CoButtonV2>
              ))}
            </div>
          )}
          <div className="flex gap-4 items-end justify-between">
            <div className="flex flex-col gap-2">
              <label>{t('common:from')}</label>
              <DateTimePicker
                value={fromDate}
                onChange={(date) => {
                  setFromDate(date)
                }}
                className="rounded-xl h-10"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>{t('common:to')}</label>
              <DateTimePicker
                value={toDate}
                onChange={(date) => {
                  setToDate(date)
                }}
                className="rounded-xl h-10"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  onChange({ from: fromDate!, to: toDate! })
                  setOpen(false)
                }}
              >
                {t('common:apply')}
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
