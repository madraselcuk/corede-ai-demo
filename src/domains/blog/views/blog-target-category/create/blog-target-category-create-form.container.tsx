'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { ICreateBlogTargetCategoryInput } from '@corede_package'
import { useBlogTargetCategoryCreateMutation } from '@/domains/blog/api'
import { i18n } from '@/localization'
import { JSX, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface BlogTargetCategoryCreateFormInputs
  extends IGraphqlVariables<ICreateBlogTargetCategoryInput> {}

export interface BlogTargetCategoryCreateFormContainerUIProps {
  form: ReturnType<typeof useForm<BlogTargetCategoryCreateFormInputs>>
  handleCreateBlogTargetCategory: (
    values: BlogTargetCategoryCreateFormInputs,
  ) => Promise<void>

  //state fields
  isLoading: boolean
}

export interface BlogTargetCategoryCreateFormContainerProps {
  children: (props: BlogTargetCategoryCreateFormContainerUIProps) => JSX.Element
}

export const BlogTargetCategoryCreateFormContainer = ({
  children,
}: BlogTargetCategoryCreateFormContainerProps) => {
  // mutations
  const [
    createBlogTargetCategory,
    {
      // data: createBlogTargetCategoryData,
      isLoading: createBlogTargetCategoryIsLoading,
      // error: createBlogTargetCategoryError,
    },
  ] = useBlogTargetCategoryCreateMutation()

  const formSchema: z.ZodType<BlogTargetCategoryCreateFormInputs> = z.object({
    input: z.object({
      name: z.string().nonempty(i18n.t('common:invalidFormFieldMessage')),
      icon: z.string().optional(),
      // nameTranslation: z
      //   .object({
      //     en: z.string().optional(),
      //     tr: z.string().optional(),
      //   })
      //   .optional(),
    }),
  })

  const form = useForm<BlogTargetCategoryCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: '',
        icon: '',
        nameTranslation: {},
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitCreateBlogTargetCategory = useCallback(
    async (values: IGraphqlVariables<ICreateBlogTargetCategoryInput>) => {
      try {
        console.log('values: ', values)
        await createBlogTargetCategory({
          input: {
            name: values?.input?.name ?? '',
            icon: values?.input?.icon,
            nameTranslation: {
              en:
                values?.input?.nameTranslation?.en ?? values?.input?.name ?? '',
              tr:
                values?.input?.nameTranslation?.tr ?? values?.input?.name ?? '',
            },
          },
        })
      } catch (error) {
        console.error(error, 'createBlogTargetCategory.error')
        toast.push(
          <Notification title={i18n.t('unknownError')} type="danger">
            Please try again later.
          </Notification>,
        )
      }
    },
    [createBlogTargetCategory],
  )
  return (
    <>
      {children({
        form: form,
        handleCreateBlogTargetCategory: submitCreateBlogTargetCategory,
        isLoading: createBlogTargetCategoryIsLoading,
      })}
    </>
  )
}

export default BlogTargetCategoryCreateFormContainer
