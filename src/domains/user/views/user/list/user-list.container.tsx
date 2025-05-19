'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { IUserListItemResult } from '@corede_package'
import { UserFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { userColumnDefs } from './user-list.columns'
import { useUserListQuery } from '@/@package/api/domains/user/user/user.api'
import { UserDeleteDialog } from '../../../components/user-delete-dialog/user-delete-dialog'
import { useI18n } from '@/localization/hooks/useI18n'
import { sortFromSingleColumnSorting } from '@/utils/data-table.util'
import { filterFromTableHeaderToolbarQuery } from '@/utils/data-table.util'
import { UserCreateDialog } from '../create'
import { UserDetailDialog } from '../detail'
import { UserUpdateDialog } from '../update'

export interface UserListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<IUserListItemResult, UserFilters>
}

export interface UserListContainerProps {
  readonly children: (props: UserListContainerUIProps) => JSX.Element
}

export const UserListContainer = ({ children }: UserListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [userForAction, setUserForAction] = useState<
    IUserListItemResult | undefined
  >(undefined)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  const [filters, setFilters] = useState<UserFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'user-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'user-list-selected',
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
    data: userListData,
    isLoading: userListIsLoading,
    error: userListError,
  } = useUserListQuery(variables)

  useEffect(() => {
    if (userListError) {
      setNoConnectionError(true)
    }
  }, [userListError, t])

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
  const handleEditClick = useCallback((user: IUserListItemResult) => {
    setUserForAction(user)
    setOpenUpdateDialog(true)
  }, [])

  const handleDeleteClick = useCallback((user: IUserListItemResult) => {
    setUserForAction(user)
    setDeleteDialogOpen(true)
  }, [])

  const handleDeleteSuccess = useCallback(() => {
    // Refetch the Users list
  }, [])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const userToDelete = userListData?.data.find(
          (user) => user._id === selectedIds[0],
        )
        if (userToDelete) {
          handleDeleteClick(userToDelete)
        }
      }
    },
    [userListData?.data, handleDeleteClick],
  )

  const handleRowClick = useCallback((user: IUserListItemResult) => {
    setUserForAction(user)
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
          data: userListData?.data ?? [],
          columns: userColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((userListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: userListIsLoading,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: t('user:userSearchByNamePlaceholder'),
            },
            dateRange: {
              enabled: true,
              placeholder: t('user:userListDateRangePlaceholder'),
            },
          },
        },
      })}

      <UserDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setUserForAction(undefined)
        }}
        userId={userForAction?._id}
      />

      <UserCreateDialog
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setUserForAction(undefined)
        }}
      />

      <UserUpdateDialog
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setUserForAction(undefined)
        }}
        userId={userForAction?._id}
      />

      <UserDeleteDialog
        id={userForAction?._id ?? ''}
        name={userForAction?.name ?? ''}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setUserForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default UserListContainer
