'use client'

import { SelectItemProps } from '@/components/interface'
import Select, { SelectProps } from '@/components/ui/Select'

export type EnumSelectOption = SelectItemProps

export interface EnumSelectProps<T extends EnumSelectOption = EnumSelectOption>
  extends SelectProps<T> {}

export const EnumSelectV2 = <T extends EnumSelectOption = EnumSelectOption>({
  placeholder,
  options,
  ...rest
}: EnumSelectProps<T>) => {
  return <Select placeholder={placeholder} options={options} {...rest} />
}
