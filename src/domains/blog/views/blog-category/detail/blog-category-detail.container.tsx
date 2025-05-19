'use client'

import { IGraphqlVariables } from '@common_package'
import { IBlogCategoryResult } from '@corede_package'
import { useBlogCategoryDetailQuery } from '@/domains/blog/api'
import { JSX, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { i18n } from '@/localization'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'

export interface BlogCategoryDetailInputs
  extends IGraphqlVariables<IBlogCategoryResult> {}

export interface BlogCategoryDetailContainerUIProps {
  blogCategoryDetailData?: IBlogCategoryResult
  blogCategoryDetailIsLoading?: boolean
}

export interface BlogCategoryDetailContainerProps {
  children: (props: BlogCategoryDetailContainerUIProps) => JSX.Element
  blogCategoryId?: string
}

export const BlogCategoryDetailContainer = (
  props: BlogCategoryDetailContainerProps,
) => {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const [currentBlogCategoryId, setCurrentBlogCategoryId] = useState<
    string | undefined
  >(undefined)

  // queries
  const {
    data: blogCategoryDetailData,
    isLoading: blogCategoryDetailIsLoading,
    error: blogCategoryDetailError,
  } = useBlogCategoryDetailQuery(
    {
      input: { _id: currentBlogCategoryId! },
    },
    {
      skip: !currentBlogCategoryId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentBlogCategoryId(id)
    }
    if (props.blogCategoryId) {
      setCurrentBlogCategoryId(props.blogCategoryId)
    }
  }, [id, props.blogCategoryId])

  useEffect(() => {
    if (blogCategoryDetailError) {
      toast.push(
        <Notification title={i18n.t('unknownError')} type="danger">
          Please try again later.
        </Notification>,
      )
    }
  }, [blogCategoryDetailError])

  useEffect(() => {
    if (!id && !props.blogCategoryId) {
      router.push('/blog/blog-category-list')
    }
  }, [id, props.blogCategoryId, router])

  return (
    <>
      {props.children({
        blogCategoryDetailData,
        blogCategoryDetailIsLoading,
      })}
    </>
  )
}

export default BlogCategoryDetailContainer
