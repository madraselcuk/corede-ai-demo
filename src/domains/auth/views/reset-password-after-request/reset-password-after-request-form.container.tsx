/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import toast from '@/components/ui/toast'
import { authFullPath, authPaths } from '@/domains/auth/routes/auth.path'
import { GetUseEffectErrorResult } from '@/utils/use-effect-error-result-handler'
import { JSX, useCallback, useEffect } from 'react'
import { Notification } from '@/components/ui/Notification'
import { useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  IGraphqlVariables,
  IResetPasswordAfterRequestInput,
} from '@common_package'
import { useResetPasswordAfterRequestMutation } from '@/domains/auth/api'
import { useI18n } from '@/localization/hooks/useI18n'
import { validPassword } from '@/components/atoms/input-password/password-input.validation'

export interface ResetPasswordAfterRequestFormInputs
  extends IGraphqlVariables<
    IResetPasswordAfterRequestInput & {
      passwordAgain: string
    }
  > {}

export interface ResetPasswordAfterRequestFormContainerUIProps {
  // Form
  form: ReturnType<typeof useForm<ResetPasswordAfterRequestFormInputs>>
  handleResetPasswordAfterRequestSubmit: (
    values: IGraphqlVariables<IResetPasswordAfterRequestInput>,
  ) => Promise<void>

  // Loading
  isLoading: boolean

  // Navigation
  navigateToSignIn: () => void
}

export interface ResetPasswordAfterRequestFormContainerProps {
  children: (
    props: ResetPasswordAfterRequestFormContainerUIProps,
  ) => JSX.Element
}

export const ResetPasswordAfterRequestFormContainer = ({
  children,
}: ResetPasswordAfterRequestFormContainerProps) => {
  const router = useRouter()
  const { t, currentLanguage } = useI18n()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') as string

  // queries
  const [
    resetPasswordAfterRequest,
    {
      data: resetPasswordAfterRequestData,
      isLoading: resetPasswordAfterRequestLoading,
      error: resetPasswordAfterRequestError,
    },
  ] = useResetPasswordAfterRequestMutation()

  const formSchema: z.ZodType<ResetPasswordAfterRequestFormInputs> = z
    .object({
      input: z.object({
        token: z.string(),
        password: validPassword(true),
        passwordAgain: z.string(),
      }),
    })
    .refine((data) => data.input.password === data.input.passwordAgain, {
      message: t('common:invalidPasswordAgainMessage'),
      path: ['input.passwordAgain'],
    })

  const form = useForm<ResetPasswordAfterRequestFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        token: '',
        password: '',
        passwordAgain: '',
      },
    },
    reValidateMode: 'onChange',
  })

  const submitResetPasswordAfterRequest = useCallback(
    async (values: IGraphqlVariables<IResetPasswordAfterRequestInput>) => {
      try {
        await resetPasswordAfterRequest({
          input: {
            token: token,
            password: values.input?.password ?? '',
          },
        })
      } catch (error) {
        console.debug(error)
        toast.push(
          <Notification type="danger">{t('common:unknownError')}</Notification>,
        )
      }
    },
    [resetPasswordAfterRequest, t],
  )

  const navigateToSignIn = useCallback(() => {
    router.push(authFullPath(authPaths.auth.signIn))
  }, [router])

  const navigateToResetPasswordAfterRequestSuccessful = useCallback(() => {
    router.push(authFullPath(authPaths.auth.completeResetPasswordSuccessful))
  }, [router])

  // useEffects
  useEffect(() => {
    if (resetPasswordAfterRequestError) {
      toast.push(
        <Notification type="danger">
          {GetUseEffectErrorResult(
            resetPasswordAfterRequestError,
            currentLanguage,
          ) ?? t('auth:resetPasswordAfterRequestFailed')}
        </Notification>,
      )
    }
  }, [resetPasswordAfterRequestError, currentLanguage])
  //TODO: t eklenmeli. Çift hata gelmemesi için reset eklenebilir?

  useEffect(() => {
    if (resetPasswordAfterRequestData) {
      navigateToResetPasswordAfterRequestSuccessful()
    }
  }, [
    resetPasswordAfterRequestData,
    navigateToResetPasswordAfterRequestSuccessful,
  ])

  return (
    <>
      {children({
        form,
        handleResetPasswordAfterRequestSubmit: submitResetPasswordAfterRequest,
        isLoading: resetPasswordAfterRequestLoading,
        navigateToSignIn,
      })}
    </>
  )
}
