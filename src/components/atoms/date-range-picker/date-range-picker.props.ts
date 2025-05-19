import { IDateFilter } from '@common_package'

export interface CoDateRangePickerProps {
  startDate?: Date
  endDate?: Date
  onChange: (range: IDateFilter | undefined) => void
  className?: string
  presets?: boolean
  placeholder?: string
}
