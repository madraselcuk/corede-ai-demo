'use client'

import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { fileMetadataPlaceholderValues } from '@/domains/file/constants/fileMetadata-placeholder-values'
import { IBlogCreateInput } from '@corede_package'
import { IGraphqlVariables, Language } from '@common_package'
import { IPreprocessedFile } from '@/domains/file/interfaces/preprocessed-file.interface'
import { JSX, useCallback, useEffect, useState } from 'react'
import { removeEmptyData } from '@/utils/zod.utilities'
import { saveImageOwn } from '@/domains/file/helpers/image-save.own.helper'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
/* eslint-disable react-hooks/exhaustive-deps */
import {
  useBlogImageCreateMutation,
  useBlogCreateMutation,
} from '@/domains/blog/api'
import { useI18n } from '@/localization/hooks/useI18n'

export interface BlogCreateFormInputs
  extends IGraphqlVariables<IBlogCreateInput> {}

export interface BlogCreateFormContainerUIProps {
  //form fields
  form: ReturnType<typeof useForm<BlogCreateFormInputs>>
  handleBlogCreate: (values: BlogCreateFormInputs) => Promise<void>
  isLoading: boolean

  // for image
  fileSelected: (preprocessedFile: IPreprocessedFile) => void
  isUploading: boolean
}

export interface BlogCreateFormContainerProps {
  children: (props: BlogCreateFormContainerUIProps) => JSX.Element
}

export const BlogCreateFormContainer = ({
  children,
}: BlogCreateFormContainerProps) => {
  const { t, currentLanguage } = useI18n()

  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [preprocessedImage, setPreprocessedImage] = useState<
    IPreprocessedFile | undefined
  >()

  // mutations
  const [blogImageCreate] = useBlogImageCreateMutation()

  const [
    blogCreate,
    {
      data: blogCreateData,
      isLoading: blogCreateIsLoading,
      error: blogCreateError,
    },
  ] = useBlogCreateMutation()

  const formSchema: z.ZodType<BlogCreateFormInputs> = z.object({
    input: z.object({
      title: z.string().min(1, t('common:invalidFormFieldMessage')),
      content: z.string().min(1, t('common:invalidFormFieldMessage')),
      description: z.string().optional(),
      //image: fileMetadataZodValidation,
      readingTime: z.string().min(1, t('common:invalidFormFieldMessage')),
      tags: z.array(z.string()),
      references: z.array(z.string()).optional(),
      relatedVideo: z.string().optional(),
      authorId: z.string(),
      categoryId: z.string(),
      targetCategoryId: z.string(),
      language: z.nativeEnum(Language),
    }),
  })

  const form = useForm<BlogCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        title: '',
        content: '',
        description: undefined,
        image: undefined,
        readingTime: '',
        tags: [],
        references: [],
        relatedVideo: undefined,
        authorId: undefined,
        categoryId: undefined,
        targetCategoryId: undefined,
        language: currentLanguage,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitBlogCreate = useCallback(
    async (values: IGraphqlVariables<IBlogCreateInput>) => {
      try {
        setLoading(true)

        // if image is selected, upload it
        if (preprocessedImage) {
          setUploading(true)
          try {
            const saveImageResult = await saveImageOwn({
              selectedImageFile: {
                image: preprocessedImage.image,
                imageThumbnail: preprocessedImage.thumbnailImage ?? undefined,
              },
              imageCreateQuery: blogImageCreate,
              willAssign: false,
            })

            // if image is uploaded successfully, set the file metadata to the form values
            // otherwise, remove the image from the form values because we have assigned the placeholder values
            if (saveImageResult?.fileMetadata) {
              values.input!.image = saveImageResult?.fileMetadata
            } else {
              values.input!.image = undefined
            }
          } catch (error) {
            console.error(error, 'saveImage.error')
            toast.push(
              <Notification title="imageUploadError" type="danger">
                {t('file:imageUploadError')}
              </Notification>,
            )
          } finally {
            setUploading(false)
          }
        }

        console.log('values: ', removeEmptyData(values.input))

        // create blog
        await blogCreate({
          input: removeEmptyData(values.input),
        })
      } catch (error) {
        console.error(error, 'createBlog.error')
        toast.push(
          <Notification title="blogCreateError" type="danger">
            {t('blog:blogCreateError')}
          </Notification>,
        )
      } finally {
        setLoading(false)
        setUploading(false)
      }
    },
    [preprocessedImage, blogImageCreate],
  )

  useEffect(() => {
    if (blogCreateData) {
      toast.push(
        <Notification title="createBlogSuccess" type="success">
          {t('blog:createBlogSuccess')}
        </Notification>,
      )
    }
  }, [blogCreateData])

  useEffect(() => {
    if (blogCreateError) {
      toast.push(
        <Notification title="createBlogError" type="danger">
          {t('blog:createBlogError')}
        </Notification>,
      )
    }
  }, [blogCreateError])

  return (
    <>
      {children({
        form,
        handleBlogCreate: submitBlogCreate,
        isLoading: loading || blogCreateIsLoading,
        fileSelected: (preprocessedFile) => {
          setPreprocessedImage(preprocessedFile)
          form.setValue('input.image', fileMetadataPlaceholderValues) // make sure that zod validation passes
        },
        isUploading: uploading,
      })}
    </>
  )
}

export default BlogCreateFormContainer
