'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { Form } from '@/components/ui/Form'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { ContactFormUpdateFormContainerUIProps } from '../contact-form-update-form.container'
import Loading from '@/components/shared/Loading'
import { FormContactFormTypeSelectorGroupV2 } from '@/domains/form/components/contact-form-enum-selectors/form-contact-form-type-selector'
import { FormContactFormSourceSelectorGroupV2 } from '@/domains/form/components/contact-form-enum-selectors/form-contact-form-source-selector'
import { FormUserSelectorGroupV3 } from '@/components/molecules/form-user-selector'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormContactFormStatusSelectorGroupV2 } from '@/domains/form/components/contact-form-enum-selectors/form-contact-form-status-selector/form-contact-form-status-selector-v2'
import { useUserListQuery } from '@/domains/user/api'

export const ContactFormUpdateFormUI = ({
  isLoadingDetail,
  form,
  handleUpdateContactForm,
  isUpdating,
  connectionError,
  noDataError,
  uiType = 'container',
}: ContactFormUpdateFormContainerUIProps) => {
  const { t } = useI18n()

  if (isLoadingDetail) {
    return <Loading loading={isLoadingDetail} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('form:noContactFormFound')} />
  }

  return (
    <>
      <div>
        <Form onSubmit={form.handleSubmit(handleUpdateContactForm)}>
          {/* Status Field */}
          <FormContactFormStatusSelectorGroupV2 form={form} />

          {/* Type Field */}
          <FormContactFormTypeSelectorGroupV2 form={form} />

          {/* Source Field */}
          <FormContactFormSourceSelectorGroupV2 form={form} />

          {/* Escalated User ID Field */}
          <FormUserSelectorGroupV3
            form={form}
            hookName="input.escalatedUserId"
            label={t('form:escalatedUser')}
            useUserOptionListQuery={useUserListQuery}
          />

          {/* Responsible User ID Field */}
          <FormUserSelectorGroupV3
            form={form}
            hookName="input.responsibleUserId"
            label={t('form:responsibleUser')}
            useUserOptionListQuery={useUserListQuery}
          />

          {/* Submit Button */}
          <ActionFooter
            uiType={uiType}
            backButton={{
              noBack: uiType === 'dialog' || uiType === 'drawer',
            }}
            mainAction={{
              type: 'submit',
              title: t('common:update'),
              disabled: !form.formState.isValid,
              loading: isUpdating || form.formState.isSubmitting,
            }}
          />
        </Form>
      </div>
    </>
  )
}

export default ContactFormUpdateFormUI
