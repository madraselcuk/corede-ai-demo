'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { ICreateBlogCategoryInput } from '@corede_package'
import { useBlogCategoryCreateMutation } from '@/domains/blog/api'
import { i18n } from '@/localization'
import { JSX, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface BlogCategoryCreateFormInputs
  extends IGraphqlVariables<ICreateBlogCategoryInput> {}

export interface BlogCategoryCreateFormContainerUIProps {
  form: ReturnType<typeof useForm<BlogCategoryCreateFormInputs>>
  handleCreateBlogCategory: (
    values: BlogCategoryCreateFormInputs,
  ) => Promise<void>

  //state fields
  isLoading: boolean
}

export interface BlogCategoryCreateFormContainerProps {
  children: (props: BlogCategoryCreateFormContainerUIProps) => JSX.Element
}

export const BlogCategoryCreateFormContainer = ({
  children,
}: BlogCategoryCreateFormContainerProps) => {
  // mutations
  const [
    createBlogCategory,
    {
      // data: createBlogCategoryData,
      isLoading: createBlogCategoryIsLoading,
      // error: createBlogCategoryError,
    },
  ] = useBlogCategoryCreateMutation()

  const formSchema: z.ZodType<BlogCategoryCreateFormInputs> = z.object({
    input: z.object({
      name: z.string().min(1, i18n.t('common:invalidFormFieldMessage')),
      icon: z.string().optional(),
      parentCategoryId: z.string().optional(),
      // TODO: Add nameTranslation validation
      // nameTranslation: z
      //   .object({
      //     en: z.string().optional(),
      //     tr: z.string().optional(),
      //   })
      //   .optional(),
    }),
  })

  const form = useForm<BlogCategoryCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: '',
        icon: '',
        parentCategoryId: '',
        nameTranslation: {},
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitCreateBlogCategory = useCallback(
    async (values: IGraphqlVariables<ICreateBlogCategoryInput>) => {
      try {
        console.log('values: ', values)
        await createBlogCategory({
          input: {
            name: values?.input?.name ?? '',
            icon: values?.input?.icon,
            parentCategoryId: values?.input?.parentCategoryId,
            nameTranslation: {
              en:
                values?.input?.nameTranslation?.en ?? values?.input?.name ?? '',
              tr:
                values?.input?.nameTranslation?.tr ?? values?.input?.name ?? '',
            },
          },
        })
      } catch (error) {
        console.error(error, 'createBlogCategory.error')
        toast.push(
          <Notification title={i18n.t('unknownError')} type="danger">
            Please try again later.
          </Notification>,
        )
      }
    },
    [createBlogCategory],
  )
  return (
    <>
      {children({
        form: form,
        handleCreateBlogCategory: submitCreateBlogCategory,
        isLoading: createBlogCategoryIsLoading,
      })}
    </>
  )
}

export default BlogCategoryCreateFormContainer
