'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { IAuthorCreateInput } from '@corede_package'
import { useAuthorCreateMutation } from '@/domains/blog/api'
import { i18n } from '@/localization'
import { JSX, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface AuthorCreateFormInputs
  extends IGraphqlVariables<IAuthorCreateInput> {}

export interface AuthorCreateFormContainerUIProps {
  //form fields
  form: ReturnType<typeof useForm<AuthorCreateFormInputs>>
  handleAuthorCreate: (values: AuthorCreateFormInputs) => Promise<void>

  //state fields
  isLoading: boolean
}

export interface AuthorCreateFormContainerProps {
  children: (props: AuthorCreateFormContainerUIProps) => JSX.Element
}

export const AuthorCreateFormContainer = ({
  children,
}: AuthorCreateFormContainerProps) => {
  // mutations
  const [
    createAuthor,
    {
      data: createAuthorData,
      isLoading: createAuthorIsLoading,
      error: createAuthorError,
    },
  ] = useAuthorCreateMutation()

  const formSchema: z.ZodType<AuthorCreateFormInputs> = z.object({
    input: z.object({
      name: z.string().min(1, i18n.t('common:invalidFormFieldMessage')),
      bio: z.string().optional(),
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      linkedIn: z.string().optional(),
      x: z.string().optional(),
    }),
  })

  const form = useForm<AuthorCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: '',
        bio: undefined,
        facebook: undefined,
        instagram: undefined,
        linkedIn: undefined,
        x: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitAuthorCreate = useCallback(
    async (values: AuthorCreateFormInputs) => {
      try {
        await createAuthor({
          input: values.input,
        })
      } catch (error) {
        console.error(error, 'createAuthor.error')

        toast.push(
          <Notification title={i18n.t('unknownError')} type="danger">
            {i18n.t('unknownError')}
          </Notification>,
        )
      }
    },
    [createAuthor],
  )

  useEffect(() => {
    if (createAuthorData?._id) {
      toast.push(
        <Notification title={i18n.t('blog:authorCreated')} type="success">
          {i18n.t('blog:authorCreated')}
        </Notification>,
      )
    }
  }, [createAuthorData])

  useEffect(() => {
    if (createAuthorError) {
      toast.push(
        <Notification title={i18n.t('unknownError')} type="danger">
          {i18n.t('unknownError')}
        </Notification>,
      )
    }
  }, [createAuthorError])

  return (
    <>
      {children({
        form: form,
        handleAuthorCreate: submitAuthorCreate,
        isLoading: createAuthorIsLoading,
      })}
    </>
  )
}

export default AuthorCreateFormContainer
