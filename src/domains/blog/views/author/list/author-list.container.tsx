'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useAuthorListQuery } from '@/domains/blog/api'
import { IGraphqlVariables } from '@common_package'
import { IAuthorListInput, IAuthorListItemResult } from '@corede_package'
import { AuthorDeleteDialog } from '../../../components/author-delete-dialog/author-delete-dialog'
import { AuthorFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { authorColumnDefs } from './author-list.columns'
import { i18n } from '@/localization'
import { AuthorDetailDrawer } from '../detail'
import { AuthorCreateDrawer } from '../create'
import { AuthorUpdateDrawer } from '../update'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface AuthorListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<IAuthorListItemResult, AuthorFilters>
}

export interface AuthorListContainerProps {
  readonly children: (props: AuthorListContainerUIProps) => JSX.Element
}

export const AuthorListContainer = ({ children }: AuthorListContainerProps) => {
  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [authorForAction, setAuthorForAction] = useState<
    IAuthorListItemResult | undefined
  >(undefined)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  const [filters, setFilters] = useState<AuthorFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'author-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'author-list-selected',
    [],
  )

  // Prepare variables for GraphQL query
  const variables: IGraphqlVariables<IAuthorListInput> = {
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
    data: authorListData,
    isLoading: authorListIsLoading,
    error: authorListError,
  } = useAuthorListQuery(variables)

  // use effect
  useEffect(() => {
    if (authorListError) {
      setNoConnectionError(true)
    }
  }, [authorListError])

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
  const handleEditClick = useCallback((author: IAuthorListItemResult) => {
    setAuthorForAction(author)
    setOpenUpdateDialog(true)
  }, [])

  // Handle delete action
  const handleDeleteClick = useCallback((author: IAuthorListItemResult) => {
    setAuthorForAction(author)
    setDeleteDialogOpen(true)
  }, [])

  // Handle successful deletion
  const handleDeleteSuccess = useCallback(() => {
    // Refetch the authors list
    // The query will automatically refetch if you've set up proper cache invalidation
  }, [])

  // Add this new handler for bulk delete
  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      // For now, just handle the first selected item
      if (selectedIds.length > 0) {
        const authorToDelete = authorListData?.data.find(
          (author) => author._id === selectedIds[0],
        )
        if (authorToDelete) {
          handleDeleteClick(authorToDelete)
        }
      }
    },
    [authorListData?.data, handleDeleteClick],
  )

  // Add this handler for row clicks
  const handleRowClick = useCallback(
    (author: IAuthorListItemResult) => {
      // console.log("Navigating to:", `/blog/author-detail/${author._id}`)
      // navigate(`/blog/author-detail/${author._id}`)
      setAuthorForAction(author)
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
          data: authorListData?.data ?? [],
          columns: authorColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((authorListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: authorListIsLoading,
          onDelete: handleBulkDelete,
          onExport: handleExportClick,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: i18n.t('blog:searchByNamePlaceholder'),
            },
            dateRange: {
              enabled: false,
            },
          },
        },
      })}

      <AuthorDetailDrawer
        // <AuthorDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setAuthorForAction(undefined)
        }}
        authorId={authorForAction?._id}
      />

      <AuthorCreateDrawer
        // <AuthorCreateDialog
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setAuthorForAction(undefined)
        }}
      />

      <AuthorUpdateDrawer
        // <AuthorUpdateDialog
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setAuthorForAction(undefined)
        }}
        authorId={authorForAction?._id}
      />

      <AuthorDeleteDialog
        authorId={authorForAction?._id}
        authorName={authorForAction?.name}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setAuthorForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default AuthorListContainer
