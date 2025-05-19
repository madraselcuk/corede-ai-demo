'use client'

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnSort,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/co/table'
import { Pagination } from '../../pagination/pagination'
import { TableFloatingToolbar } from './selection-floating-toolbar/table-floating-toolbar'
import { TableEmptyStateRow } from './table-empty-state-row'
import { TableLoadingStateRow } from './table-loading-state-row'
import {
  IBaseHeaderToolbarFilter,
  TableHeaderToolbar,
} from './header-toolbar/table-header-toolbar'
import { DataTableProps } from './data-table.props'

export function DataTable<TData, TFilter extends IBaseHeaderToolbarFilter>({
  data,
  columns,
  pageCount,
  pageSize,
  pageIndex,
  onPaginationChange,
  selectedRows,
  onSelectedRowsChange,
  isLoading,
  onDelete,
  onExport,
  onClearSelection,
  onRowClick,
  sorting,
  onSortingChange,
  toolbar,
  defaultToolbarProps,
  filters,
  setFilters,
  handleRefresh,
}: DataTableProps<TData, TFilter>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
      rowSelection: Object.fromEntries(selectedRows.map((id) => [id, true])),
      sorting: sorting?.[0]
        ? [{ id: sorting[0].id, desc: sorting[0].desc }]
        : [],
    },
    pageCount,
    manualPagination: true,
    manualSorting: true,
    onSortingChange: (updater) => {
      if (typeof updater === 'function') {
        const newState = updater(
          sorting?.[0] ? [{ id: sorting[0].id, desc: sorting[0].desc }] : [],
        )
        const newSort = newState[0] as ColumnSort | undefined
        onSortingChange?.(newSort ? [newSort] : [])
      }
    },
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newState = updater({ pageIndex, pageSize })
        onPaginationChange(newState.pageIndex, newState.pageSize)
      }
    },
    onRowSelectionChange: (updater) => {
      if (typeof updater === 'function') {
        const newState = updater(
          Object.fromEntries(selectedRows.map((id) => [id, true])),
        )
        onSelectedRowsChange(
          Object.entries(newState)
            .filter(([, selected]) => selected)
            .map(([id]) => id),
        )
      }
    },
  })

  function renderTableContent() {
    // Loading state
    if (isLoading) {
      return <TableLoadingStateRow colSpan={columns.length} />
    }

    // Empty state
    if (table.getRowModel().rows?.length === 0) {
      return <TableEmptyStateRow colSpan={columns.length} />
    }

    // Table content
    return table.getRowModel().rows.map((row) => (
      <TableRow
        key={row.id}
        onClick={(e) => {
          // Check if the click target is or is inside an interactive element
          const isInteractiveElement = (e.target as HTMLElement).closest(
            'button, input, select, a, [role="button"], [role="menuitem"]',
          )

          if (!isInteractiveElement && onRowClick) {
            onRowClick(row.original)
          }
        }}
        className={onRowClick ? 'hover:bg-muted cursor-pointer' : ''}
      >
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id} className=''>
            <div className="flex items-center">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          </TableCell>
        ))}
      </TableRow>
    ))
  }

  return (
    <div>
      <div className="space-y-4">
        {toolbar?.(table) ?? (
          <TableHeaderToolbar
            table={table}
            filters={filters}
            setFilters={setFilters}
            handleRefresh={handleRefresh}
            {...defaultToolbarProps}
          />
        )}
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <div className="min-h-[400px] overflow-auto modern-scrollbar lower-scrollbar::-webkit-scrollbar-thumb lower-scrollbar::-webkit-scrollbar-track ">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className=''>{renderTableContent()}</TableBody>
            </Table>
          </div>
        </div>

        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          pageCount={pageCount}
          totalRows={table.getFilteredSelectedRowModel().rows.length}
          onPageChange={(page) => onPaginationChange(page, pageSize)}
          onPageSizeChange={(size) => onPaginationChange(0, size)}
        />
      </div>

      {(onDelete || onExport) && (
        <TableFloatingToolbar
          selectedCount={selectedRows.length}
          selectedIds={selectedRows}
          onDelete={onDelete}
          onExport={onExport}
          onClear={onClearSelection}
        />
      )}
    </div>
  )
}
