'use client'

import { IGraphqlVariables } from '@common_package'
import { IBlogTargetCategoryResult } from '@corede_package'
import { useBlogTargetCategoryDetailQuery } from '@/domains/blog/api'
import { JSX, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { blogFullPath, blogPaths } from '@/domains/blog/routes/blog.path'

export interface BlogTargetCategoryDetailInputs
  extends IGraphqlVariables<IBlogTargetCategoryResult> {}

export interface BlogTargetCategoryDetailContainerUIProps {
  blogTargetCategoryDetailData?: IBlogTargetCategoryResult
  blogTargetCategoryDetailIsLoading?: boolean
}

export interface BlogTargetCategoryDetailContainerProps {
  children: (props: BlogTargetCategoryDetailContainerUIProps) => JSX.Element
  blogTargetCategoryId?: string
}

export const BlogTargetCategoryDetailContainer = (
  props: BlogTargetCategoryDetailContainerProps,
) => {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [currentBlogTargetCategoryId, setCurrentBlogTargetCategoryId] =
    useState<string | undefined>(undefined)

  // queries
  const {
    data: blogTargetCategoryDetailData,
    isLoading: blogTargetCategoryDetailIsLoading,
    error: blogTargetCategoryDetailError,
  } = useBlogTargetCategoryDetailQuery(
    {
      input: { _id: currentBlogTargetCategoryId! },
    },
    {
      skip: !currentBlogTargetCategoryId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentBlogTargetCategoryId(id)
    }
    if (props.blogTargetCategoryId) {
      setCurrentBlogTargetCategoryId(props.blogTargetCategoryId)
    }
  }, [id, props.blogTargetCategoryId])

  useEffect(() => {
    if (blogTargetCategoryDetailError) {
      toast.push(
        <Notification title="blogTargetCategoryDetailError" type="danger">
          blogTargetCategoryDetailError
        </Notification>,
      )
    }
  }, [blogTargetCategoryDetailError])

  useEffect(() => {
    if (!id && !props.blogTargetCategoryId) {
      router.push(blogFullPath(blogPaths.blogCategory.list))
    }
  }, [id, props.blogTargetCategoryId, router])

  return (
    <>
      {props.children({
        blogTargetCategoryDetailData,
        blogTargetCategoryDetailIsLoading,
      })}
    </>
  )
}

export default BlogTargetCategoryDetailContainer
