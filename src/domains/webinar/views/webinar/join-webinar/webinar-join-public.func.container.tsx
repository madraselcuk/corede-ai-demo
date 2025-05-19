'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Language } from '@common_package'
import {
  IJoinWebinarFilterInput,
  IJoinWebinarInput,
  IJoinWebinarResult,
} from '@corede_package'
import { JSX, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'
import { UiType } from '@/@types/common'
import { useWebinarJoinPublicMutation } from '@/domains/webinar/api'

export interface WebinarJoinPublicInputs
  extends IGraphqlVariables<IJoinWebinarInput, IJoinWebinarFilterInput> {}

export interface WebinarJoinPublicContainerUIProps {
  uiType?: UiType

  //form fields
  form: ReturnType<typeof useForm<WebinarJoinPublicInputs>>
  handleWebinarJoin: (values: WebinarJoinPublicInputs) => Promise<void>

  //state fields
  webinarJoinResult?: IJoinWebinarResult
  isLoading: boolean
}

export interface WebinarJoinPublicContainerProps {
  children: (props: WebinarJoinPublicContainerUIProps) => JSX.Element
}

export const WebinarJoinFormContainer = ({
  children,
}: WebinarJoinPublicContainerProps) => {
  const { t, currentLanguage } = useI18n()

  // mutations
  const [
    webinarJoinPublic,
    {
      data: webinarJoinPublicData,
      isLoading: webinarJoinPublicIsLoading,
      error: webinarJoinPublicError,
    },
  ] = useWebinarJoinPublicMutation()

  const formSchema: z.ZodType<WebinarJoinPublicInputs> = z.object({
    input: z.object({
      email: z.string().email(t('common:invalidEmailMessage')),
      language: z.nativeEnum(Language),
      page: z.string().optional(),
    }),
  })

  const form = useForm<WebinarJoinPublicInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: '',
        surname: '',
        country: '',
        city: '',
        company: '',
        email: '',
        joined: false,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitWebinarJoin = useCallback(
    async (values: WebinarJoinPublicInputs) => {
      try {
        await webinarJoinPublic({
          filter: {
            language: currentLanguage,
          },
          input: values.input,
        })
      } catch (error) {
        console.error(error, 'webinarJoinPublic')

        toast.push(
          <Notification title={t('common:unknownError')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [webinarJoinPublic, currentLanguage, t],
  )

  useEffect(() => {
    if (webinarJoinPublicData) {
      toast.push(
        <Notification
          title={t('webinar:webinarJoinPublicSuccess')}
          type="success"
        >
          {t('webinar:webinarJoinPublicSuccess')}
        </Notification>,
      )
    }
  }, [webinarJoinPublicData, t])

  useEffect(() => {
    if (webinarJoinPublicError) {
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [webinarJoinPublicError, t])

  return (
    <>
      {children({
        form: form,
        handleWebinarJoin: submitWebinarJoin,
        isLoading: webinarJoinPublicIsLoading,
        webinarJoinResult: webinarJoinPublicData,
      })}
    </>
  )
}

export default WebinarJoinFormContainer
