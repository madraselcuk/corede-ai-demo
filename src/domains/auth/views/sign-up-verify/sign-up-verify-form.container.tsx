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
import { IConfirmRegistrationInput, IGraphqlVariables } from '@common_package'
import { useConfirmRegistrationMutation } from '@/domains/auth/api'
import { useI18n } from '@/localization/hooks/useI18n'
import { validPassword } from '@/components/atoms/input-password/password-input.validation'

export interface SignUpVerifyFormInputs
  extends IGraphqlVariables<
    Omit<IConfirmRegistrationInput, 'token' | 'resetPasswordToken'> & {
      passwordAgain?: string
    }
  > {}

export interface SignUpVerifyFormContainerUIProps {
  // Form
  form: ReturnType<typeof useForm<SignUpVerifyFormInputs>>
  handleSignUpVerifySubmit: (values: SignUpVerifyFormInputs) => Promise<void>

  // Loading
  isLoading: boolean

  // Navigation
  navigateToSignIn: () => void

  // Tokens
  resetPasswordToken?: string
}

export interface SignUpVerifyFormContainerProps {
  children: (props: SignUpVerifyFormContainerUIProps) => JSX.Element
}

export const SignUpVerifyFormContainer = ({
  children,
}: SignUpVerifyFormContainerProps) => {
  const router = useRouter()
  const { t, currentLanguage } = useI18n()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') as string
  const reset = searchParams.get('reset') as string

  // queries
  const [
    confirmRegistration,
    {
      data: confirmRegistrationData,
      isLoading: confirmRegistrationLoading,
      reset: confirmRegistrationReset,
      error: confirmRegistrationError,
    },
  ] = useConfirmRegistrationMutation()

  const formSchema: z.ZodType<SignUpVerifyFormInputs> = z
    .object({
      input: z.object({
        code: z.string().length(6),
        password: validPassword(true)
          .optional()
          .refine(() => true),
        //   !!reset && !!token, {
        //   message: t('common:requiredPasswordMessage'),
        //   path: ['input.password'],
        // }),
        passwordAgain: z
          .string()
          .optional()
          .refine(() => true),
        //   !!reset && !!token, {
        //   message: t('common:requiredPasswordMessage'),
        //   path: ['input.passwordAgain'],
        // }),
      }),
    })
    .refine(
      // (data) => true,
      () => true,
      // !!reset && !!token && data.input.password === data.input.passwordAgain,
      {
        message: t('common:invalidPasswordAgainMessage'),
        path: ['input.passwordAgain'],
      },
    )

  const form = useForm<SignUpVerifyFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        code: '',
        password: undefined,
        passwordAgain: undefined,
      },
    },
    reValidateMode: 'onChange',
  })

  const submitSignUpVerify = useCallback(
    async (values: SignUpVerifyFormInputs) => {
      try {
        const input: IConfirmRegistrationInput = {
          code: values.input?.code ?? '',
          token: token,
        }
        if (reset) {
          input.resetPasswordToken = reset
          input.password = values.input?.password ?? ''
        }
        await confirmRegistration({
          input,
        })
      } catch (error) {
        console.debug(error)
        toast.push(
          <Notification type="danger">{t('common:unknownError')}</Notification>,
        )
      }
    },
    [confirmRegistration, t],
  )

  const navigateToSignIn = useCallback(() => {
    router.push(authFullPath(authPaths.auth.signIn))
  }, [router])

  const navigateToSignUpVerifySuccessful = useCallback(() => {
    const path = authFullPath(authPaths.auth.signUpVerifySuccessful)
    router.push(path)
  }, [router])

  // useEffects
  useEffect(() => {
    console.log(confirmRegistrationError)
    if (confirmRegistrationError) {
      toast.push(
        <Notification type="danger">
          {GetUseEffectErrorResult({
            error: confirmRegistrationError,
            currentLanguage,
          }) ?? t('auth:confirmRegistrationFailed')}
        </Notification>,
      )
      confirmRegistrationReset()
    }
  }, [confirmRegistrationError, currentLanguage, t, confirmRegistrationReset])

  useEffect(() => {
    if (confirmRegistrationData) {
      navigateToSignUpVerifySuccessful()
    }
  }, [confirmRegistrationData])

  return (
    <>
      {children({
        form,
        handleSignUpVerifySubmit: submitSignUpVerify,
        isLoading: confirmRegistrationLoading,
        navigateToSignIn,
        resetPasswordToken: reset,
      })}
    </>
  )
}
