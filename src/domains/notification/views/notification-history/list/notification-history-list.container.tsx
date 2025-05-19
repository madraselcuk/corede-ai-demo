'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { INotificationHistoryListItemResult } from '@corede_package'
import { NotificationHistoryFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { notificationHistoryColumnDefs } from './notification-history-list.columns'
import { useNotificationHistoryListQuery } from '@/domains/notification/api'
import { useI18n } from '@/localization/hooks/useI18n'
import { sortFromSingleColumnSorting } from '@/utils/data-table.util'
import { filterFromTableHeaderToolbarQuery } from '@/utils/data-table.util'
import { NotificationHistoryDetailDialog } from '../detail'

export interface NotificationHistoryListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<INotificationHistoryListItemResult, NotificationHistoryFilters>
}

export interface NotificationHistoryListContainerProps {
  readonly children: (props: NotificationHistoryListContainerUIProps) => JSX.Element
}

export const NotificationHistoryListContainer = ({ children }: NotificationHistoryListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [notificationHistoryForAction, setNotificationHistoryForAction] = useState<
    INotificationHistoryListItemResult | undefined
  >(undefined)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)

  const [filters, setFilters] = useState<NotificationHistoryFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'notificationHistory-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'notificationHistory-list-selected',
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
    data: notificationHistoryListData,
    isLoading: notificationHistoryListIsLoading,
    error: notificationHistoryListError,
  } = useNotificationHistoryListQuery(variables)

  useEffect(() => {
    if (notificationHistoryListError) {
      setNoConnectionError(true)
    }
  }, [notificationHistoryListError, t])

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

  const handleRowClick = useCallback((notificationHistory: INotificationHistoryListItemResult) => {
    setNotificationHistoryForAction(notificationHistory)
    setOpenDetailDialog(true)
  }, [])

  return (
    <>
      {children({
        handleCreate: () => {

        },
        noConnectionError,
        dataTableProps: {
          data: notificationHistoryListData?.data ?? [],
          columns: notificationHistoryColumnDefs({
            onEdit: () => { },
            onDelete: () => { },
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((notificationHistoryListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: notificationHistoryListIsLoading,
          onDelete: () => { },
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: t('notificationnotificationHistorySearchByNamePlaceholder'),
            },
            dateRange: {
              enabled: true,
              placeholder: t('notificationnotificationHistoryListDateRangePlaceholder'),
            },
          },
        },
      })}

      <NotificationHistoryDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setNotificationHistoryForAction(undefined)
        }}
        notificationHistoryId={notificationHistoryForAction?._id}
      />
    </>
  )
}

export default NotificationHistoryListContainer
