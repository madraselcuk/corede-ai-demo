'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Language } from '@common_package'
import {
  IUpdateWebinarInput,
  WebinarStatus,
  WebinarType,
} from '@corede_package'
import {
  useWebinarUpdateMutation,
  useWebinarDetailQuery,
} from '@/domains/webinar/api'
import { useCallback, useEffect, useState, JSX } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useParams } from 'next/navigation'
import {
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'

export interface WebinarUpdateFormInputs
  extends IGraphqlVariables<IUpdateWebinarInput> {}

export interface WebinarUpdateFormContainerUIProps {
  //form fields
  form: ReturnType<typeof useForm<WebinarUpdateFormInputs>>
  handleUpdateWebinar: (values: WebinarUpdateFormInputs) => Promise<void>

  //state fields
  isLoading: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface WebinarUpdateFormContainerProps {
  webinarId?: string
  children: (props: WebinarUpdateFormContainerUIProps) => JSX.Element
}

export const WebinarUpdateFormContainer = (
  props: WebinarUpdateFormContainerProps,
) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()
  const [webinarId, setWebinarId] = useState<string | undefined>(undefined)
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  // Fetch webinar data
  const {
    data: webinarData,
    isLoading: webinarIsLoading,
    error: webinarDetailError,
  } = useWebinarDetailQuery(
    {
      input: { _id: webinarId! },
    },
    {
      skip: !webinarId,
    },
  )

  // mutations
  const [updateWebinar, { isLoading: updateWebinarIsLoading }] =
    useWebinarUpdateMutation()

  const formSchema = z
    .object({
      input: z.object({
        status: z.nativeEnum(WebinarStatus).optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        content: z.string().optional(),
        language: z.nativeEnum(Language).optional(),
        type: z.nativeEnum(WebinarType).optional(),
        quota: z
          .union([z.string(), z.number()])
          .optional()
          .transform((val) => (typeof val === 'string' ? Number(val) : val))
          .refine((val) => val === undefined || !isNaN(val as number), {
            message: 'Quota must be a valid number',
          }),
        lastApplicationDate: z.date().optional(),
        startDate: z.date().optional(),
        duration: z
          .union([z.string(), z.number()])
          .optional()
          .transform((val) => (typeof val === 'string' ? Number(val) : val))
          .refine((val) => val === undefined || !isNaN(val as number), {
            message: 'Duration must be a valid number',
          }),
        participationLink: z.string().optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, webinarData)
      return inputChanged
    })

  const form = useForm<WebinarUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        status: undefined,
        title: undefined,
        description: undefined,
        content: undefined,
        language: undefined,
        type: undefined,
        quota: undefined,
        lastApplicationDate: undefined,
        startDate: undefined,
        duration: undefined,
        participationLink: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateWebinar = useCallback(
    async (values: WebinarUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, webinarData)
        await updateWebinar({
          filter: {
            _id: webinarId!,
          },
          input: values.input,
        })

        toast.push(
          <Notification title={t('common:success')} type="success">
            {t('webinar:webinarUpdatedSuccessfully')}
          </Notification>,
        )
      } catch (error) {
        console.error(error, 'updateWebinar.error')
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [webinarData, updateWebinar, webinarId, t],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setWebinarId(id)
    }
    if (props.webinarId) {
      setWebinarId(props.webinarId)
    }
    if (!id && !props.webinarId) {
      setNoDataError(true)
    }
  }, [id, props.webinarId])

  useEffect(() => {
    if (webinarDetailError) {
      setConnectionError(true)
      toast.push(
        <Notification title={t('common:error')} type="danger">
          {t('webinar:errorLoadingWebinarDetails')}
        </Notification>,
      )
    }
  }, [webinarDetailError, t])

  // Populate form with webinar data when available
  useEffect(() => {
    if (webinarData) {
      form.reset({
        input: {
          status: webinarData.status,
          title: webinarData.title,
          description: webinarData.description,
          content: webinarData.content,
          language: webinarData.language,
          type: webinarData.type,
          quota: webinarData.quota,
          lastApplicationDate: webinarData.lastApplicationDate,
          startDate: webinarData.startDate,
          duration: webinarData.duration,
          participationLink: webinarData.participationLink,
        },
      })
    }
  }, [webinarData, form])

  return (
    <>
      {props.children({
        form,
        handleUpdateWebinar: submitUpdateWebinar,
        isLoading: webinarIsLoading || updateWebinarIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default WebinarUpdateFormContainer
