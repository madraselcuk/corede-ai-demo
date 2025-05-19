'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import { useRegisterMutation } from '@/domains/auth/api'
import { IGraphqlVariables } from '@common_package'
import { JSX, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { GetUseEffectErrorResult } from '@/utils/use-effect-error-result-handler'
import { IRegisterInput } from '@corede_package'
import { useRouter } from 'next/navigation'
import { authPaths } from '@/domains/auth/routes/auth.path'
import { z } from 'zod'
import { createEmailSchema } from '@/components/atoms/input-email/email-input.validation'
import { validPassword } from '@/components/atoms/input-password/password-input.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from '@/components/ui/toast'
import { Notification } from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'

export interface SignUpFormInputs
  extends IGraphqlVariables<
    IRegisterInput & {
      passwordAgain: string
      termsAndConditionsIsChecked: boolean
    }
  > { }

export interface SignUpFormContainerUIProps {
  form: ReturnType<typeof useForm<SignUpFormInputs>>
  isLoading: boolean
  handleRegisterSubmit: (
    values: IGraphqlVariables<IRegisterInput>,
  ) => Promise<void>
  registerIsSuccessful: boolean
  navigateToSignIn: () => void
}

export interface SignUpFromContainerProps {
  children: (props: SignUpFormContainerUIProps) => JSX.Element
}

export const SignUpFromContainer = ({ children }: SignUpFromContainerProps) => {
  const router = useRouter()
  const { currentLanguage, t } = useI18n()

  const [registerIsSuccessful, setRegisterIsSuccessful] = useState(false)

  // queries
  const [
    getRegister,
    { data: registerData, isLoading: registerLoading, error: registerError },
  ] = useRegisterMutation()

  const formSchema: z.ZodType<SignUpFormInputs> = z
    .object({
      input: z.object({
        role: z.string(),
        name: z.string().min(1, t('common:requiredNameMessage')),
        surname: z.string(),
        email: createEmailSchema(true),
        password: validPassword(true),
        passwordAgain: z.string(),
        termsAndConditionsIsChecked: z.boolean(),
      }),
    })
    .refine((data) => data.input.password === data.input.passwordAgain, {
      message: t('common:invalidPasswordAgainMessage'),
      path: ['input.passwordAgain'],
    })

  const form = useForm<SignUpFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: undefined,
        surname: undefined,
        email: '',
        password: '',
        passwordAgain: '',
        language: currentLanguage,
        role: 'user',
        termsAndConditionsIsChecked: true, // TODO: implement this
      },
    },
    reValidateMode: 'onChange',
  })

  const submitSignUp = useCallback(
    async (values: IGraphqlVariables<IRegisterInput>) => {
      try {
        await getRegister({
          input: {
            name: values.input?.name,
            surname: values.input?.surname,
            email: values.input?.email ?? '',
            password: values.input?.password ?? '',
            role: values.input?.role ?? '',
          },
        })
      } catch (error) {
        console.error(error, 'submitSignUp.error')
        toast.push(
          <Notification type="danger">{t('common:unknownError')}</Notification>,
        )
      }
    },
    [],
  )

  const navigateToSignIn = useCallback(() => {
    router.push(authPaths.auth.signIn)
  }, [])

  // useEffects
  useEffect(() => {
    if (registerError) {
      console.error(registerError, 'registerError')
      const message =
        GetUseEffectErrorResult(registerError, currentLanguage) ??
        t('auth:signupFailed')
      toast.push(<Notification type="danger">{message}</Notification>)
    }
  }, [registerError, currentLanguage])
  //TODO: t eklenmeli. Çift hata gelmemesi için reset eklenebilir?

  useEffect(() => {
    if (registerData) {
      toast.push(
        <Notification type="success">{t('auth:signupSuccess')}</Notification>,
      )

      setRegisterIsSuccessful(true)
      router.push(authPaths.auth.signUpSuccessful)
    }
  }, [registerData])

  return (
    <>
      {children({
        form,
        handleRegisterSubmit: submitSignUp,
        isLoading: registerLoading,
        registerIsSuccessful: registerIsSuccessful,
        navigateToSignIn,
      })}
    </>
  )
}

export default SignUpFromContainer
