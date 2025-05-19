'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Language } from '@common_package'
import { ISubscriptionFormPublicCreateInput } from '@corede_package'
import { JSX, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'
import { UiType } from '@/@types/common'
import { useSubscriptionFormCreatePublicMutation } from '@/domains/form/api'

export interface SubscriptionFormCreatePublicFormInputs
  extends IGraphqlVariables<ISubscriptionFormPublicCreateInput> {}

export interface SubscriptionFormCreatePublicFormContainerUIProps {
  uiType?: UiType

  //form fields
  form: ReturnType<typeof useForm<SubscriptionFormCreatePublicFormInputs>>
  handleSubscriptionFormCreate: (
    values: SubscriptionFormCreatePublicFormInputs,
  ) => Promise<void>

  //state fields
  isLoading: boolean
}

export interface SubscriptionFormCreatePublicFormContainerProps {
  children: (
    props: SubscriptionFormCreatePublicFormContainerUIProps,
  ) => JSX.Element
}

export const SubscriptionFormCreatePublicFormContainer = ({
  children,
}: SubscriptionFormCreatePublicFormContainerProps) => {
  const { t, currentLanguage } = useI18n()

  // mutations
  const [
    createSubscriptionForm,
    {
      data: createSubscriptionFormData,
      isLoading: createSubscriptionFormIsLoading,
      error: createSubscriptionFormError,
    },
  ] = useSubscriptionFormCreatePublicMutation()

  const formSchema: z.ZodType<SubscriptionFormCreatePublicFormInputs> =
    z.object({
      input: z.object({
        email: z.string().email(t('common:invalidEmailMessage')),
        language: z.nativeEnum(Language),
        page: z.string().optional(),
      }),
    })

  const form = useForm<SubscriptionFormCreatePublicFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        email: '',
        language: currentLanguage,
        page: '',
      },
    },
    reValidateMode: 'onChange',
  })

  const submitSubscriptionFormCreate = useCallback(
    async (values: SubscriptionFormCreatePublicFormInputs) => {
      try {
        await createSubscriptionForm({
          input: values.input,
        })
      } catch (error) {
        console.error(error, 'createSubscriptionForm.error')

        toast.push(
          <Notification title={t('common:unknownError')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [createSubscriptionForm, t],
  )

  useEffect(() => {
    if (createSubscriptionFormData?._id) {
      toast.push(
        <Notification title={t('form:subscriptionFormCreated')} type="success">
          {t('form:subscriptionFormCreated')}
        </Notification>,
      )
    }
  }, [createSubscriptionFormData, t])
  //TODO geçici olarak çift uyarı basmamak için t silindi. 

  useEffect(() => {
    if (createSubscriptionFormError) {
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [createSubscriptionFormError, t])
  //TODO geçici olarak çift uyarı basmamak için t silindi. 

  return (
    <>
      {children({
        form: form,
        handleSubscriptionFormCreate: submitSubscriptionFormCreate,
        isLoading: createSubscriptionFormIsLoading,
      })}
    </>
  )
}

export default SubscriptionFormCreatePublicFormContainer
