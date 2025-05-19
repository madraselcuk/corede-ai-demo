'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { BlogFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { blogColumnDefs } from './blog-list.columns'
import { useBlogListQuery } from '@/domains/blog/api'
import { BlogDeleteDialog } from '../../../components/blog-delete-dialog/blog-delete-dialog'
import { BlogDetailDialog } from '../detail'
import { BlogCreateDialog } from '../create'
import { BlogUpdateDialog } from '../update'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { IBlogListItemResult } from '@corede_package'
import { useI18n } from '@/localization/hooks/useI18n'

export interface BlogListContainerUIProps {
  handleCreate?: () => void
  dataTableProps: DataTableProps<IBlogListItemResult, BlogFilters>
  refetch?: () => void
}

export interface BlogListContainerProps {
  readonly children: (props: BlogListContainerUIProps) => JSX.Element
}

export const BlogListContainer = ({ children }: BlogListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [filters, setFilters] = useState<BlogFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'blog-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'blog-list-selected',
    [],
  )

  // Add state for actions
  const [blogForAction, setBlogForAction] = useState<
    IBlogListItemResult | undefined
  >(undefined)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
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
        ...(filters.searchQuery ? { title: filters.searchQuery } : {}),
      },
    },
  }

  // Reset pagination when filters change
  useEffect(() => {
    setPageIndex(0)
  }, [filters])

  // queries
  const {
    data: blogListData,
    isLoading: blogListIsLoading,
    error: blogListError,
  } = useBlogListQuery(variables)

  useEffect(() => {
    if (blogListError) {
      toast.push(
        <Notification title={t('blog:errorLoadingBlogs')} type="danger">
          {t('blog:errorLoadingBlogs')}
        </Notification>,
      )
    }
  }, [blogListError, t])

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
  const handleEditClick = useCallback((blog: IBlogListItemResult) => {
    setBlogForAction(blog)
    setOpenUpdateDialog(true)
  }, [])

  const handleDeleteClick = useCallback((blog: IBlogListItemResult) => {
    setBlogForAction(blog)
    setOpenDeleteDialog(true)
  }, [])

  const handleDeleteSuccess = useCallback(() => {
    // Refetch the Blogs list
  }, [])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const blogToDelete = blogListData?.data.find(
          (blog) => blog._id === selectedIds[0],
        )
        if (blogToDelete) {
          handleDeleteClick(blogToDelete)
        }
      }
    },
    [blogListData?.data, handleDeleteClick],
  )

  const handleRowClick = useCallback((blog: IBlogListItemResult) => {
    setBlogForAction(blog)
    setOpenDetailDialog(true)
  }, [])

  return (
    <>
      {children({
        handleCreate: () => {
          setOpenCreateDialog(true)
        },
        dataTableProps: {
          data: blogListData?.data ?? [],
          columns: blogColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((blogListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: blogListIsLoading,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: t('blog:searchPlaceholder'),
            },
            dateRange: {
              enabled: false,
            },
          },
        },
      })}

      <BlogDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setBlogForAction(undefined)
        }}
        blogId={blogForAction?._id}
      />

      <BlogCreateDialog
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setBlogForAction(undefined)
        }}
      />

      <BlogUpdateDialog
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setBlogForAction(undefined)
        }}
        blogId={blogForAction?._id}
      />

      <BlogDeleteDialog
        blogId={blogForAction?._id}
        blogTitle={blogForAction?.title}
        isOpen={openDeleteDialog}
        onClose={() => {
          setOpenDeleteDialog(false)
          setBlogForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default BlogListContainer
