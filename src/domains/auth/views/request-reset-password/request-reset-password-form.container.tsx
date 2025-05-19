/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import toast from '@/components/ui/toast'
import { authFullPath, authPaths } from '@/domains/auth/routes/auth.path'
import { GetUseEffectErrorResult } from '@/utils/use-effect-error-result-handler'
import { JSX, useCallback, useEffect, useState } from 'react'
import { Notification } from '@/components/ui/Notification'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { createEmailSchema } from '@/components/atoms/input-email/email-input.validation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, IRequestResetPasswordInput } from '@common_package'
import { useRequestResetPasswordMutation } from '@/domains/auth/api'
import { useI18n } from '@/localization/hooks/useI18n'

export interface RequestResetPasswordFormInputs
  extends IGraphqlVariables<IRequestResetPasswordInput> {}

export interface RequestResetPasswordFormContainerUIProps {
  // Form
  form: ReturnType<typeof useForm<RequestResetPasswordFormInputs>>
  handleRequestResetPasswordSubmit: (
    values: IGraphqlVariables<IRequestResetPasswordInput>,
  ) => Promise<void>
  handleResendCodeSubmit: () => Promise<void>

  // Loading
  isLoading: boolean
  /**
   * @value undefined: before request reset password is called
   * @value true: after request reset password is called successfully
   * @value false: after request reset password request is failed
   */
  forgotPasswordCodeIsSent?: boolean

  // Navigation
  navigateToSignIn: () => void
}

export interface RequestResetPasswordFormContainerProps {
  children: (props: RequestResetPasswordFormContainerUIProps) => JSX.Element
}

export const RequestResetPasswordFormContainer = ({
  children,
}: RequestResetPasswordFormContainerProps) => {
  const router = useRouter()
  const { t, currentLanguage } = useI18n()

  const [
    forgotPasswordCodeIsSentSuccessfully,
    setRequestResetPasswordCodeIsSentSuccessfully,
  ] = useState<boolean | undefined>(undefined)

  // queries
  const [
    requestResetPassword,
    {
      data: requestResetPasswordData,
      isLoading: requestResetPasswordLoading,
      error: requestResetPasswordError,
    },
  ] = useRequestResetPasswordMutation()

  const formSchema: z.ZodType<RequestResetPasswordFormInputs> = z.object({
    input: z.object({
      email: createEmailSchema(true),
    }),
  })

  const form = useForm<RequestResetPasswordFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        email: '',
      },
    },
    reValidateMode: 'onChange',
  })

  const submitRequestResetPassword = useCallback(
    async (values: IGraphqlVariables<IRequestResetPasswordInput>) => {
      try {
        await requestResetPassword({
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
    [requestResetPassword, t],
  )

  const navigateToSignIn = useCallback(() => {
    router.push(authFullPath(authPaths.auth.signIn))
  }, [router])

  const handleResendCodeSubmit = useCallback(async () => {
    await submitRequestResetPassword({
      input: {
        email: form.getValues('input.email'),
      },
    })
  }, [form, submitRequestResetPassword])

  const navigateToRequestResetPasswordSuccessful = useCallback(() => {
    router.push(authFullPath(authPaths.auth.requestResetPasswordSuccessful))
  }, [router])

  // useEffects
  useEffect(() => {
    if (requestResetPasswordError) {
      setRequestResetPasswordCodeIsSentSuccessfully(false)
      toast.push(
        <Notification type="danger">
          {GetUseEffectErrorResult(
            requestResetPasswordError,
            currentLanguage,
          ) ?? t('auth:requestResetPasswordFailed')}
        </Notification>,
      )
    }
  }, [requestResetPasswordError, currentLanguage])
  //TODO: t eklenmeli. Çift hata gelmemesi için reset eklenebilir?

  useEffect(() => {
    if (requestResetPasswordData) {
      setRequestResetPasswordCodeIsSentSuccessfully(true)
      navigateToRequestResetPasswordSuccessful()
    }
  }, [requestResetPasswordData, navigateToRequestResetPasswordSuccessful])

  return (
    <>
      {children({
        form,
        handleRequestResetPasswordSubmit: submitRequestResetPassword,
        handleResendCodeSubmit,
        isLoading: requestResetPasswordLoading,
        navigateToSignIn,
        forgotPasswordCodeIsSent: forgotPasswordCodeIsSentSuccessfully,
      })}
    </>
  )
}
