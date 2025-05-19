'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { IAuthorUpdateInput } from '@corede_package'
import {
  useAuthorUpdateMutation,
  useAuthorDetailQuery,
} from '@/domains/blog/api'
import { i18n } from '@/localization'
import { JSX, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useParams } from 'next/navigation'
import {
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface AuthorUpdateFormInputs
  extends IGraphqlVariables<IAuthorUpdateInput> {}

export interface AuthorUpdateFormContainerUIProps {
  //form fields
  form: ReturnType<typeof useForm<AuthorUpdateFormInputs>>
  handleUpdateAuthor: (values: AuthorUpdateFormInputs) => Promise<void>

  //state fields
  isLoading: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface AuthorUpdateFormContainerProps {
  authorId?: string
  children: (props: AuthorUpdateFormContainerUIProps) => JSX.Element
}

export const AuthorUpdateFormContainer = (
  props: AuthorUpdateFormContainerProps,
) => {
  const { id } = useParams<{ id: string }>()

  const [currentAuthorId, setAuthorId] = useState<string | undefined>(undefined)
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  // Fetch author data
  const {
    data: authorDetailData,
    isLoading: authorDetailIsLoading,
    error: authorDetailError,
  } = useAuthorDetailQuery(
    {
      input: { _id: currentAuthorId! },
    },
    {
      skip: !currentAuthorId,
    },
  )

  // mutations
  const [authorUpdate, { isLoading: authorUpdateIsLoading }] =
    useAuthorUpdateMutation()

  const formSchema: z.ZodType<AuthorUpdateFormInputs> = z
    .object({
      input: z.object({
        name: z.string().optional(),
        bio: z.string().optional(),
        facebook: z.string().optional(),
        instagram: z.string().optional(),
        linkedIn: z.string().optional(),
        x: z.string().optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, authorDetailData)
      return inputChanged
    })

  const form = useForm<AuthorUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: authorDetailData?.name,
        bio: authorDetailData?.bio,
        facebook: authorDetailData?.facebook,
        instagram: authorDetailData?.instagram,
        linkedIn: authorDetailData?.linkedIn,
        x: authorDetailData?.x,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateAuthor = useCallback(
    async (values: AuthorUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, authorDetailData)
        await authorUpdate({
          filter: {
            _id: currentAuthorId!,
          },
          input: values.input,
        })

        toast.push(
          <Notification
            title={i18n.t('blog:authorUpdatedSuccessfully')}
            type="success"
          />,
        )
      } catch (error) {
        console.error(error, 'updateAuthor.error')
        toast.push(
          <Notification title={i18n.t('unknownError')} type="danger" />,
        )
      }
    },
    [authorDetailData, authorUpdate, currentAuthorId],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setAuthorId(id)
    }
    if (props.authorId) {
      setAuthorId(props.authorId)
    }
    if (!id && !props.authorId) {
      setNoDataError(true)
    }
  }, [id, props.authorId])

  useEffect(() => {
    if (authorDetailError) {
      setConnectionError(true)
    }
  }, [authorDetailError])

  // Populate form with author data when available
  useEffect(() => {
    if (authorDetailData) {
      form.reset({
        input: {
          name: authorDetailData.name,
          bio: authorDetailData.bio,
          facebook: authorDetailData.facebook,
          instagram: authorDetailData.instagram,
          linkedIn: authorDetailData.linkedIn,
          x: authorDetailData.x,
        },
      })
    }
  }, [authorDetailData, form])

  return (
    <>
      {props.children({
        form,
        handleUpdateAuthor: submitUpdateAuthor,
        isLoading: authorDetailIsLoading || authorUpdateIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default AuthorUpdateFormContainer
