'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { IBlogCategoriesItemResult } from '@corede_package'
import { BlogCategoryFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { blogCategoryColumnDefs } from './blog-category-list.columns'
import { i18n } from '@/localization'
import { useBlogCategoryListQuery } from '@/domains/blog/api'

import BlogCategoryDetailDrawer from '../detail/base/blog-category-detail.drawer'
import BlogCategoryCreateDrawer from '../create/base/blog-category-create.drawer'
import BlogCategoryUpdateDrawer from '../update/base/blog-category-update.drawer'
import { BlogCategoryDeleteDialog } from '@/domains/blog/components/blog-category-delete-dialog/blog-category-delete-dialog'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface BlogCategoryListContainerUIProps {
  handleCreate?: () => void
  dataTableProps: DataTableProps<IBlogCategoriesItemResult, BlogCategoryFilters>
}

export interface BlogCategoryListContainerProps {
  readonly children: (props: BlogCategoryListContainerUIProps) => JSX.Element
}

export const BlogCategoryListContainer = ({
  children,
}: BlogCategoryListContainerProps) => {
  // State management
  const [filters, setFilters] = useState<BlogCategoryFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'blog-category-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'blog-category-list-selected',
    [],
  )

  // Add state for actions
  const [blogCategoryForAction, setBlogCategoryForAction] = useState<
    IBlogCategoriesItemResult | undefined
  >(undefined)
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
    data: blogCategoriesData,
    isLoading: blogCategoriesIsLoading,
    error: blogCategoriesError,
  } = useBlogCategoryListQuery(variables)

  useEffect(() => {
    if (blogCategoriesError) {
      toast.push(
        <Notification title={i18n.t('unknownError')} type="danger">
          Please try again later.
        </Notification>,
      )
    }
  }, [blogCategoriesError])

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
    (blogCategory: IBlogCategoriesItemResult) => {
      setBlogCategoryForAction(blogCategory)
      setOpenUpdateDialog(true)
    },
    [],
  )

  const handleDeleteClick = useCallback(
    (blogCategory: IBlogCategoriesItemResult) => {
      setBlogCategoryForAction(blogCategory)
      setDeleteDialogOpen(true)
    },
    [],
  )

  const handleDeleteSuccess = useCallback(() => {
    // Refetch the Blog categories list
  }, [])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const blogCategoryToDelete = blogCategoriesData?.data.find(
          (blogCategory) => blogCategory._id === selectedIds[0],
        )
        if (blogCategoryToDelete) {
          handleDeleteClick(blogCategoryToDelete)
        }
      }
    },
    [blogCategoriesData?.data, handleDeleteClick],
  )

  const handleRowClick = useCallback(
    (blogCategory: IBlogCategoriesItemResult) => {
      setBlogCategoryForAction(blogCategory)
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
          data: blogCategoriesData?.data ?? [],
          columns: blogCategoryColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((blogCategoriesData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: blogCategoriesIsLoading,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: i18n.t('blog:blogCategorySearchByNamePlaceholder'),
            },
            dateRange: {
              enabled: false,
            },
          },
        },
      })}

      <BlogCategoryDetailDrawer
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setBlogCategoryForAction(undefined)
        }}
        blogCategoryId={blogCategoryForAction?._id}
      />

      <BlogCategoryCreateDrawer
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setBlogCategoryForAction(undefined)
        }}
      />

      <BlogCategoryUpdateDrawer
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setBlogCategoryForAction(undefined)
        }}
        blogCategoryId={blogCategoryForAction?._id}
      />

      <BlogCategoryDeleteDialog
        blogCategoryId={blogCategoryForAction?._id}
        blogCategoryName={blogCategoryForAction?.name}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setBlogCategoryForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default BlogCategoryListContainer
