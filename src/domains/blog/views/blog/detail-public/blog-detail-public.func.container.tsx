'use client'

import { IGraphqlVariables } from '@common_package'
import { IBlogDetailPublicResult, IBlogListPublicResult } from '@corede_package'
import {
  useBlogDetailPublicQuery,
  useBlogListPublicQuery,
} from '@/domains/blog/api'
import { JSX, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'

export interface BlogDetailPublicInputs
  extends IGraphqlVariables<IBlogDetailPublicResult> {}

export interface BlogDetailPublicContainerUIProps {
  blogDetailResult?: IBlogDetailPublicResult
  blogDetailIsLoading: boolean

  blogListResult?: IBlogListPublicResult
  blogListIsLoading: boolean
}

export interface BlogDetailPublicContainerProps {
  children: (props: BlogDetailPublicContainerUIProps) => JSX.Element
  blogId?: string
}

export const BlogDetailPublicContainer = (
  props: BlogDetailPublicContainerProps,
) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentBlogId, setCurrentBlogId] = useState<string | undefined>(
    undefined,
  )

  // queries
  const {
    data: blogDetailData,
    isLoading: blogDetailIsLoading,
    error: blogDetailError,
  } = useBlogDetailPublicQuery(
    {
      input: { _id: currentBlogId! },
    },
    {
      skip: !currentBlogId,
    },
  )

  const {
    refetch: refetchBlogList,
    data: blogListData,
    isLoading: blogListIsLoading,
    error: blogListError,
  } = useBlogListPublicQuery(
    {
      input: {
        filter: {
          categoryIds: blogDetailData?.category?._id
            ? [blogDetailData?.category?._id]
            : [],
        },
        pagination: {
          page: 1,
          pageSize: 10,
        },
      },
    },
    {
      skip: !currentBlogId || !blogDetailData?.category?._id,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentBlogId(id)
    }
    if (props.blogId) {
      setCurrentBlogId(props.blogId)
    }
  }, [id, props.blogId])

  useEffect(() => {
    if (blogDetailError) {
      toast.push(
        <Notification type="danger">
          {t('blog:errorLoadingBlogDetails')}
        </Notification>,
      )
    }
  }, [blogDetailError, t])

  useEffect(() => {
    if (blogListError) {
      toast.push(
        <Notification type="danger">
          {t('blog:errorLoadingBlogList')}
        </Notification>,
      )
    }
  }, [blogListError, t])

  useEffect(() => {
    if (blogDetailData) {
      refetchBlogList()
    }
  }, [refetchBlogList, blogDetailData])

  return (
    <>
      {props.children({
        blogDetailResult: blogDetailData,
        blogDetailIsLoading: blogDetailIsLoading,
        blogListResult: blogListData,
        blogListIsLoading: blogListIsLoading,
      })}
    </>
  )
}

export default BlogDetailPublicContainer
