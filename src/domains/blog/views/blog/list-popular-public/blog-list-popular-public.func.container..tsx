'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useBlogListPublicQuery } from '@/domains/blog/api'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import {
  IBlogListItemPublicResult,
  IBlogListPublicResult,
} from '@/@package/corede'
import { useI18n } from '@/localization/hooks/useI18n'

export interface BlogListPopularPublicContainerUIProps {
  blogListResult: IBlogListPublicResult
  blogListIsLoading: boolean

  pageCount: number
  pageSize: number
  pageIndex: number
  onPaginationChange: (pageIndex: number, pageSize: number) => void
  onBlogComponentClick?: (row: IBlogListItemPublicResult) => void

  openDetailDialog: boolean
  onOpenDetailDialog: (open: boolean) => void
  onCloseDetailDialog: () => void
  blogId: string
}

export interface BlogListPopularPublicContainerProps {
  readonly children: (
    props: BlogListPopularPublicContainerUIProps,
  ) => JSX.Element | undefined
}

export const BlogListPopularPublicContainer = ({
  children,
}: BlogListPopularPublicContainerProps) => {
  const { t } = useI18n()

  // State management
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  // Add state for actions
  const [blogForAction, setBlogForAction] = useState<
    IBlogListItemPublicResult | undefined
  >(undefined)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)

  // Prepare variables for GraphQL query
  const variables = {
    input: {
      pagination: {
        page: pageIndex + 1,
        pageSize,
      },
      filter: {
        popular: true,
      },
    },
  }

  // queries
  const {
    data: blogListData,
    isLoading: blogListIsLoading,
    error: blogListError,
  } = useBlogListPublicQuery(variables)

  console.log('blogListData from popular blogs', blogListData)

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

  // Add handlers

  const handleBlogComponentClick = useCallback(
    (blog: IBlogListItemPublicResult) => {
      setBlogForAction(blog)
      setOpenDetailDialog(true)
    },
    [],
  )

  return (
    <>
      {children({
        blogListResult: blogListData ?? {
          data: [],
          count: 0,
        },
        blogListIsLoading: blogListIsLoading,

        pageCount: Math.ceil((blogListData?.count ?? 0) / pageSize),
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

export default BlogListPopularPublicContainer
