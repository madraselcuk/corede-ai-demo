import { FieldValues, useForm } from 'react-hook-form'
import { HasUiType } from './common'
import { OnQueryError, OnQuerySuccess } from '@/utils/notification'
import { JSX } from 'react'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { IBaseHeaderToolbarFilter } from '@/components/molecules/table/data-table/header-toolbar/table-header-toolbar'
import { ColumnDef } from '@tanstack/react-table'

// List By DataTable functionality component

export interface CommonListByDataTableFuncContainerProps<
  TListItemResult,
  TTableFilter extends IBaseHeaderToolbarFilter,
> {
  onListSuccess?: OnQuerySuccess
  onListError?: OnQueryError
  children: (
    props: CommonListByDataTableUIComponentProps<TListItemResult, TTableFilter>,
  ) => JSX.Element
}

export interface CommonListByDataTableUIComponentProps<
  TListItemResult,
  TTableFilter extends IBaseHeaderToolbarFilter,
> {
  dataTableProps: DataTableProps<TListItemResult, TTableFilter>
  noConnectionError?: boolean

  handleCreate?: () => void
}

export type CommonEntityColumnDefsFunc<TEntityListItemResult> = (params: {
  onEdit: (entity: TEntityListItemResult) => void
  onDelete: (entity: TEntityListItemResult) => void
}) => ColumnDef<TEntityListItemResult>[]

// List functionality component

export interface CommonListFuncContainerProps<
  TListResult
> {
  onListSuccess?: OnQuerySuccess
  onListError?: OnQueryError
  children: (
    props: CommonListUIComponentProps<TListResult>,
  ) => JSX.Element
}

export interface CommonListUIComponentProps<TListResult> {
  data: TListResult
  isLoading: boolean
  noConnectionError?: boolean
  noDataError?: boolean
}

// Detail functionality component

export interface CommonDetailFuncContainerProps<TDetail> {
  onDetailSuccess?: OnQuerySuccess
  onDetailError?: OnQueryError
  entityId?: string
  children: (props: CommonDetailUIComponentProps<TDetail>) => JSX.Element
}

export interface CommonDetailUIComponentProps<TDetail> extends HasUiType {
  // detail query fields
  detailQueryIsLoading: boolean
  detailResult?: TDetail
  noDataError?: boolean
  connectionError?: boolean
}

// Create functionality component

export interface CommonCreateFuncContainerProps<TInput extends FieldValues> {
  onCreateSuccess?: OnQuerySuccess
  onCreateError?: OnQueryError
  children: (props: CommonCreateUIComponentProps<TInput>) => JSX.Element
}

export interface CommonCreateUIComponentProps<TInput extends FieldValues>
  extends HasUiType {
  form: ReturnType<typeof useForm<TInput>>
  handleCreate: (values: TInput) => Promise<void>
  isLoading: boolean
}

// Update functionality component

export interface CommonUpdateFuncContainerProps<
  TInput extends FieldValues,
  TDetail,
> {
  onDetailSuccess?: OnQuerySuccess
  onDetailError?: OnQueryError
  onUpdateSuccess?: OnQuerySuccess
  onUpdateError?: OnQueryError
  entityId?: string
  children: (
    props: CommonUpdateUIComponentProps<TInput, TDetail>,
  ) => JSX.Element
}

export interface CommonUpdateUIComponentProps<
  TInput extends FieldValues,
  TDetail,
> extends HasUiType {
  // detail query fields
  detailQueryIsLoading: boolean
  detailResult?: TDetail
  noDataError?: boolean
  connectionError?: boolean

  //update  fields
  form: ReturnType<typeof useForm<TInput>>
  handleUpdate: (values: TInput) => Promise<void>
  isUpdating: boolean
}
