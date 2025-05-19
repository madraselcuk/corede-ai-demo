'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import {
  IContactFormUpdateInput,
  ContactFormStatus,
  ContactFormType,
  ContactFormSource,
  IContactFormDetailResult,
} from '@corede_package'
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
import { UiType } from '@/@types/common'
import { useContactFormDetailQuery } from '@/domains/form/api'
import { useContactFormUpdateMutation } from '@/domains/form/api'

export interface ContactFormUpdateFormInputs
  extends IGraphqlVariables<IContactFormUpdateInput> {}

export interface ContactFormUpdateFormContainerUIProps {
  uiType?: UiType

  isLoadingDetail: boolean
  detail?: IContactFormDetailResult

  //form fields
  form: ReturnType<typeof useForm<ContactFormUpdateFormInputs>>
  handleUpdateContactForm: (
    values: ContactFormUpdateFormInputs,
  ) => Promise<void>

  //state fields
  isUpdating: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface ContactFormUpdateFormContainerProps {
  contactFormId?: string
  children: (props: ContactFormUpdateFormContainerUIProps) => JSX.Element
}

export const ContactFormUpdateFormContainer = (
  props: ContactFormUpdateFormContainerProps,
) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentContactFormId, setContactFormId] = useState<string | undefined>(
    undefined,
  )
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  // Fetch contactForm data
  const {
    data: contactFormDetailData,
    isLoading: contactFormDetailIsLoading,
    error: contactFormDetailError,
  } = useContactFormDetailQuery(
    {
      input: { _id: currentContactFormId! },
    },
    {
      skip: !currentContactFormId,
    },
  )

  // mutations
  const [contactFormUpdate, { isLoading: contactFormUpdateIsLoading }] =
    useContactFormUpdateMutation()

  const formSchema: z.ZodType<ContactFormUpdateFormInputs> = z
    .object({
      input: z.object({
        status: z.nativeEnum(ContactFormStatus).optional(),
        escalatedUserId: z.string().optional(),
        responsibleUserId: z.string().optional(),
        type: z.nativeEnum(ContactFormType).optional(),
        source: z.nativeEnum(ContactFormSource).optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, contactFormDetailData)
      return inputChanged
    })

  const form = useForm<ContactFormUpdateFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        status: contactFormDetailData?.status,
        escalatedUserId: contactFormDetailData?.escalatedUser?._id,
        responsibleUserId: contactFormDetailData?.responsibleUser?._id,
        type: contactFormDetailData?.type,
        source: contactFormDetailData?.source,
      },
    },
    reValidateMode: 'onChange',
  })

  const submitUpdateContactForm = useCallback(
    async (values: ContactFormUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, contactFormDetailData)
        await contactFormUpdate({
          filter: {
            _id: currentContactFormId!,
          },
          input: values.input,
        })

        toast.push(
          <Notification
            title={t('form:contactFormUpdatedSuccessfully')}
            type="success"
          />,
        )
      } catch (error) {
        console.error(error, 'updateContactForm.error')
        toast.push(
          <Notification title={t('common:unknownError')} type="danger" />,
        )
      }
    },
    [contactFormDetailData, contactFormUpdate, currentContactFormId, t],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setContactFormId(id)
    }
    if (props.contactFormId) {
      setContactFormId(props.contactFormId)
    }
    if (!id && !props.contactFormId) {
      setNoDataError(true)
    }
  }, [id, props.contactFormId])

  useEffect(() => {
    if (contactFormDetailError) {
      setConnectionError(true)
    }
  }, [contactFormDetailError])

  // Populate form with contactForm data when available
  useEffect(() => {
    if (contactFormDetailData) {
      form.reset({
        input: {
          status: contactFormDetailData.status,
          escalatedUserId: contactFormDetailData.escalatedUser?._id,
          responsibleUserId: contactFormDetailData.responsibleUser?._id,
          type: contactFormDetailData.type,
          source: contactFormDetailData.source,
        },
      })
    }
  }, [contactFormDetailData, form])

  return (
    <>
      {props.children({
        isLoadingDetail: contactFormDetailIsLoading,
        detail: contactFormDetailData,
        form,
        handleUpdateContactForm: submitUpdateContactForm,
        isUpdating: contactFormUpdateIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default ContactFormUpdateFormContainer
