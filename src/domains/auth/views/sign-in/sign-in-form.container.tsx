/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import appConfig from '@/configs/app.config'
import toast from '@/components/ui/toast'
import { authFullPath, authPaths } from '@/domains/auth/routes/auth.path'
import { GetUseEffectErrorResult } from '@/utils/use-effect-error-result-handler'
import { JSX, useCallback, useEffect } from 'react'
import { Notification } from '@/components/ui/Notification'
import { useAuth } from '@/auth/session'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { createEmailSchema } from '@/components/atoms/input-email/email-input.validation'
import { validPassword as createPasswordSchema } from '@/components/atoms/input-password/password-input.validation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  IGraphqlVariables,
  ILoginInput,
  registrationConfirmationIsRequiredError,
} from '@common_package'
import { useLoginMutation } from '@/domains/auth/api'
import { useI18n } from '@/localization/hooks/useI18n'
import { pathWithParams } from '@/utils/routes.utils'

export interface SignInFormInputs extends IGraphqlVariables<ILoginInput> {}

export interface SignInFormContainerUIProps {
  // Form
  form: ReturnType<typeof useForm<SignInFormInputs>>
  handleSignInSubmit: (values: IGraphqlVariables<ILoginInput>) => Promise<void>

  // Loading
  isLoading: boolean

  // Navigation
  navigateToSignUp: () => void
  navigateToForgotPassword: () => void
  navigateToResendConfirmation: () => void
}

export interface SignInFromContainerProps {
  children: (props: SignInFormContainerUIProps) => JSX.Element
}

export const SignInFromContainer = ({ children }: SignInFromContainerProps) => {
  const router = useRouter()
  const { t, currentLanguage } = useI18n()
  const { handleSignIn } = useAuth()

  // queries
  const [login, { isLoading: loginLoading, error: loginError }] =
    useLoginMutation()

  const formSchema: z.ZodType<SignInFormInputs> = z.object({
    input: z.object({
      email: createEmailSchema(true),
      password: createPasswordSchema(true),
    }),
  })

  const form = useForm<SignInFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        email: '',
        password: '',
      },
    },
    reValidateMode: 'onChange',
  })

  const submitSignIn = useCallback(
    async (values: IGraphqlVariables<ILoginInput>) => {
      try {
        const result = await login({
          input: {
            email: values.input?.email ?? '',
            password: values.input?.password ?? '',
          },
        })

        if (!result?.data || result?.error) {
          // toast.push(
          //   <Notification type="danger">{t('auth:loginFailed')}</Notification>,
          // )
          return
        }

        const loginData = result?.data

        toast.push(
          <Notification type="success">{t('auth:loginSuccess')}</Notification>,
        )

        // Format the login data for handleSignIn
        if (loginData?.accessToken && loginData?.user) {
          console.log('handleSignIn')
          handleSignIn(
            {
              accessToken: loginData.accessToken,
              refreshToken: loginData.refreshToken,
            },
            {
              userId: loginData.user._id,
              email: loginData.user.email,
              name: loginData.user.name,
              surname: loginData.user.surname,
              profileImage: loginData.user.profileImage?.thumbnailPublicUrl,
              type: loginData.user.type,
              organization: loginData.user.organization?.name,
            },
          )
        }

        // Navigate to dashboard
        console.log('navigateToDashboard')
        router.push(appConfig.authenticatedEntryPath)
      } catch (error) {
        console.debug(error)
        toast.push(
          <Notification type="danger">{t('common:unknownError')}</Notification>,
        )
      }
    },
    [login, t],
  )

  const navigateToSignUp = useCallback(() => {
    router.push(authFullPath(authPaths.auth.signUp))
  }, [router])

  const navigateToForgotPassword = useCallback(() => {
    router.push(authFullPath(authPaths.auth.requestResetPassword))
  }, [router])

  const navigateToResendConfirmationRequired = useCallback(() => {
    const email = form.getValues('input.email')
    router.push(
      pathWithParams(
        authFullPath(authPaths.auth.resendVerifyRequired),
        email ? { email } : undefined,
      ),
    )
  }, [router, form])

  // useEffects
  useEffect(() => {
    if (
      (loginError as any)?.error?.name ===
      registrationConfirmationIsRequiredError.name
    ) {
      navigateToResendConfirmationRequired()
    } else {
      if (loginError) {
        toast.push(
          <Notification type="danger">
            {GetUseEffectErrorResult(loginError, currentLanguage) ??
              t('auth:loginFailed')}
          </Notification>,
        )
      }
    }
  }, [loginError, currentLanguage])
  //TODO: t eklenmeli. Çift hata gelmemesi için reset eklenebilir?

  return (
    <>
      {children({
        form,
        handleSignInSubmit: submitSignIn,
        isLoading: loginLoading,
        navigateToSignUp,
        navigateToForgotPassword,
        navigateToResendConfirmation: navigateToResendConfirmationRequired,
      })}
    </>
  )
}

export default SignInFromContainer
