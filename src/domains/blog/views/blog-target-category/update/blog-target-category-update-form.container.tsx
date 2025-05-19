'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { IUpdateBlogTargetCategoryInput } from '@corede_package'
import {
  useBlogTargetCategoryUpdateMutation,
  useBlogTargetCategoryDetailQuery,
} from '@/domains/blog/api'
import { i18n } from '@/localization'
import { JSX, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'
import { useParams } from 'next/navigation'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'

export interface BlogTargetCategoryUpdateFormInputs
  extends IGraphqlVariables<IUpdateBlogTargetCategoryInput> {}

export interface BlogTargetCategoryUpdateFormContainerUIProps {
  //form fields
  form: ReturnType<typeof useForm<BlogTargetCategoryUpdateFormInputs>>
  handleUpdateBlogTargetCategory: (
    values: BlogTargetCategoryUpdateFormInputs,
  ) => Promise<void>

  //state fields
  isLoading: boolean
}

export interface BlogTargetCategoryUpdateFormContainerProps {
  blogTargetCategoryId?: string
  children: (props: BlogTargetCategoryUpdateFormContainerUIProps) => JSX.Element
}

export const BlogTargetCategoryUpdateFormContainer = ({
  blogTargetCategoryId,
  children,
}: BlogTargetCategoryUpdateFormContainerProps) => {
  const { id } = useParams<{ id: string }>()
  const [currentBlogTargetCategoryId, setCurrentBlogTargetCategoryId] =
    useState<string | undefined>(undefined)

  // queries
  const {
    data: blogTargetCategoryData,
    isLoading: blogTargetCategoryIsLoading,
  } = useBlogTargetCategoryDetailQuery(
    {
      input: { _id: currentBlogTargetCategoryId! },
    },
    {
      skip: !currentBlogTargetCategoryId,
    },
  )

  // mutations
  const [
    updateBlogTargetCategory,
    { isLoading: updateBlogTargetCategoryIsLoading },
  ] = useBlogTargetCategoryUpdateMutation()

  const formSchema: z.ZodType<BlogTargetCategoryUpdateFormInputs> = z
    .object({
      input: z.object({
        name: z.string().nonempty(i18n.t('common:invalidFormFieldMessage')),
        icon: z.string().optional(),
        nameTranslation: z.any().optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, blogTargetCategoryData)
      return inputChanged
    })

  const form = useForm<BlogTargetCategoryUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: undefined,
        icon: undefined,
        nameTranslation: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateBlogTargetCategory = useCallback(
    async (values: BlogTargetCategoryUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, blogTargetCategoryData)
        await updateBlogTargetCategory({
          filter: {
            _id: currentBlogTargetCategoryId!,
          },
          input: values.input,
        })

        toast.push(
          <Notification
            title={i18n.t('blog:blogTargetCategoryUpdatedSuccessfully')}
            type="success"
          >
            {i18n.t('blog:blogTargetCategoryUpdatedSuccessfully')}
          </Notification>,
        )
      } catch (error) {
        console.error(error, 'updateBlogTargetCategory.error')
        toast.push(
          <Notification title={i18n.t('unknownError')} type="danger">
            {i18n.t('unknownError')}
          </Notification>,
        )
      }
    },
    [
      blogTargetCategoryData,
      updateBlogTargetCategory,
      currentBlogTargetCategoryId,
    ],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentBlogTargetCategoryId(id)
    }
    if (blogTargetCategoryId) {
      setCurrentBlogTargetCategoryId(blogTargetCategoryId)
    }
  }, [id, blogTargetCategoryId])

  // Populate form with Blog Target category data when available
  useEffect(() => {
    if (blogTargetCategoryData) {
      form.reset({
        input: {
          name: blogTargetCategoryData.name,
          icon: blogTargetCategoryData.icon,
          nameTranslation: blogTargetCategoryData.nameTranslation,
        },
      })
    }
  }, [blogTargetCategoryData, form])

  return (
    <>
      {children({
        form,
        handleUpdateBlogTargetCategory: submitUpdateBlogTargetCategory,
        isLoading:
          blogTargetCategoryIsLoading || updateBlogTargetCategoryIsLoading,
      })}
    </>
  )
}

export default BlogTargetCategoryUpdateFormContainer
