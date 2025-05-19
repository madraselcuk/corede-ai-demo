'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Language } from '@common_package'
import { ISubscriptionFormPublicUpdateInput } from '@corede_package'
import { JSX, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useParams } from 'next/navigation'
import {
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'
import { useSubscriptionFormDetailQuery } from '@/domains/form/api'

export interface SubscriptionFormUpdateFormInputs
  extends IGraphqlVariables<ISubscriptionFormPublicUpdateInput> {}

export interface SubscriptionFormUpdateFormContainerUIProps {
  //form fields
  form: ReturnType<typeof useForm<SubscriptionFormUpdateFormInputs>>
  handleUpdateSubscriptionForm: (
    values: SubscriptionFormUpdateFormInputs,
  ) => Promise<void>

  //state fields
  isLoading: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface SubscriptionFormUpdateFormContainerProps {
  subscriptionFormId?: string
  children: (props: SubscriptionFormUpdateFormContainerUIProps) => JSX.Element
}

export const SubscriptionFormUpdateFormContainer = (
  props: SubscriptionFormUpdateFormContainerProps,
) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentSubscriptionFormId, setSubscriptionFormId] = useState<
    string | undefined
  >(undefined)
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  // Fetch subscriptionForm data
  const {
    data: subscriptionFormDetailData,
    isLoading: subscriptionFormDetailIsLoading,
    error: subscriptionFormDetailError,
  } = useSubscriptionFormDetailQuery(
    {
      input: { _id: currentSubscriptionFormId! },
    },
    {
      skip: !currentSubscriptionFormId,
    },
  )

  // mutations
  const [
    subscriptionFormUpdate,
    { isLoading: subscriptionFormUpdateIsLoading },
  ] = useSubscriptionFormPublicUpdateMutation()

  const formSchema: z.ZodType<SubscriptionFormUpdateFormInputs> = z
    .object({
      input: z.object({
        email: z.string().email(t('common:invalidEmailMessage')).optional(),
        language: z.nativeEnum(Language).optional(),
        newsTopicSubscribed: z.boolean().optional(),
        blogTopicSubscribed: z.boolean().optional(),
        productTopicSubscribed: z.boolean().optional(),
        offerTopicSubscribed: z.boolean().optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(
        data.input,
        subscriptionFormDetailData,
      )
      return inputChanged
    })

  const form = useForm<SubscriptionFormUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        email: subscriptionFormDetailData?.email,
        language: subscriptionFormDetailData?.language,
        newsTopicSubscribed: subscriptionFormDetailData?.newsTopicSubscribed,
        blogTopicSubscribed: subscriptionFormDetailData?.blogTopicSubscribed,
        productTopicSubscribed:
          subscriptionFormDetailData?.productTopicSubscribed,
        offerTopicSubscribed: subscriptionFormDetailData?.offerTopicSubscribed,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateSubscriptionForm = useCallback(
    async (values: SubscriptionFormUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, subscriptionFormDetailData)
        await subscriptionFormUpdate({
          input: values.input,
        })

        toast.push(
          <Notification
            title={t('form:subscriptionFormUpdatedSuccessfully')}
            type="success"
          />,
        )
      } catch (error) {
        console.error(error, 'updateSubscriptionForm.error')
        toast.push(
          <Notification title={t('common:unknownError')} type="danger" />,
        )
      }
    },
    [subscriptionFormDetailData, subscriptionFormUpdate, t],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setSubscriptionFormId(id)
    }
    if (props.subscriptionFormId) {
      setSubscriptionFormId(props.subscriptionFormId)
    }
    if (!id && !props.subscriptionFormId) {
      setNoDataError(true)
    }
  }, [id, props.subscriptionFormId])

  useEffect(() => {
    if (subscriptionFormDetailError) {
      setConnectionError(true)
    }
  }, [subscriptionFormDetailError])

  // Populate form with subscriptionForm data when available
  useEffect(() => {
    if (subscriptionFormDetailData) {
      form.reset({
        input: {
          email: subscriptionFormDetailData.email,
          language: subscriptionFormDetailData.language,
          newsTopicSubscribed: subscriptionFormDetailData.newsTopicSubscribed,
          blogTopicSubscribed: subscriptionFormDetailData.blogTopicSubscribed,
          productTopicSubscribed:
            subscriptionFormDetailData.productTopicSubscribed,
          offerTopicSubscribed: subscriptionFormDetailData.offerTopicSubscribed,
        },
      })
    }
  }, [subscriptionFormDetailData, form])

  return (
    <>
      {props.children({
        form,
        handleUpdateSubscriptionForm: submitUpdateSubscriptionForm,
        isLoading:
          subscriptionFormDetailIsLoading || subscriptionFormUpdateIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default SubscriptionFormUpdateFormContainer
function useSubscriptionFormPublicUpdateMutation(): [any, { isLoading: any }] {
  throw new Error('Function not implemented.')
}

