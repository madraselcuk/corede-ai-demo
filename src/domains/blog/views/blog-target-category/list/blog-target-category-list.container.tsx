'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { IBlogTargetCategoriesItemResult } from '@corede_package'
import { BlogTargetCategoryFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { blogTargetCategoryColumnDefs } from './blog-target-category-list.columns'
import { i18n } from '@/localization'
import { useBlogTargetCategoryListQuery } from '@/domains/blog/api'
import BlogTargetCategoryDetailDrawer from '../detail/base/blog-target-category-detail.drawer'
import BlogTargetCategoryCreateDrawer from '../create/base/blog-target-category-create.drawer'
import BlogTargetCategoryUpdateDrawer from '../update/base/blog-target-category-update.drawer'
import { BlogTargetCategoryDeleteDialog } from '@/domains/blog/components/blog-target-category-delete-dialog/blog-target-category-delete-dialog'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'

export interface BlogTargetCategoryListContainerUIProps {
  handleCreate?: () => void
  dataTableProps: DataTableProps<
    IBlogTargetCategoriesItemResult,
    BlogTargetCategoryFilters
  >
}

export interface BlogTargetCategoryListContainerProps {
  readonly children: (
    props: BlogTargetCategoryListContainerUIProps,
  ) => JSX.Element
}

export const BlogTargetCategoryListContainer = ({
  children,
}: BlogTargetCategoryListContainerProps) => {
  // State management
  const [filters, setFilters] = useState<BlogTargetCategoryFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'blog-target-category-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'blog-target-category-list-selected',
    [],
  )

  // Add state for actions
  const [blogTargetCategoryForAction, setBlogTargetCategoryForAction] =
    useState<IBlogTargetCategoriesItemResult | undefined>(undefined)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  // Prepare variables for GraphQL query
  const variables = {
    input: {
      pagination: {
        page: pageIndex + 1, // Convert to 1-based index
        pageSize,
        sort: sorting?.at(0)?.id
          ? {
              [sorting?.at(0)?.id ?? '']: sorting?.at(0)?.desc ? -1 : 1,
            }
          : undefined,
      },
      filter: {
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
    data: blogTargetCategoriesData,
    isLoading: blogTargetCategoriesIsLoading,
    error: blogTargetCategoriesError,
  } = useBlogTargetCategoryListQuery(variables)

  useEffect(() => {
    if (blogTargetCategoriesError) {
      toast.push(
        <Notification type="danger">
          Error loading Blog Target categories
        </Notification>,
      )
    }
  }, [blogTargetCategoriesError])

  const handlePaginationChange = useCallback(
    (newPageIndex: number, newPageSize: number) => {
      setPageIndex(newPageIndex)
      setPageSize(newPageSize)
    },
    [],
  )

  const handleClearSelection = useCallback(() => {
    setSelectedRows([])
  }, [setSelectedRows])

  // Add handlers
  const handleEditClick = useCallback(
    (blogTargetCategory: IBlogTargetCategoriesItemResult) => {
      setBlogTargetCategoryForAction(blogTargetCategory)
      setOpenUpdateDialog(true)
    },
    [],
  )

  const handleDeleteClick = useCallback(
    (blogTargetCategory: IBlogTargetCategoriesItemResult) => {
      setBlogTargetCategoryForAction(blogTargetCategory)
      setDeleteDialogOpen(true)
    },
    [],
  )

  const handleDeleteSuccess = useCallback(() => {
    // Refetch the Blog Target categories list
  }, [])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const blogTargetCategoryToDelete = blogTargetCategoriesData?.data.find(
          (blogTargetCategory) => blogTargetCategory._id === selectedIds[0],
        )
        if (blogTargetCategoryToDelete) {
          handleDeleteClick(blogTargetCategoryToDelete)
        }
      }
    },
    [blogTargetCategoriesData?.data, handleDeleteClick],
  )

  const handleRowClick = useCallback(
    (blogTargetCategory: IBlogTargetCategoriesItemResult) => {
      setBlogTargetCategoryForAction(blogTargetCategory)
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
        dataTableProps: {
          data: blogTargetCategoriesData?.data ?? [],
          columns: blogTargetCategoryColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil(
            (blogTargetCategoriesData?.count ?? 0) / pageSize,
          ),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: blogTargetCategoriesIsLoading,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: i18n.t(
                'blog:blogTargetCategorySearchByNamePlaceholder',
              ),
            },
            dateRange: {
              enabled: false,
            },
          },
        },
      })}

      <BlogTargetCategoryDetailDrawer
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setBlogTargetCategoryForAction(undefined)
        }}
        blogTargetCategoryId={blogTargetCategoryForAction?._id}
      />

      <BlogTargetCategoryCreateDrawer
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setBlogTargetCategoryForAction(undefined)
        }}
      />

      <BlogTargetCategoryUpdateDrawer
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setBlogTargetCategoryForAction(undefined)
        }}
        blogTargetCategoryId={blogTargetCategoryForAction?._id}
      />

      <BlogTargetCategoryDeleteDialog
        blogTargetCategoryId={blogTargetCategoryForAction?._id}
        blogTargetCategoryName={blogTargetCategoryForAction?.name}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setBlogTargetCategoryForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default BlogTargetCategoryListContainer
