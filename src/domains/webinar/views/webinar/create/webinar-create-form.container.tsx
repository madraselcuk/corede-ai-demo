'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Language } from '@common_package'
import {
  ICreateWebinarInput,
  WebinarStatus,
  WebinarType,
} from '@corede_package'
import { useWebinarCreateMutation } from '@/domains/webinar/api'
import { JSX, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'

export interface WebinarCreateFormInputs
  extends IGraphqlVariables<ICreateWebinarInput> {}

export interface WebinarCreateFormContainerUIProps {
  //form fields
  form: ReturnType<typeof useForm<WebinarCreateFormInputs>>
  handleCreateWebinar: (values: WebinarCreateFormInputs) => Promise<void>

  //state fields
  isLoading: boolean
}

export interface CreateWebinarFormContainerProps {
  children: (props: WebinarCreateFormContainerUIProps) => JSX.Element
}

export const WebinarCreateFormContainer = ({
  children,
}: CreateWebinarFormContainerProps) => {
  const { t, currentLanguage } = useI18n()

  // mutations
  const [
    createWebinar,
    {
      // data: createWebinarData,
      isLoading: createWebinarIsLoading,
      // error: createWebinarError,
    },
  ] = useWebinarCreateMutation()

  const formSchema: z.ZodType<WebinarCreateFormInputs> = z.object({
    input: z.object({
      status: z.nativeEnum(WebinarStatus).optional(),
      title: z.string().min(1, t('common:invalidFormFieldMessage')),
      description: z.string().min(1, t('common:invalidFormFieldMessage')),
      content: z.string().min(1, t('common:invalidFormFieldMessage')),
      language: z.nativeEnum(Language),
      type: z.nativeEnum(WebinarType),
      quota: z.number(),
      lastApplicationDate: z.date(),
      startDate: z.date(),
      duration: z.number(),
      participationLink: z.string().nonempty(),
    }),
  })

  const form = useForm<WebinarCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        status: undefined,
        title: '',
        description: '',
        content: '',
        language: currentLanguage,
        type: WebinarType.b2b,
        quota: 0,
        lastApplicationDate: undefined,
        startDate: undefined,
        duration: 0,
        participationLink: '',
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitCreateWebinar = useCallback(
    async (values: WebinarCreateFormInputs) => {
      try {
        await createWebinar(values)

        toast.push(
          <Notification title={t('common:success')} type="success">
            {t('webinar:webinarCreatedSuccessfully')}
          </Notification>,
        )
      } catch (error) {
        console.error(error)
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [createWebinar, t],
  )
  return (
    <>
      {children({
        form: form,
        handleCreateWebinar: submitCreateWebinar,
        isLoading: createWebinarIsLoading,
      })}
    </>
  )
}

export default WebinarCreateFormContainer
