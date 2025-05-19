'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { IPermissionListItemResult } from '@corede_package'
import { PermissionFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { permissionColumnDefs } from './permission-list.columns'
import { usePermissionListQuery } from '@/@package/api/domains/user/permission/permission.api'

import { useI18n } from '@/localization/hooks/useI18n'
import { sortFromSingleColumnSorting } from '@/utils/data-table.util'
import { filterFromTableHeaderToolbarQuery } from '@/utils/data-table.util'
import { PermissionDetailDialog } from '../detail/base/permission-detail.dialog'
import { PermissionCreateDialog } from '../create'
import PermissionUpdateDialog from '../update/base/permission-update.dialog'

export interface PermissionListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<IPermissionListItemResult, PermissionFilters>
}

export interface PermissionListContainerProps {
  readonly children: (props: PermissionListContainerUIProps) => JSX.Element
}

export const PermissionListContainer = ({
  children,
}: PermissionListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [permissionForAction, setPermissionForAction] = useState<
    IPermissionListItemResult | undefined
  >(undefined)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  const [filters, setFilters] = useState<PermissionFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'permission-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'permission-list-selected',
    [],
  )

  // Prepare variables for GraphQL query
  const variables = {
    input: {
      pagination: {
        page: pageIndex + 1, // Convert to 1-based index
        pageSize,
        sort: sortFromSingleColumnSorting({ sorting }), // Add single column sorting configuration
      },
      filter: filterFromTableHeaderToolbarQuery({
        searchBarQueryParams: {
          searchFieldKey: 'name',
          searchQuery: filters.searchQuery,
        },
        dateRangeQueryParams: {
          dateRangeFieldKey: 'createdAtDateFilter',
          dateRange: filters.dateRange,
        },
      }),
    },
  }

  // Reset pagination when filters change
  useEffect(() => {
    setPageIndex(0)
  }, [filters])

  // queries
  const {
    data: permissionListData,
    isLoading: permissionListIsLoading,
    error: permissionListError,
  } = usePermissionListQuery(variables)

  useEffect(() => {
    if (permissionListError) {
      setNoConnectionError(true)
    }
  }, [permissionListError, t])

  const handlePaginationChange = useCallback(
    (pageIndex: number, pageSize: number) => {
      setPageIndex(pageIndex)
      setPageSize(pageSize)
    },
    [],
  )

  const handleClearSelection = useCallback(() => {
    setSelectedRows([])
  }, [setSelectedRows])

  // Add handlers
  const handleEditClick = useCallback(
    (permission: IPermissionListItemResult) => {
      setPermissionForAction(permission)
      setOpenUpdateDialog(true)
    },
    [],
  )

  const handleRowClick = useCallback(
    (permission: IPermissionListItemResult) => {
      setPermissionForAction(permission)
      setOpenDetailDialog(true)
    },
    [],
  )

  return (
    <>
      {children({
        handleCreate: () => {
          setOpenCreateDialog(true)
        },
        noConnectionError,
        dataTableProps: {
          data: permissionListData?.data ?? [],
          columns: permissionColumnDefs({
            onEdit: handleEditClick,
            onDelete: () => {},
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((permissionListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: permissionListIsLoading,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: t('common:searchPlaceholder'),
            },
            dateRange: {
              enabled: false,
            },
          },
        },
      })}

      <PermissionDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setPermissionForAction(undefined)
        }}
        permissionId={permissionForAction?._id}
      />

      <PermissionCreateDialog
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setPermissionForAction(undefined)
        }}
      />

      <PermissionUpdateDialog
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setPermissionForAction(undefined)
        }}
        permissionId={permissionForAction?._id}
      />
    </>
  )
}

export default PermissionListContainer
