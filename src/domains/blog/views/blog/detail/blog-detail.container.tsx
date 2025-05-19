'use client'

import { IGraphqlVariables } from '@common_package'
import { IBlogDetailResult } from '@corede_package'
import { useBlogDetailQuery } from '@/domains/blog/api'
import { JSX, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { blogFullPath, blogPaths } from '@/domains/blog/routes/blog.path'
import { useI18n } from '@/localization/hooks/useI18n'

export interface BlogDetailInputs
  extends IGraphqlVariables<IBlogDetailResult> {}

export interface BlogDetailContainerUIProps {
  blogDetailData?: IBlogDetailResult
  blogDetailIsLoading?: boolean
}

export interface BlogDetailContainerProps {
  children: (props: BlogDetailContainerUIProps) => JSX.Element
  blogId?: string
}

export const BlogDetailContainer = (props: BlogDetailContainerProps) => {
  const { t } = useI18n()
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  const [currentBlogId, setCurrentBlogId] = useState<string | undefined>(
    undefined,
  )

  // queries
  const {
    data: blogDetailData,
    isLoading: blogDetailIsLoading,
    error: blogDetailError,
  } = useBlogDetailQuery(
    {
      input: { _id: currentBlogId! },
    },
    {
      skip: !currentBlogId,
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
    if (!id && !props.blogId) {
      router.push(blogFullPath(blogPaths.blog.list))
    }
  }, [id, props.blogId, router])

  return (
    <>
      {props.children({
        blogDetailData,
        blogDetailIsLoading,
      })}
    </>
  )
}

export default BlogDetailContainer
