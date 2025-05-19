'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Language } from '@common_package'
import {
  IContactFormCreateInput,
  ContactFormType,
  ContactFormSource,
} from '@corede_package'
import { JSX, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'
import { UiType } from '@/@types/common'
import { useContactFormCreateMutation } from '@/domains/form/api'

export interface ContactFormCreateFormInputs
  extends IGraphqlVariables<IContactFormCreateInput> { }

export interface ContactFormCreateFormContainerUIProps {
  uiType?: UiType

  //form fields
  form: ReturnType<typeof useForm<ContactFormCreateFormInputs>>
  handleContactFormCreate: (
    values: ContactFormCreateFormInputs,
  ) => Promise<void>

  //state fields
  isLoading: boolean
}

export interface ContactFormCreateFormContainerProps {
  children: (props: ContactFormCreateFormContainerUIProps) => JSX.Element
}

export const ContactFormCreateFormContainer = ({
  children,
}: ContactFormCreateFormContainerProps) => {
  const { t, currentLanguage } = useI18n()

  // mutations
  const [
    createContactForm,
    {
      data: createContactFormData,
      isLoading: createContactFormIsLoading,
      error: createContactFormError,
    },
  ] = useContactFormCreateMutation()

  const formSchema: z.ZodType<ContactFormCreateFormInputs> = z.object({
    input: z.object({
      fullName: z.string().optional(),
      email: z.string().email(t('common:invalidFormFieldMessage')),
      subject: z.string().min(1, t('common:invalidFormFieldMessage')),
      message: z.string().min(1, t('common:invalidFormFieldMessage')),
      type: z.nativeEnum(ContactFormType),
      source: z.nativeEnum(ContactFormSource),
      language: z.nativeEnum(Language),
    }),
  })

  const form = useForm<ContactFormCreateFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        fullName: undefined,
        email: '',
        subject: '',
        message: '',
        type: ContactFormType.contact,
        source: ContactFormSource.web,
        language: currentLanguage,
      },
    },
    reValidateMode: 'onChange',
  })

  const submitContactFormCreate = useCallback(
    async (values: ContactFormCreateFormInputs) => {

      try {
        await createContactForm({
          input: values.input,
        })
      } catch (error) {
        console.error(error, 'createContactForm.error')

        toast.push(
          <Notification title={t('common:unknownError')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [createContactForm, t],
  )

  useEffect(() => {
    if (createContactFormData?._id) {
      toast.push(
        <Notification title={t('form:contactFormCreated')} type="success">
          {t('form:contactFormCreated')}
        </Notification>,
      )
    }
  }, [createContactFormData, t])

  useEffect(() => {
    if (createContactFormError) {
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [createContactFormError, t])

  return (
    <>
      {children({
        form: form,
        handleContactFormCreate: submitContactFormCreate,
        isLoading: createContactFormIsLoading,
      })}
    </>
  )
}

export default ContactFormCreateFormContainer
