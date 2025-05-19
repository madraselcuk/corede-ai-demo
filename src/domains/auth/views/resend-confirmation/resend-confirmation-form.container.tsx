/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import toast from '@/components/ui/toast'
import { authFullPath, authPaths } from '@/domains/auth/routes/auth.path'
import { GetUseEffectErrorResult } from '@/utils/use-effect-error-result-handler'
import { JSX, useCallback, useEffect } from 'react'
import { Notification } from '@/components/ui/Notification'
import { useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'
import { createEmailSchema } from '@/components/atoms/input-email/email-input.validation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  IGraphqlVariables,
  IResendRegistrationConfirmationInput,
} from '@common_package'
import { useResendRegistrationConfirmationMutation } from '@/domains/auth/api'
import { useI18n } from '@/localization/hooks/useI18n'

export interface ResendConfirmationFormInputs
  extends IGraphqlVariables<IResendRegistrationConfirmationInput> {}

export interface ResendConfirmationFormContainerUIProps {
  // Form
  form: ReturnType<typeof useForm<ResendConfirmationFormInputs>>
  handleResendConfirmationSubmit: (
    values: IGraphqlVariables<IResendRegistrationConfirmationInput>,
  ) => Promise<void>

  // Loading
  isSending: boolean

  // Navigation
  navigateToSignIn: () => void
}

export interface ResendConfirmationFromContainerProps {
  children: (props: ResendConfirmationFormContainerUIProps) => JSX.Element
}

export const ResendConfirmationFromContainer = ({
  children,
}: ResendConfirmationFromContainerProps) => {
  const router = useRouter()
  const { t, currentLanguage } = useI18n()
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  // queries
  const [
    resendEmail,
    { data: resendResult, isLoading: isSending, error: resendError },
  ] = useResendRegistrationConfirmationMutation()

  const formSchema: z.ZodType<ResendConfirmationFormInputs> = z.object({
    input: z.object({
      email: createEmailSchema(true),
    }),
  })

  const form = useForm<ResendConfirmationFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        email: email ?? '',
      },
    },
    reValidateMode: 'onChange',
  })

  const submitResendConfirmation = useCallback(
    async (values: IGraphqlVariables<IResendRegistrationConfirmationInput>) => {
      try {
        await resendEmail({
          input: {
            email: values.input?.email ?? '',
          },
        })
      } catch (error) {
        console.debug(error)
        toast.push(
          <Notification type="danger">{t('common:unknownError')}</Notification>,
        )
      }
    },
    [resendEmail, t],
  )

  const navigateToSignIn = useCallback(() => {
    router.push(authFullPath(authPaths.auth.signIn))
  }, [router])

  const navigateToResendConfirmationSuccessful = useCallback(() => {
    router.push(authFullPath(authPaths.auth.resendVerifySuccessful))
  }, [router])

  // useEffects
  useEffect(() => {
    if (resendError) {
      toast.push(
        <Notification type="danger">
          {GetUseEffectErrorResult(resendError, currentLanguage) ??
            t('auth:loginFailed')}
        </Notification>,
      )
    }
  }, [resendError, currentLanguage, t])

  useEffect(() => {
    if (resendResult) {
      navigateToResendConfirmationSuccessful()
    }
  }, [resendResult])

  return (
    <>
      {children({
        form,
        handleResendConfirmationSubmit: submitResendConfirmation,
        isSending,
        navigateToSignIn,
      })}
    </>
  )
}

export default ResendConfirmationFromContainer
