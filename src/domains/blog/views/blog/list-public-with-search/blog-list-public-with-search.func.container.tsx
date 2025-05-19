'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import {
  IBlogListItemPublicResult,
  IBlogListPublicResult,
  IBlogCategoriesPublicResult,
  IBlogCategoriesItemPublicResult,
} from '@corede_package'
import { useI18n } from '@/localization/hooks/useI18n'
import { BlogWithSearchPublicFilters } from './types'
import {
  useBlogListPublicQuery,
  useBlogCategoryListPublicQuery,
} from '@/domains/blog/api'

export interface BlogListWithSearchPublicContainerUIProps {
  blogListResult: IBlogListPublicResult
  blogListIsLoading: boolean

  blogCategoryList: IBlogCategoriesPublicResult
  blogCategoryListIsLoading: boolean
  selectedCategory?: IBlogCategoriesItemPublicResult | undefined
  handleCategorySelect: (category?: IBlogCategoriesItemPublicResult) => void

  filters: BlogWithSearchPublicFilters
  setFilters: (filters: BlogWithSearchPublicFilters) => void

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

export interface BlogListWithSearchPublicContainerProps {
  readonly children: (
    props: BlogListWithSearchPublicContainerUIProps,
  ) => JSX.Element
}

export const BlogListWithSearchPublicContainer = ({
  children,
}: BlogListWithSearchPublicContainerProps) => {
  const { t } = useI18n()

  // State management
  const [filters, setFilters] = useState<BlogWithSearchPublicFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [selectedCategory, setSelectedCategory] = useState<
    IBlogCategoriesItemPublicResult | undefined
  >(undefined)

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
      filter: filters,
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
  } = useBlogListPublicQuery(variables)

  const {
    data: blogListCategoryData,
    isLoading: blogListCategoryIsLoading,
    error: blogListCategoryError,
  } = useBlogCategoryListPublicQuery({})


  useEffect(() => {
    if (blogListError) {
      toast.push(
        <Notification title={t('blog:errorLoadingBlogs')} type="danger">
          {t('blog:errorLoadingBlogs')}
        </Notification>,
      )
    }
  }, [blogListError, t])

  useEffect(() => {
    if (blogListCategoryError) {
      toast.push(
        <Notification
          title={t('blog:errorLoadingBlogCategories')}
          type="danger"
        >
          {t('blog:errorLoadingBlogCategories')}
        </Notification>,
      )
    }
  }, [blogListCategoryError, t])

  const handlePaginationChange = useCallback(
    (pageIndex: number, pageSize: number) => {
      setPageIndex(pageIndex)
      setPageSize(pageSize)
    },
    [],
  )

  // Add handlers
  const handleBlogComponentClick = useCallback(
    (blog?: IBlogListItemPublicResult) => {
      setBlogForAction(blog)
      setOpenDetailDialog(true)
    },
    [],
  )

  const handleCategorySelect = useCallback(
    (category?: IBlogCategoriesItemPublicResult) => {
      setSelectedCategory(category)
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

        blogCategoryList: blogListCategoryData ?? {
          data: [],
          count: 0,
        },
        blogCategoryListIsLoading: blogListCategoryIsLoading,

        selectedCategory: selectedCategory,
        handleCategorySelect: handleCategorySelect,

        filters: filters,
        setFilters: setFilters,
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

export default BlogListWithSearchPublicContainer
