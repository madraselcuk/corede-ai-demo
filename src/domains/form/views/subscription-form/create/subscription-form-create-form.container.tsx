'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Language } from '@common_package'
import {
  ISubscriptionFormCreateInput,
  SubscriptionFormUserType,
} from '@corede_package'
import { JSX, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'
import { UiType } from '@/@types/common'
import { useSubscriptionFormCreateMutation } from '@/domains/form/api'

export interface SubscriptionFormCreateFormInputs
  extends IGraphqlVariables<ISubscriptionFormCreateInput> {}

export interface SubscriptionFormCreateFormContainerUIProps {
  uiType?: UiType

  //form fields
  form: ReturnType<typeof useForm<SubscriptionFormCreateFormInputs>>
  handleSubscriptionFormCreate: (
    values: SubscriptionFormCreateFormInputs,
  ) => Promise<void>

  //state fields
  isLoading: boolean
}

export interface SubscriptionFormCreateFormContainerProps {
  children: (props: SubscriptionFormCreateFormContainerUIProps) => JSX.Element
}

export const SubscriptionFormCreateFormContainer = ({
  children,
}: SubscriptionFormCreateFormContainerProps) => {
  const { t } = useI18n()

  // mutations
  const [
    createSubscriptionForm,
    {
      data: createSubscriptionFormData,
      isLoading: createSubscriptionFormIsLoading,
      error: createSubscriptionFormError,
    },
  ] = useSubscriptionFormCreateMutation()

  const formSchema: z.ZodType<SubscriptionFormCreateFormInputs> = z.object({
    input: z.object({
      userId: z.string(),
      language: z.nativeEnum(Language),
      userType: z.nativeEnum(SubscriptionFormUserType).optional(),
      page: z.string().optional(),
      newsTopicSubscribed: z.boolean().optional(),
      blogTopicSubscribed: z.boolean().optional(),
      productTopicSubscribed: z.boolean().optional(),
      offerTopicSubscribed: z.boolean().optional(),
    }),
  })

  const form = useForm<SubscriptionFormCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        userId: '',
        language: Language.en,
        userType: undefined,
        page: undefined,
        newsTopicSubscribed: false,
        blogTopicSubscribed: false,
        productTopicSubscribed: false,
        offerTopicSubscribed: false,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitSubscriptionFormCreate = useCallback(
    async (values: SubscriptionFormCreateFormInputs) => {
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

  useEffect(() => {
    if (createSubscriptionFormError) {
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [createSubscriptionFormError, t])

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

export default SubscriptionFormCreateFormContainer
