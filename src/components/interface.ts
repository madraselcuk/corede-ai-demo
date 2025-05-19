import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form'
import { LabelProps } from '@/components/ui/Label/label'
import { JSX, ReactNode } from 'react'

export interface HasChildren {
  children?: React.ReactNode
}

export interface HasClassName {
  className?: string
}

export interface BaseFormFieldProps<
  T extends FieldValues = FieldValues,
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> {
  form: UseFormReturn<T>
  hookName: TName
  containerProps?: React.HTMLAttributes<HTMLDivElement>
  label?: {
    noLabel?: boolean
    content?: ReactNode | string
    props?: LabelProps
  }
  description?: {
    props?: React.HTMLAttributes<HTMLParagraphElement>
    content?: ReactNode
  }
  messageProps?: React.HTMLAttributes<HTMLParagraphElement>
}

export interface BaseFormFieldPropsV2<
  T extends FieldValues = FieldValues,
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> {
  form: UseFormReturn<T>
  hookName: TName
}

export interface SelectItemProps<T = string> {
  label: string
  value: T
}

// #######################################################
// ## Entity Action View
// #######################################################

export interface EntityActionViewProps extends HasChildren {
  title: string
  isOpen: boolean
  onClose: () => void
}

export interface EntityActionViewBaseProps
  extends Omit<EntityActionViewProps, 'title'> {}

export interface EntityActionWithIdViewProps extends HasChildren {
  title: string
  isOpen: boolean
  onClose: () => void
  entityId: string
}

export interface EntityActionWithIdViewBaseProps
  extends Omit<EntityActionWithIdViewProps, 'title'> {}

export interface EntityActionViews {
  create: (props: EntityActionViewBaseProps) => JSX.Element
  update: (props: EntityActionWithIdViewBaseProps) => JSX.Element
  delete: (props: EntityActionWithIdViewBaseProps) => JSX.Element
  detail: (props: EntityActionWithIdViewBaseProps) => JSX.Element
}
