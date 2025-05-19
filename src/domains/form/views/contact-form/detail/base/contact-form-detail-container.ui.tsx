'use client'

import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { ContactFormDetailContainerUIProps } from '../contact-form-detail.container'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'
import { EnumTranslationHelper } from '@/localization/helpers/enum.translation.helper'
import { TranslationResourceNamespace } from '@/localization/resources'

export const ContactFormDetailContainerUIBase = ({
  contactFormDetailData,
  contactFormDetailIsLoading,
  connectionError,
  noDataError,
}: ContactFormDetailContainerUIProps) => {
  const { t } = useI18n()

  if (contactFormDetailIsLoading) {
    return <div>Loading...</div>
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('form:noContactFormFound')} />
  }

  if (!contactFormDetailData) {
    return null
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        {/* Full Name */}
        <div>
          <b>{t('common:fullName')}: </b>
        </div>
        <div>{contactFormDetailData.fullName || '-'}</div>

        {/* Email */}
        <div>
          <b>{t('common:email')}: </b>
        </div>
        <div>{contactFormDetailData.email}</div>

        {/* Subject */}
        <div>
          <b>{t('common:subject')}: </b>
        </div>
        <div>{contactFormDetailData.subject}</div>

        {/* Message */}
        <div>
          <b>{t('common:message')}: </b>
        </div>
        <div>{contactFormDetailData.message}</div>

        {/* Type */}
        <div>
          <b>{t('common:type')}: </b>
        </div>
        <div>
          {EnumTranslationHelper.getTranslatedEnumValue({
            enumName: 'ContactFormType',
            enumValue: contactFormDetailData.type,
            namespace: TranslationResourceNamespace.form,
          })}
        </div>

        {/* Source */}
        <div>
          <b>{t('common:source')}: </b>
        </div>
        <div>
          {EnumTranslationHelper.getTranslatedEnumValue({
            enumName: 'ContactFormSource',
            enumValue: contactFormDetailData.source,
            namespace: TranslationResourceNamespace.form,
          })}
        </div>

        {/* Status */}
        <div>
          <b>{t('common:status')}: </b>
        </div>
        <div>
          {EnumTranslationHelper.getTranslatedEnumValue({
            enumName: 'ContactFormStatus',
            enumValue: contactFormDetailData.status,
            namespace: TranslationResourceNamespace.form,
          })}
        </div>

        {/* Language */}
        <div>
          <b>{t('common:language')}: </b>
        </div>
        <div>
          {EnumTranslationHelper.getTranslatedEnumValue({
            enumName: 'Language',
            enumValue: contactFormDetailData.language,
            namespace: TranslationResourceNamespace.common,
          })}
        </div>

        {/* Status History */}
        {contactFormDetailData.statusHistory &&
          contactFormDetailData.statusHistory.length > 0 && (
            <>
              <div>
                <b>{t('common:statusHistory')}: </b>
              </div>
              <div className="space-y-2">
                {contactFormDetailData.statusHistory.map((history, index) => (
                  <div key={index} className="border p-2 rounded">
                    <div>
                      <b>{t('common:prevStatus')}: </b>
                      {EnumTranslationHelper.getTranslatedEnumValue({
                        enumName: 'ContactFormStatus',
                        enumValue: history.prevStatus,
                      })}
                    </div>
                    <div>
                      <b>{t('common:newStatus')}: </b>
                      {EnumTranslationHelper.getTranslatedEnumValue({
                        enumName: 'ContactFormStatus',
                        enumValue: history.newStatus,
                      })}
                    </div>
                    <div>
                      <b>{t('common:note')}: </b>
                      {history.note || '-'}
                    </div>
                    <div>
                      <b>{t('common:updatedAt')}: </b>
                      {new Date(history.updatedAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
      </div>
    </div>
  )
}

export default ContactFormDetailContainerUIBase
