'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Language } from '@common_package'
import { IBlogDetailResult, IBlogUpdateInput } from '@corede_package'
import {
  useBlogImageAssignMutation,
  useBlogImageCreateMutation,
  useBlogDetailQuery,
  useBlogUpdateMutation,
} from '@/domains/blog/api'
import { JSX, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useParams } from 'next/navigation'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import {
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'
import { useI18n } from '@/localization/hooks/useI18n'

export interface BlogUpdateFormInputs
  extends IGraphqlVariables<IBlogUpdateInput> { }

export interface BlogUpdateFormContainerUIProps {
  isLoadingDetail: boolean
  detail?: IBlogDetailResult

  //form fields
  form: ReturnType<typeof useForm<BlogUpdateFormInputs>>
  handleUpdateBlog: (values: BlogUpdateFormInputs) => Promise<void>

  //state fields
  isUpdating: boolean
  connectionError?: boolean
  noDataError?: boolean

  // for image
  entityId?: string
  imageUrl?: string
  useImageCreateMutation: any
  useImageAssignMutation?: any
  willAssign: boolean
  hasThumbnail: boolean
}

export interface BlogUpdateFormContainerProps {
  blogId?: string
  children: (props: BlogUpdateFormContainerUIProps) => JSX.Element
}

export const BlogUpdateFormContainer = ({
  blogId,
  children,
}: BlogUpdateFormContainerProps) => {
  const { t, currentLanguage } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentBlogId, setCurrentBlogId] = useState<string | undefined>(
    undefined,
  )
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

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

  // mutations

  const [blogUpdate, { isLoading: blogUpdateIsLoading }] =
    useBlogUpdateMutation()

  const formSchema: z.ZodType<BlogUpdateFormInputs> = z
    .object({
      input: z.object({
        title: z
          .string()
          .min(1, t('common:invalidFormFieldMessage'))
          .optional(),
        content: z
          .string()
          .min(1, t('common:invalidFormFieldMessage'))
          .optional(),
        description: z
          .string()
          .min(1, t('common:invalidFormFieldMessage'))
          .optional(),
        readingTime: z.string().optional(),
        tags: z.array(z.string()).optional(),
        references: z.array(z.string()).optional(),
        relatedVideo: z.string().optional(),
        authorId: z
          .string()
          .min(1, t('common:invalidFormFieldMessage'))
          .optional(),
        categoryId: z
          .string()
          .min(1, t('common:invalidFormFieldMessage'))
          .optional(),
        targetCategoryId: z
          .string()
          .min(1, t('common:invalidFormFieldMessage'))
          .optional(),
        language: z.nativeEnum(Language).optional(),
      }),
    })
    .refine((data) => {
      if (!blogDetailData) return true
      return objectIsChanged(data.input, {
        ...blogDetailData,
        authorId: blogDetailData.author?._id,
        categoryId: blogDetailData.category?._id,
        targetCategoryId: blogDetailData.targetCategory?._id,
      })
    })

  const form = useForm<BlogUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        title: blogDetailData?.title ?? '',
        content: blogDetailData?.content ?? '',
        description: blogDetailData?.description ?? '',
        readingTime: blogDetailData?.readingTime ?? '',
        tags: blogDetailData?.tags ?? [],
        references: blogDetailData?.references ?? [],
        relatedVideo: blogDetailData?.relatedVideo ?? '',
        authorId: blogDetailData?.author?._id ?? '',
        categoryId: blogDetailData?.category?._id ?? '',
        targetCategoryId: blogDetailData?.targetCategory?._id ?? '',
        language: blogDetailData?.language ?? currentLanguage,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateBlog = useCallback(
    async (values: BlogUpdateFormInputs) => {
      try {
        console.log(values, 'useCallback.submitUpdateBlog.values')
        removeEmptyAndExistingField(values.input, {
          ...blogDetailData,
          authorId: blogDetailData?.author?._id,
          categoryId: blogDetailData?.category?._id,
          targetCategoryId: blogDetailData?.targetCategory?._id,
        })
        console.log(values, 'useCallback.submitUpdateBlog.values.after')
        const result = await blogUpdate({
          filter: {
            _id: currentBlogId!,
          },
          input: values.input,
        })
        console.log(result, 'useCallback.submitUpdateBlog.result')

        toast.push(
          <Notification title={t('blog:blogUpdateSuccess')} type="success">
            {t('blog:blogUpdateSuccess')}
          </Notification>,
        )
      } catch (error) {
        console.error(error, 'updateBlog.error')
        toast.push(
          <Notification title={t('blog:blogUpdateError')} type="danger">
            {t('blog:tryAgainLater')}
          </Notification>,
        )
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [blogDetailData, blogUpdate, currentBlogId],
  )

  useEffect(() => {
    if (id) {
      setCurrentBlogId(id)
    }
    if (blogId) {
      setCurrentBlogId(blogId)
    }
    if (!id && !blogId) {
      setNoDataError(true)
    }
  }, [id, blogId])

  useEffect(() => {
    if (blogDetailError) {
      setConnectionError(true)
    }
  }, [blogDetailError])

  useEffect(() => {
    if (blogDetailData) {
      console.log(blogDetailData, 'useEffect.form.reset.blogDetailData')
      form.reset({
        input: {
          title: blogDetailData.title,
          content: blogDetailData.content,
          description: blogDetailData.description,
          readingTime: blogDetailData?.readingTime,
          tags: blogDetailData.tags,
          references: blogDetailData.references,
          relatedVideo: blogDetailData.relatedVideo,
          authorId: blogDetailData.author._id,
          categoryId: blogDetailData.category._id,
          targetCategoryId: blogDetailData.targetCategory._id,
          language: blogDetailData.language,
        },
      })
      console.log(form.getValues(), 'useEffect.form.reset.form.getValues')
    }
  }, [blogDetailData, form])

  return (
    <>
      {children({
        isLoadingDetail: blogDetailIsLoading,
        detail: blogDetailData,
        form,
        handleUpdateBlog: submitUpdateBlog,
        isUpdating: blogUpdateIsLoading,
        imageUrl:
          blogDetailData?.image?.thumbnailPublicUrl ??
          blogDetailData?.image?.publicUrl,
        useImageCreateMutation: useBlogImageCreateMutation,
        useImageAssignMutation: useBlogImageAssignMutation,
        willAssign: true,
        hasThumbnail: true,
        entityId: currentBlogId,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default BlogUpdateFormContainer
