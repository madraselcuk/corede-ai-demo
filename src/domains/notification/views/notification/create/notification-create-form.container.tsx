'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import {
  INotificationCreateInput,
  NotificationType,
  NotificationChannelType,
} from '@corede_package'
import { useNotificationCreateMutation } from '@/domains/notification/api'
import { useCallback, JSX, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import toast from '@/components/ui/toast'
import { UiType } from '@/@types/common'
import Notification from '@/components/ui/Notification'

export interface NotificationCreateFormInputs
  extends IGraphqlVariables<INotificationCreateInput> {}

export interface NotificationCreateFormContainerUIProps {
  uiType?: UiType

  form: ReturnType<typeof useForm<NotificationCreateFormInputs>>
  handleCreateNotification: (
    values: NotificationCreateFormInputs,
  ) => Promise<void>
  isLoading: boolean
}

export interface NotificationCreateFormContainerProps {
  children: (props: NotificationCreateFormContainerUIProps) => JSX.Element
}

export const NotificationCreateFormContainer = ({
  children,
}: NotificationCreateFormContainerProps) => {
  const { t } = useI18n()

  const [
    createNotification,
    { isLoading, data: createNotificationData, error: createNotificationError },
  ] = useNotificationCreateMutation()

  const formSchema = z.object({
    input: z.object({
      name: z.string().min(1, t('common:invalidFormFieldMessage')),
      type: z.nativeEnum(NotificationType),
      domain: z.string().min(1, t('common:invalidFormFieldMessage')),
      channels: z.object({
        email: z
          .object({
            type: z.nativeEnum(NotificationChannelType).optional(),
            subject: z
              .object({
                template: z.string().optional(),
                variables: z.array(z.string().optional()).optional(),
              })
              .optional(),
            content: z
              .object({
                template: z.string().optional(),
                variables: z.array(z.string().optional()).optional(),
              })
              .optional(),
            variables: z.array(z.string().optional()).optional(),
          })
          .optional(),
        sms: z
          .object({
            type: z.nativeEnum(NotificationChannelType).optional(),
            content: z
              .object({
                template: z.string().optional(),
                variables: z.array(z.string().optional()).optional(),
              })
              .optional(),
            variables: z.array(z.string().optional()).optional(),
          })
          .optional(),
        push: z
          .object({
            type: z.nativeEnum(NotificationChannelType).optional(),
            title: z
              .object({
                template: z.string().optional(),
                variables: z.array(z.string().optional()).optional(),
              })
              .optional(),
            content: z
              .object({
                template: z.string().optional(),
                variables: z.array(z.string().optional()).optional(),
              })
              .optional(),
            variables: z.array(z.string().optional()).optional(),
          })
          .optional(),
      }),
    }),
  })

  const form = useForm<NotificationCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: '',
        type: undefined,
        domain: '',
        channels: {
          email: {
            type: undefined,
            subject: {
              template: '',
              variables: [],
            },
            content: {
              template: '',
              variables: [],
            },
            variables: [],
          },
        },
      },
    },
  })

  const handleCreateNotification = useCallback(
    async (values: NotificationCreateFormInputs) => {
      try {
        await createNotification(values)
      } catch (error) {
        console.error(error)
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [createNotification, t],
  )

  useEffect(() => {
    if (createNotificationData?._id) {
      toast.push(
        <Notification
          title={t('notification:notificationCreatedSuccessfully')}
          type="success"
        >
          {t('common:notificationCreatedSuccessfully')}
        </Notification>,
      )
    }
  }, [createNotificationData, t])

  useEffect(() => {
    if (createNotificationError) {
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [createNotificationError, t])

  return children({
    form,
    handleCreateNotification,
    isLoading,
  })
}

export default NotificationCreateFormContainer
