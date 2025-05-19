'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { IGraphqlVariables } from '@common_package'
import {
  ISubscriptionFormListInput,
  ISubscriptionFormListItemResult,
} from '@corede_package'
import { SubscriptionFormDeleteDialog } from '../../../components/subscription-form-delete-dialog/subscription-form-delete-dialog'
import { SubscriptionFormFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { subscriptionFormColumnDefs } from './subscription-form-list.columns'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import SubscriptionFormDetailDialog from '../detail/base/subscription-form-detail.dialog'
import SubscriptionFormCreateDialog from '../create/base/subscription-form-create.dialog'
import SubscriptionFormUpdateDialog from '../update/base/subscription-form-update.dialog'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  filterFromTableHeaderToolbarQuery,
  sortFromSingleColumnSorting,
} from '@/utils/data-table.util'
import { useSubscriptionFormListQuery } from '@/domains/form/api'

export interface SubscriptionFormListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<
    ISubscriptionFormListItemResult,
    SubscriptionFormFilters
  >
}

export interface SubscriptionFormListContainerProps {
  readonly children: (
    props: SubscriptionFormListContainerUIProps,
  ) => JSX.Element
}

export const SubscriptionFormListContainer = ({
  children,
}: SubscriptionFormListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [subscriptionFormForAction, setSubscriptionFormForAction] = useState<
    ISubscriptionFormListItemResult | undefined
  >(undefined)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  const [filters, setFilters] = useState<SubscriptionFormFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'subscriptionForm-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'subscriptionForm-list-selected',
    [],
  )

  // Prepare variables for GraphQL query
  const variables: IGraphqlVariables<ISubscriptionFormListInput> = {
    input: {
      pagination: {
        page: pageIndex + 1, // Convert to 1-based index
        pageSize,
        sort: sortFromSingleColumnSorting({ sorting }), // Add single column sorting configuration
      },
      filter: filterFromTableHeaderToolbarQuery({
        searchBarQueryParams: {
          searchFieldKey: 'email',
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

  // Use the existing query hook
  const {
    data: subscriptionFormListData,
    isLoading: subscriptionFormListIsLoading,
    error: subscriptionFormListError,
  } = useSubscriptionFormListQuery(variables)

  // use effect
  useEffect(() => {
    if (subscriptionFormListError) {
      setNoConnectionError(true)
    }
  }, [subscriptionFormListError])

  const handlePaginationChange = useCallback(
    (newPageIndex: number, newPageSize: number) => {
      setPageIndex(newPageIndex)
      setPageSize(newPageSize)
    },
    [],
  )

  const handleExportClick = useCallback((selectedIds: string[]) => {
    console.log('Export:', selectedIds)
    toast.push(
      <Notification
        title={`Export action for ${selectedIds.length} items`}
        type="success"
      >
        We have sent you an email to reset your password
      </Notification>,
    )
  }, [])

  const handleClearSelection = useCallback(() => {
    setSelectedRows([])
  }, [setSelectedRows])

  // Handle edit action
  const handleEditClick = useCallback(
    (subscriptionForm: ISubscriptionFormListItemResult) => {
      setSubscriptionFormForAction(subscriptionForm)
      setOpenUpdateDialog(true)
    },
    [],
  )

  // Handle delete action
  const handleDeleteClick = useCallback(
    (subscriptionForm: ISubscriptionFormListItemResult) => {
      console.log('handleDeleteClick', subscriptionForm)
      setSubscriptionFormForAction(subscriptionForm)
      setDeleteDialogOpen(true)
    },
    [],
  )

  // Handle successful deletion
  const handleDeleteSuccess = useCallback(() => {
    // Refetch the subscriptionForms list
    // The query will automatically refetch if you've set up proper cache invalidation
  }, [])

  // Add this new handler for bulk delete
  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      // For now, just handle the first selected item
      if (selectedIds.length > 0) {
        const subscriptionFormToDelete = subscriptionFormListData?.data.find(
          (subscriptionForm) => subscriptionForm._id === selectedIds[0],
        )
        if (subscriptionFormToDelete) {
          handleDeleteClick(subscriptionFormToDelete)
        }
      }
    },
    [subscriptionFormListData?.data, handleDeleteClick],
  )

  // Add this handler for row clicks
  const handleRowClick = useCallback(
    (subscriptionForm: ISubscriptionFormListItemResult) => {
      // console.log("Navigating to:", `/blog/subscriptionForm-detail/${subscriptionForm._id}`)
      // navigate(`/blog/subscriptionForm-detail/${subscriptionForm._id}`)
      setSubscriptionFormForAction(subscriptionForm)
      setOpenDetailDialog(true)
    },
    // [navigate]
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
          data: subscriptionFormListData?.data ?? [],
          columns: subscriptionFormColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil(
            (subscriptionFormListData?.count ?? 0) / pageSize,
          ),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: subscriptionFormListIsLoading,
          onDelete: handleBulkDelete,
          onExport: handleExportClick,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: t('form:subscriptionFormListSearchPlaceholder'),
            },
            dateRange: {
              enabled: true,
              placeholder: t('form:subscriptionFormListDateRangePlaceholder'),
            },
          },
        },
      })}

      {/* <SubscriptionFormDetailDrawer */}
      <SubscriptionFormDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setSubscriptionFormForAction(undefined)
        }}
        subscriptionFormId={subscriptionFormForAction?._id.toString()}
      />

      {/* <SubscriptionFormCreateDrawer */}
      <SubscriptionFormCreateDialog
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setSubscriptionFormForAction(undefined)
        }}
      />

      {/* <SubscriptionFormUpdateDrawer */}
      <SubscriptionFormUpdateDialog
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setSubscriptionFormForAction(undefined)
        }}
        subscriptionFormId={subscriptionFormForAction?._id.toString()}
      />

      <SubscriptionFormDeleteDialog
        subscriptionFormId={subscriptionFormForAction?._id.toString() ?? ''}
        subscriptionFormName={t('form:subscriptionForm')}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setSubscriptionFormForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default SubscriptionFormListContainer
