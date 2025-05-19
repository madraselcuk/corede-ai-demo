'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { IUpdateBlogCategoryInput } from '@corede_package'
import {
  useBlogCategoryUpdateMutation,
  useBlogCategoryDetailQuery,
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
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface BlogCategoryUpdateFormInputs
  extends IGraphqlVariables<IUpdateBlogCategoryInput> {}

export interface BlogCategoryUpdateFormContainerUIProps {
  //form fields
  form: ReturnType<typeof useForm<BlogCategoryUpdateFormInputs>>
  handleUpdateBlogCategory: (
    values: BlogCategoryUpdateFormInputs,
  ) => Promise<void>

  //state fields
  isLoading: boolean
}

export interface BlogCategoryUpdateFormContainerProps {
  blogCategoryId?: string
  children: (props: BlogCategoryUpdateFormContainerUIProps) => JSX.Element
}

export const BlogCategoryUpdateFormContainer = ({
  blogCategoryId,
  children,
}: BlogCategoryUpdateFormContainerProps) => {
  const { id } = useParams<{ id: string }>()

  const [currentBlogCategoryId, setCurrentBlogCategoryId] = useState<
    string | undefined
  >(undefined)

  // queries
  const { data: blogCategoryData, isLoading: blogCategoryIsLoading } =
    useBlogCategoryDetailQuery(
      {
        input: { _id: currentBlogCategoryId! },
      },
      {
        skip: !currentBlogCategoryId,
      },
    )

  // mutations
  const [updateBlogCategory, { isLoading: updateBlogCategoryIsLoading }] =
    useBlogCategoryUpdateMutation()

  const formSchema: z.ZodType<BlogCategoryUpdateFormInputs> = z
    .object({
      input: z.object({
        name: z.string().nonempty(i18n.t('common:invalidFormFieldMessage')),
        icon: z.string().optional(),
        nameTranslation: z.any().optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, blogCategoryData)
      return inputChanged
    })

  const form = useForm<BlogCategoryUpdateFormInputs>({
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

  const submitUpdateBlogCategory = useCallback(
    async (values: BlogCategoryUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, blogCategoryData)
        await updateBlogCategory({
          filter: {
            _id: currentBlogCategoryId!,
          },
          input: values.input,
        })

        toast.push(
          <Notification
            title={i18n.t('blog:blogCategoryUpdatedSuccessfully')}
            type="success"
          >
            {i18n.t('blog:blogCategoryUpdatedSuccessfully')}
          </Notification>,
        )
      } catch (error) {
        console.error(error, 'updateBlogCategory.error')
        toast.push(
          <Notification title={i18n.t('unknownError')} type="danger">
            Please try again later.
          </Notification>,
        )
      }
    },
    [blogCategoryData, updateBlogCategory, currentBlogCategoryId],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentBlogCategoryId(id)
    }
    if (blogCategoryId) {
      setCurrentBlogCategoryId(blogCategoryId)
    }
  }, [id, blogCategoryId])

  // Populate form with Blog category data when available
  useEffect(() => {
    if (blogCategoryData) {
      form.reset({
        input: {
          name: blogCategoryData.name,
          icon: blogCategoryData.icon,
          nameTranslation: blogCategoryData.nameTranslation,
        },
      })
    }
  }, [blogCategoryData, form])

  return (
    <>
      {children({
        form,
        handleUpdateBlogCategory: submitUpdateBlogCategory,
        isLoading: blogCategoryIsLoading || updateBlogCategoryIsLoading,
      })}
    </>
  )
}

export default BlogCategoryUpdateFormContainer
