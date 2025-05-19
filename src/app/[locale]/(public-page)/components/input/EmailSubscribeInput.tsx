'use client'

import React from 'react'

import { SubscriptionFormCreatePublicFormContainerUIProps } from '@/domains/form/views/subscription-form/create-public'
import { useI18n } from '@/localization/hooks/useI18n'
import { Form } from '@/components/ui/co/form'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'

import { CoButton } from '@/components/atoms/button/button'
export interface EmailSubscribeInputProps
  extends SubscriptionFormCreatePublicFormContainerUIProps {}
const EmailSubscribeInput: React.FC<EmailSubscribeInputProps> = ({
  form,
  handleSubscriptionFormCreate,
  isLoading,
}) => {
  const { t } = useI18n()

  return (
    <div
      className="flex  w-[580px] relative
      max-md:w-full max-md:max-w-[580px] max-sm:flex-col  overflow-hidden"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubscriptionFormCreate)}
          className="w-full"
        >
          <FormEmailFieldGroupV2
            form={form}
            hookName="input.email"
            labelShow={false}
            // className="flex-1 px-6 py-0 text-base border-none bg-transparent outline-none text-gray-800 dark:text-white dark:text-opacity-80 max-sm:px-4 max-sm:py-2.5 max-sm:text-center relative z-10"
            inputProps={{
              required: true,
              placeholder: t('subscription:emailPlaceholder'),
              className:
                'border border-secondary ring-0 active:border-secondary active:border-2  focus:border-secondary focus:border-2 dark:bg-slate-900 dark:text-white bg-slate-100',
            }}
          />
          <div className="flex justify-end absolute top-2 right-0">
            <CoButton
              key="create-blog-button"
              type="submit"
              disabled={!form.formState.isValid}
              isLoading={isLoading || form.formState.isSubmitting}
              className="h-12 border-0 border-l-2 border-l-secondary rounded-none bg-transparent! text-black dark:text-white hover:bg-secondary/70! 
              rounded-tr-xl rounded-br-xl hover:text-white duration-300 ring-0! after:border-0 focus:ring-0 focus:ring-offset-0"
            >
              {t('common:subscribe')}
            </CoButton>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default EmailSubscribeInput
