import {
  IBaseHeaderToolbarFilter,
  OptionalTableHeaderToolbarProps,
} from './header-toolbar/table-header-toolbar'
import { ColumnDef, SortingState, Table } from '@tanstack/react-table'

export interface DataTableProps<
  TData,
  TTableFilter extends IBaseHeaderToolbarFilter,
> {
  readonly data: TData[]
  readonly columns: ColumnDef<TData>[]
  readonly pageCount: number
  readonly pageSize: number
  readonly pageIndex: number
  readonly onPaginationChange: (pageIndex: number, pageSize: number) => void
  readonly selectedRows: string[]
  readonly onSelectedRowsChange: (selectedRows: string[]) => void
  readonly isLoading: boolean
  readonly onDelete?: (selectedIds: string[]) => void
  readonly onExport?: (selectedIds: string[]) => void
  readonly onClearSelection: () => void
  readonly onRowClick?: (row: TData) => void
  readonly sorting?: SortingState
  readonly onSortingChange?: (sorting: SortingState) => void
  /**
   * Toolbar to be rendered above the table.
   * If not provided, the default toolbar will be rendered.
   */
  readonly toolbar?: (table: Table<TData>) => React.ReactNode
  /**
   * Default props for the toolbar.
   */
  readonly defaultToolbarProps?: OptionalTableHeaderToolbarProps<TTableFilter>
  readonly filters?: TTableFilter
  readonly setFilters?: (filters: TTableFilter) => void
  readonly handleRefresh?: () => void
}
