'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { INotificationListItemResult } from '@corede_package'
import { NotificationFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { notificationColumnDefs } from './notification-list.columns'
import { useNotificationListQuery } from '@/domains/notification/api'
import { useI18n } from '@/localization/hooks/useI18n'
import { sortFromSingleColumnSorting } from '@/utils/data-table.util'
import { filterFromTableHeaderToolbarQuery } from '@/utils/data-table.util'
import { NotificationDetailDialog } from '../detail'
import { NotificationUpdateDialog } from '../update'
import { NotificationCreateDialog } from '../create'

export interface NotificationListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<
    INotificationListItemResult,
    NotificationFilters
  >
}

export interface NotificationListContainerProps {
  readonly children: (props: NotificationListContainerUIProps) => JSX.Element
}

export const NotificationListContainer = ({
  children,
}: NotificationListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [notificationForAction, setNotificationForAction] = useState<
    INotificationListItemResult | undefined
  >(undefined)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  const [filters, setFilters] = useState<NotificationFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'notification-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'notification-list-selected',
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
    data: notificationListData,
    isLoading: notificationListIsLoading,
    error: notificationListError,
  } = useNotificationListQuery(variables)

  useEffect(() => {
    if (notificationListError) {
      setNoConnectionError(true)
    }
  }, [notificationListError, t])

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
    (notification: INotificationListItemResult) => {
      setNotificationForAction(notification)
      setOpenUpdateDialog(true)
    },
    [],
  )

  const handleRowClick = useCallback(
    (notification: INotificationListItemResult) => {
      setNotificationForAction(notification)
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
          data: notificationListData?.data ?? [],
          columns: notificationColumnDefs({
            onEdit: handleEditClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((notificationListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: notificationListIsLoading,
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

      <NotificationDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setNotificationForAction(undefined)
        }}
        notificationId={notificationForAction?._id}
      />

      <NotificationCreateDialog
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setNotificationForAction(undefined)
        }}
      />

      <NotificationUpdateDialog
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setNotificationForAction(undefined)
        }}
        notificationId={notificationForAction?._id}
      />
    </>
  )
}

export default NotificationListContainer
