'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { INotificationDetailResult, INotificationUpdateInput, NotificationChannelType, NotificationType } from '@corede_package'
import {
  useNotificationUpdateMutation,
  useNotificationDetailQuery,
} from '@/domains/notification/api'
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
import { UiType } from '@/@types/common'

export interface NotificationUpdateFormInputs
  extends IGraphqlVariables<INotificationUpdateInput> { }

export interface NotificationUpdateFormContainerUIProps {
  uiType?: UiType

  isLoadingDetail: boolean
  detail?: INotificationDetailResult

  //form fields
  form: ReturnType<typeof useForm<NotificationUpdateFormInputs>>
  handleUpdateNotification: (values: NotificationUpdateFormInputs) => Promise<void>

  //state fields
  isUpdating: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface NotificationUpdateFormContainerProps {
  notificationId?: string
  children: (props: NotificationUpdateFormContainerUIProps) => JSX.Element
}

export const NotificationUpdateFormContainer = ({
  notificationId,
  children,
}: NotificationUpdateFormContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentNotificationId, setCurrentNotificationId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: notificationData,
    isLoading: notificationIsLoading,
    error: notificationError,
  } = useNotificationDetailQuery(
    {
      input: { _id: currentNotificationId! },
    },
    {
      skip: !currentNotificationId,
    },
  )

  // mutations
  const [updateNotification, { isLoading: updateNotificationIsLoading }] = useNotificationUpdateMutation()

  const formSchema: z.ZodType<NotificationUpdateFormInputs> = z
    .object({
      input: z.object({
        name: z.string().min(1, t('common:invalidFormFieldMessage')).optional(),
        type: z.nativeEnum(NotificationType).optional(),
        domain: z.string().optional(),
        channels: z.object({
          email: z.object({
            type: z.nativeEnum(NotificationChannelType).optional(),
            subject: z.record(z.string().optional()).optional(),
            content: z.record(z.string().optional()).optional(),
            variables: z.array(z.string().optional()).optional(),
          }).optional(),
          sms: z.object({
            type: z.nativeEnum(NotificationChannelType).optional(),
            content: z.record(z.string().optional()).optional(),
            variables: z.array(z.string().optional()).optional(),
          }).optional(),
          push: z.object({
            type: z.nativeEnum(NotificationChannelType).optional(),
            title: z.record(z.string().optional()).optional(),
            content: z.record(z.string().optional()).optional(),
            variables: z.array(z.string().optional()).optional(),
          }).optional(),
        }).optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, notificationData)
      return inputChanged
    })

  const form = useForm<NotificationUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: undefined,
        type: undefined,
        domain: undefined,
        channels: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateNotification = useCallback(
    async (values: NotificationUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, notificationData)
        await updateNotification({
          filter: {
            _id: currentNotificationId!,
          },
          input: values.input,
        })
      } catch (error) {
        console.error(error, 'updateNotification.error')
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [notificationData, updateNotification, currentNotificationId, t],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentNotificationId(id)
    }
    if (notificationId) {
      setCurrentNotificationId(notificationId)
    }
    if (!id && !notificationId) {
      setNoDataError(true)
    }
  }, [id, notificationId])

  useEffect(() => {
    if (notificationError) {
      setConnectionError(true)
    }
  }, [notificationError])

  // Populate form with Notification data when available
  useEffect(() => {
    if (notificationData) {
      form.reset({
        input: {
          name: notificationData.name,
          type: notificationData.type,
          domain: notificationData.domain,
          channels: notificationData.channels,
        },
      })
    }
  }, [notificationData, form])

  return (
    <>
      {children({
        isLoadingDetail: notificationIsLoading,
        detail: notificationData,
        form,
        handleUpdateNotification: submitUpdateNotification,
        isUpdating: updateNotificationIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default NotificationUpdateFormContainer
