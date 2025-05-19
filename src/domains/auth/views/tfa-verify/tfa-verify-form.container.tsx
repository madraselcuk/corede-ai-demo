/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import toast from '@/components/ui/toast'
import { authFullPath, authPaths } from '@/domains/auth/routes/auth.path'
import { GetUseEffectErrorResult } from '@/utils/use-effect-error-result-handler'
import { JSX, useCallback, useEffect } from 'react'
import { Notification } from '@/components/ui/Notification'
import { useForm } from 'react-hook-form'
import { useSearchParams, useRouter } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useI18n } from '@/localization/hooks/useI18n'
import { IConfirmTwoFactorLoginInput } from '@/@package/corede'
import { IGraphqlVariables } from '@/@package/common'
import { useConfirmTwoFactorLoginMutation } from '../../api'
import appConfig from '@/configs/app.config'

export interface TFAVerifyFormInputs
  extends IGraphqlVariables<
    Omit<IConfirmTwoFactorLoginInput, 'code' | 'token'> & {
      code: string
    }
  > {}

export interface TFAVerifyFormContainerUIProps {
  // Form
  form: ReturnType<typeof useForm<TFAVerifyFormInputs>>
  handleTFAVerifySubmit: (values: TFAVerifyFormInputs) => Promise<void>
  handleResendCode: () => Promise<void>

  // Loading
  isLoading: boolean

  // Navigation
  navigateToSignIn: () => void
}

export interface TFAVerifyFormContainerProps {
  children: (props: TFAVerifyFormContainerUIProps) => JSX.Element
}

export const TFAVerifyFormContainer = ({
  children,
}: TFAVerifyFormContainerProps) => {
  const router = useRouter()
  const { t, currentLanguage } = useI18n()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') as string

  // queries
  const [
    confirmTwoFactorLogin,
    {
      data: confirmTwoFactorLoginData,
      isLoading: confirmTwoFactorLoginLoading,
      error: confirmTwoFactorLoginError,
    },
  ] = useConfirmTwoFactorLoginMutation()

  const formSchema: z.ZodType<TFAVerifyFormInputs> = z.object({
    input: z.object({
      code: z.string().length(6),
    }),
  })

  const form = useForm<TFAVerifyFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        code: '',
      },
    },
    reValidateMode: 'onChange',
  })

  const submitTFAVerify = useCallback(
    async (values: TFAVerifyFormInputs) => {
      let code = 0
      try {
        code = Number.parseInt(values.input?.code ?? '0')
      } catch (error: any) {
        console.debug(error)
        toast.push(
          <Notification type="danger">{t('auth:invalidCode')}</Notification>,
        )
      }
      await confirmTwoFactorLogin({
        input: {
          code: code,
          token: token,
        },
      })
    },
    [confirmTwoFactorLogin, t],
  )

  const handleResendCode = useCallback(async () => {
    let code = 0
    try {
      code = Number.parseInt(form.getValues().input?.code ?? '0')
    } catch (error: any) {
      console.debug(error)
      toast.push(
        <Notification type="danger">{t('auth:invalidCode')}</Notification>,
      )
    }
    await confirmTwoFactorLogin({
      input: {
        code: code,
        token: token,
      },
    })
  }, [router, form, confirmTwoFactorLogin, t])

  const navigateToSignIn = useCallback(() => {
    router.push(authFullPath(authPaths.auth.signIn))
  }, [router])

  const navigateAfterTFAVerifySuccess = useCallback(() => {
    router.push(appConfig.authenticatedEntryPath)
  }, [router])

  // useEffects
  useEffect(() => {
    if (confirmTwoFactorLoginError) {
      toast.push(
        <Notification type="danger">
          {GetUseEffectErrorResult(
            confirmTwoFactorLoginError,
            currentLanguage,
          ) ?? t('auth:twoFactorLoginFailed')}
        </Notification>,
      )
    }
  }, [confirmTwoFactorLoginError, currentLanguage])
  //TODO: t eklenmeli. Çift hata gelmemesi için reset eklenebilir?

  useEffect(() => {
    if (confirmTwoFactorLoginData) {
      navigateAfterTFAVerifySuccess()
    }
  }, [confirmTwoFactorLoginData])

  return (
    <>
      {children({
        form,
        handleTFAVerifySubmit: submitTFAVerify,
        isLoading: confirmTwoFactorLoginLoading,
        handleResendCode,
        navigateToSignIn,
      })}
    </>
  )
}
