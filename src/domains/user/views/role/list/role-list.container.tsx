'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { IRoleListItemResult } from '@corede_package'
import { RoleFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { roleColumnDefs } from './role-list.columns'
import { useRoleListQuery } from '@/@package/api/domains/user/role/role.api'
import { RoleDeleteDialog } from '../../../components/role-delete-dialog/role-delete-dialog'
import { useI18n } from '@/localization/hooks/useI18n'
import { sortFromSingleColumnSorting } from '@/utils/data-table.util'
import { filterFromTableHeaderToolbarQuery } from '@/utils/data-table.util'
import { RoleCreateDialog } from '../create'
import { RoleDetailDialog } from '../detail'
import { RoleUpdateDialog } from '../update'

export interface RoleListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<IRoleListItemResult, RoleFilters>
}

export interface RoleListContainerProps {
  readonly children: (props: RoleListContainerUIProps) => JSX.Element
}

export const RoleListContainer = ({ children }: RoleListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [roleForAction, setRoleForAction] = useState<
    IRoleListItemResult | undefined
  >(undefined)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  const [filters, setFilters] = useState<RoleFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'role-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'role-list-selected',
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
    data: roleListData,
    isLoading: roleListIsLoading,
    error: roleListError,
  } = useRoleListQuery(variables)

  useEffect(() => {
    if (roleListError) {
      setNoConnectionError(true)
    }
  }, [roleListError, t])

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
  const handleEditClick = useCallback((role: IRoleListItemResult) => {
    setRoleForAction(role)
    setOpenUpdateDialog(true)
  }, [])

  const handleDeleteClick = useCallback((role: IRoleListItemResult) => {
    setRoleForAction(role)
    setDeleteDialogOpen(true)
  }, [])

  const handleDeleteSuccess = useCallback(() => {
    // Refetch the Roles list
  }, [])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const roleToDelete = roleListData?.data.find(
          (role: IRoleListItemResult) => role._id === selectedIds[0],
        )
        if (roleToDelete) {
          handleDeleteClick(roleToDelete)
        }
      }
    },
    [roleListData?.data, handleDeleteClick],
  )

  const handleRowClick = useCallback((role: IRoleListItemResult) => {
    setRoleForAction(role)
    setOpenDetailDialog(true)
  }, [])

  return (
    <>
      {children({
        handleCreate: () => {
          setOpenCreateDialog(true)
        },
        noConnectionError,
        dataTableProps: {
          data: roleListData?.data ?? [],
          columns: roleColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((roleListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: roleListIsLoading,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
            },
            dateRange: {
              enabled: true,
            },
          },
        },
      })}

      <RoleDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setRoleForAction(undefined)
        }}
        roleId={roleForAction?._id}
      />

      <RoleCreateDialog
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setRoleForAction(undefined)
        }}
      />

      <RoleUpdateDialog
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setRoleForAction(undefined)
        }}
        roleId={roleForAction?._id}
      />

      <RoleDeleteDialog
        id={roleForAction?._id ?? ''}
        name={roleForAction?.name ?? ''}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setRoleForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default RoleListContainer
