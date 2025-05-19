import { IDateFilter, INumberIntervalFilter } from '@common_package'

export interface BaseFilterProps<T = any> {
  value: T | undefined
  onChange: (value: T | undefined) => void
  label?: string
  placeholder?: string
  className?: string
}

export interface TextFilterValue {
  value: string
}

export interface EnumFilterValue<T = string> {
  value: T
}

export interface DateFilterValue {
  value: Date | null
}

export interface DateRangeFilterValue extends IDateFilter {}

export interface BooleanFilterValue {
  value: boolean | null
}

export interface NumberFilterValue {
  value: number | null
}

export interface NumberRangeFilterValue extends INumberIntervalFilter {}
