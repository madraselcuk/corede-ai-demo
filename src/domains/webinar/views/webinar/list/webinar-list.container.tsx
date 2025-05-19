'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useWebinarListQuery } from '@/domains/webinar/api'
import { IGraphqlVariables } from '@common_package'
import { IWebinarsInput, IWebinarResult } from '@corede_package'
import { WebinarDeleteDialog } from '../../../components/webinar-delete-dialog/webinar-delete-dialog'
import { WebinarFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { webinarColumnDefs } from './webinar-list.columns'
import { useI18n } from '@/localization/hooks/useI18n'
import { WebinarDetailDrawer } from '../detail'
import { WebinarCreateDrawer } from '../create'
import { WebinarUpdateDrawer } from '../update'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface WebinarListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<IWebinarResult, WebinarFilters>
}

export interface WebinarListContainerProps {
  readonly children: (props: WebinarListContainerUIProps) => JSX.Element
}

export const WebinarListContainer = ({
  children,
}: WebinarListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [webinarForAction, setWebinarForAction] = useState<
    IWebinarResult | undefined
  >(undefined)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  const [filters, setFilters] = useState<WebinarFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'webinar-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'webinar-list-selected',
    [],
  )

  // Prepare variables for GraphQL query
  const variables: IGraphqlVariables<IWebinarsInput> = {
    input: {
      pagination: {
        page: pageIndex + 1, // Convert to 1-based index
        pageSize,
        // Add single column sorting configuration
        sort: sorting?.at(0)?.id
          ? {
              [sorting?.at(0)?.id ?? '']: sorting?.at(0)?.desc ? -1 : 1,
            }
          : undefined,
      },
      filter: {
        // Simply pass the search query string directly
        ...(filters.searchQuery ? { name: filters.searchQuery } : {}),
      },
    },
  }

  // Reset pagination when filters change
  useEffect(() => {
    setPageIndex(0)
  }, [filters])

  // Use the existing query hook
  const {
    data: webinarsData,
    isLoading: webinarsIsLoading,
    error: webinarsError,
  } = useWebinarListQuery(variables)

  // use effect
  useEffect(() => {
    if (webinarsError) {
      setNoConnectionError(true)
      toast.push(
        <Notification title={t('common:error')} type="danger">
          {t('webinar:errorLoadingWebinars')}
        </Notification>,
      )
    }
  }, [webinarsError, t])

  const handlePaginationChange = useCallback(
    (newPageIndex: number, newPageSize: number) => {
      setPageIndex(newPageIndex)
      setPageSize(newPageSize)
    },
    [],
  )

  const handleExportClick = useCallback(
    (selectedIds: string[]) => {
      console.log('Export:', selectedIds)
      toast.push(
        <Notification title={t('common:info')} type="info">
          {t('common:exportActionFor', { count: selectedIds.length })}
        </Notification>,
      )
    },
    [t],
  )

  const handleClearSelection = useCallback(() => {
    setSelectedRows([])
  }, [setSelectedRows])

  // Handle edit action
  const handleEditClick = useCallback((webinar: IWebinarResult) => {
    setWebinarForAction(webinar)
    setOpenUpdateDialog(true)
  }, [])

  // Handle delete action
  const handleDeleteClick = useCallback((webinar: IWebinarResult) => {
    setWebinarForAction(webinar)
    setDeleteDialogOpen(true)
  }, [])

  // Handle successful deletion
  const handleDeleteSuccess = useCallback(() => {
    // Refetch the webinars list
    // The query will automatically refetch if you've set up proper cache invalidation
  }, [])

  // Add this new handler for bulk delete
  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      // For now, just handle the first selected item
      if (selectedIds.length > 0) {
        const webinarToDelete = webinarsData?.data.find(
          (webinar) => webinar._id === selectedIds[0],
        )
        if (webinarToDelete) {
          handleDeleteClick(webinarToDelete)
        }
      }
    },
    [webinarsData?.data, handleDeleteClick],
  )

  // Add this handler for row clicks
  const handleRowClick = useCallback((webinar: IWebinarResult) => {
    setWebinarForAction(webinar)
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
          data: webinarsData?.data ?? [],
          columns: webinarColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((webinarsData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: webinarsIsLoading,
          onDelete: handleBulkDelete,
          onExport: handleExportClick,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: t('webinar:searchByNamePlaceholder'),
            },
            dateRange: {
              enabled: false,
            },
          },
        },
      })}

      <WebinarDetailDrawer
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setWebinarForAction(undefined)
        }}
        webinarId={webinarForAction?._id}
      />

      <WebinarCreateDrawer
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setWebinarForAction(undefined)
        }}
      />

      <WebinarUpdateDrawer
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setWebinarForAction(undefined)
        }}
        webinarId={webinarForAction?._id}
      />

      <WebinarDeleteDialog
        webinarId={webinarForAction?._id}
        webinarName={webinarForAction?.title}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setWebinarForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default WebinarListContainer
