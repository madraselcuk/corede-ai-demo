'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import {
  IBlogCategoriesItemPublicResult,
  IBlogCategoriesPublicResult,
} from '@corede_package'
import { useI18n } from '@/localization/hooks/useI18n'
import { useBlogCategoryListPublicQuery } from '@/domains/blog/api'

export interface BlogCategoryListPublicContainerUIProps {
  blogCategoryListResult: IBlogCategoriesPublicResult
  blogCategoryListIsLoading: boolean

  pageCount: number
  pageSize: number
  pageIndex: number
  onPaginationChange: (pageIndex: number, pageSize: number) => void
  onBlogComponentClick?: (row: IBlogCategoriesItemPublicResult) => void

  openDetailDialog: boolean
  onOpenDetailDialog: (open: boolean) => void
  onCloseDetailDialog: () => void
  blogId: string
}

export interface BlogCategoryListPublicContainerProps {
  readonly children: (
    props: BlogCategoryListPublicContainerUIProps,
  ) => JSX.Element | undefined
}

export const BlogCategoryListPublicContainer = ({
  children,
}: BlogCategoryListPublicContainerProps) => {
  const { t } = useI18n()

  // State management
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(4)

  // Add state for actions
  const [blogForAction, setBlogForAction] = useState<
    IBlogCategoriesItemPublicResult | undefined
  >(undefined)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)

  // queries
  const {
    data: blogCategoryListData,
    isLoading: blogCategoryListIsLoading,
    error: blogCategoryListError,
  } = useBlogCategoryListPublicQuery({
    input: {
      pagination: {
        page: pageIndex + 1,
        pageSize: pageSize,
      },
    },
  })

  useEffect(() => {
    if (blogCategoryListError) {
      toast.push(
        <Notification title={t('blog:errorLoadingBlogs')} type="danger">
          {t('blog:errorLoadingBlogs')}
        </Notification>,
      )
    }
  }, [blogCategoryListError, t])

  const handlePaginationChange = useCallback(
    (pageIndex: number, pageSize: number) => {
      setPageIndex(pageIndex)
      setPageSize(pageSize)
    },
    [],
  )

  // Add handlers

  const handleBlogComponentClick = useCallback(
    (blog: IBlogCategoriesItemPublicResult) => {
      setBlogForAction(blog)
      setOpenDetailDialog(true)
    },
    [],
  )

  return (
    <>
      {children({
        blogCategoryListResult: blogCategoryListData ?? {
          data: [],
          count: 0,
        },
        blogCategoryListIsLoading: blogCategoryListIsLoading,
        pageCount: Math.ceil((blogCategoryListData?.count ?? 0) / pageSize),
        pageSize: pageSize,
        pageIndex: pageIndex,
        onPaginationChange: handlePaginationChange,
        onBlogComponentClick: handleBlogComponentClick,
        openDetailDialog: openDetailDialog,
        onOpenDetailDialog: setOpenDetailDialog,
        onCloseDetailDialog: () => setOpenDetailDialog(false),
        blogId: blogForAction?._id ?? '',
      })}
    </>
  )
}

export default BlogCategoryListPublicContainer
