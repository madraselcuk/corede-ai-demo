/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { ContactFormCreateFormContainerUIProps } from '@/domains/form/views/contact-form/create'
import { useI18n } from '@/localization/hooks/useI18n'
import { Form } from '@/components/ui/co/form'
import { CoButton } from '@/components/atoms/button'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { ContactFormSource } from '@/@package/corede/domains/form/contactForm/enums/contact-form-source.enum'
import { ContactFormType } from '@/@package/corede/domains/form/contactForm/enums/contact-form-type.enum'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'
export interface ContactFormProps
  extends ContactFormCreateFormContainerUIProps {}

const ContactForm = ({
  form,
  handleContactFormCreate,
  isLoading,
}: ContactFormProps) => {
  const { t } = useI18n()

  // TODO add form inputs for Type and Source enums. Then remove this useEffect
  useEffect(() => {
    form.setValue('input.type', ContactFormType.contact)
    form.setValue('input.source', ContactFormSource.web)
  }, [])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleContactFormCreate)}
        className="w-full"
      >
        <div className="bg-gray-100/50 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-700/50 relative overflow-hidden">
          {/* Arka plan dekoratif elementler */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            <FormTextFieldGroupV2
              form={form}
              hookName="input.fullName"
              label={t('common:email')}
              className="block text-sm font-medium mb-2  text-gray-800 dark:text-white"
              labelClass="mb-2"
              inputProps={{
                required: true,
                placeholder: t('common:fullName'),
                className:
                  'w-full px-4 py-3  border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200',
              }}
            />

            <FormEmailFieldGroupV2
              form={form}
              hookName="input.email"
              label={t('common:email')}
              className="block text-sm font-medium mb-2 text-gray-800 dark:text-white"
              inputProps={{
                required: true,
                placeholder: t('common:email'),
                className:
                  'w-full px-4 py-3  border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200',
              }}
            />
          </div>

          <div className="mb-2">
            <FormTextFieldGroupV2
              form={form}
              hookName="input.subject"
              label={t('common:subject')}
              className="block text-sm font-medium mb-2 text-gray-800 dark:text-white"
              inputProps={{
                required: true,
                placeholder: t('common:subject'),
                className:
                  'w-full px-4 py-3  border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200',
              }}
            />
          </div>

          <div className="mt-4">
            <FormTextFieldGroupV2
              form={form}
              hookName="input.message"
              label={t('common:message')}
              className="block text-sm font-medium mb-2 text-gray-800 dark:text-white"
              inputProps={{
                textArea: true,
                rows: 5,
                required: true,
                placeholder: t('common:message'),
                className:
                  'w-full px-4 py-3  border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200',
              }}
            />
          </div>

          <div className="mt-4 sm:mt-6 flex justify-end">
            <CoButton
              key="create-blog-button"
              type="submit"
              disabled={!form.formState.isValid}
              isLoading={isLoading || form.formState.isSubmitting}
              //className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {t('form:sendContactForm')}
            </CoButton>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
