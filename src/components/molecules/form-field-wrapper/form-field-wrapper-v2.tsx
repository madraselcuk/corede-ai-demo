import type { CommonProps } from '@/components/ui/@types/common'
import type { ReactNode } from 'react'
import { BaseFormFieldPropsV2 } from '@/components/interface'
import { FormItemProps } from '@/components/ui/Form'

export interface FormFieldWrapperV2Props<TInputProps>
  extends CommonProps,
    FormItemProps,
    BaseFormFieldPropsV2 {
  label?: string
  description?: string | ReactNode
  required?: boolean
  layout?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  inputProps?: TInputProps
}