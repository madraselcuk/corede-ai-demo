'use client'

import { Form } from '@/components/ui/Form'
import { ContactFormCreateFormContainerUIProps } from '../contact-form-create-form.container'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormContactFormTypeSelectorGroupV2 } from '@/domains/form/components/contact-form-enum-selectors/form-contact-form-type-selector'
import { FormContactFormSourceSelectorGroupV2 } from '@/domains/form/components/contact-form-enum-selectors/form-contact-form-source-selector'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'

export const ContactFormCreateFormUIBase = ({
  form,
  handleContactFormCreate,
  isLoading,
  uiType = 'container',
}: ContactFormCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      {/* Before Create ContactForm */}
      <div>
        <Form onSubmit={form.handleSubmit(handleContactFormCreate)}>
          {/* Full Name Field */}
          <FormTextFieldGroupV2
            form={form}
            hookName="input.fullName"
            label={t('common:fullName')}
          />

          {/* Email Field */}
          <FormEmailFieldGroupV2
            form={form}
            hookName="input.email"
            label={t('common:email')}
          />

          {/* Subject Field */}
          <FormTextFieldGroupV2
            form={form}
            hookName="input.subject"
            label={t('common:subject')}
          />

          {/* Message Field */}
          <FormTextFieldGroupV2
            form={form}
            hookName="input.message"
            label={t('common:message')}
            inputProps={{
              textArea: true,
            }}
          />

          {/* Type Field */}
          <FormContactFormTypeSelectorGroupV2 form={form} />

          {/* Source Field */}
          <FormContactFormSourceSelectorGroupV2 form={form} />

          {/* Language Field */}
          <FormLanguageSelectorGroupV2 form={form} />

          {/* Submit Button */}
          <ActionFooter
            uiType={uiType}
            backButton={{
              noBack: uiType === 'dialog' || uiType === 'drawer',
            }}
            mainAction={{
              type: 'submit',
              title: t('common:create'),
              disabled: !form.formState.isValid,
              loading: isLoading || form.formState.isSubmitting,
            }}
          />
        </Form>
      </div>
    </>
  )
}

export default ContactFormCreateFormUIBase
