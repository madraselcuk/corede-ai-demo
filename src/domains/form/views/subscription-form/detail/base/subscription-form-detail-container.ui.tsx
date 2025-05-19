'use client'

import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { SubscriptionFormDetailContainerUIProps } from '../subscription-form-detail.container'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'
import { EnumTranslationHelper } from '@/localization/helpers/enum.translation.helper'
import { TranslationResourceNamespace } from '@/localization/resources'

export const SubscriptionFormDetailContainerUIBase = ({
  subscriptionFormDetailData,
  subscriptionFormDetailIsLoading,
  connectionError,
  noDataError,
}: SubscriptionFormDetailContainerUIProps) => {
  const { t } = useI18n()

  if (subscriptionFormDetailIsLoading) {
    return <div>Loading...</div>
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('form:noSubscriptionFormFound')} />
  }

  if (!subscriptionFormDetailData) {
    return null
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        {/* Email */}
        <div>
          <b>{t('common:email')}: </b>
        </div>
        <div>{subscriptionFormDetailData.email}</div>

        {/* User Type */}
        <div>
          <b>{t('common:userType')}: </b>
        </div>
        <div>
          {EnumTranslationHelper.getTranslatedEnumValue({
            enumName: 'SubscriptionFormUserType',
            enumValue: subscriptionFormDetailData.userType,
            namespace: TranslationResourceNamespace.form,
          })}
        </div>

        {/* Status */}
        <div>
          <b>{t('common:status')}: </b>
        </div>
        <div>
          {EnumTranslationHelper.getTranslatedEnumValue({
            enumName: 'SubscriptionFormStatus',
            enumValue: subscriptionFormDetailData.status,
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
            enumValue: subscriptionFormDetailData.language,
            namespace: TranslationResourceNamespace.common,
          })}
        </div>

        {/* Page */}
        <div>
          <b>{t('common:page')}: </b>
        </div>
        <div>{subscriptionFormDetailData.page || '-'}</div>

        {/* Topic Subscriptions */}
        <div>
          <b>{t('common:newsTopic')}: </b>
        </div>
        <div>{subscriptionFormDetailData.newsTopicSubscribed ? t('common:subscribed') : t('common:notSubscribed')}</div>

        <div>
          <b>{t('common:blogTopic')}: </b>
        </div>
        <div>{subscriptionFormDetailData.blogTopicSubscribed ? t('common:subscribed') : t('common:notSubscribed')}</div>

        <div>
          <b>{t('common:productTopic')}: </b>
        </div>
        <div>{subscriptionFormDetailData.productTopicSubscribed ? t('common:subscribed') : t('common:notSubscribed')}</div>

        <div>
          <b>{t('common:offerTopic')}: </b>
        </div>
        <div>{subscriptionFormDetailData.offerTopicSubscribed ? t('common:subscribed') : t('common:notSubscribed')}</div>

        {/* User Info */}
        {subscriptionFormDetailData.user && (
          <>
            <div>
              <b>{t('user:profile')}: </b>
            </div>
            <div>
              {subscriptionFormDetailData.user.name} {subscriptionFormDetailData.user.surname}
            </div>
          </>
        )}

        {/* Status History */}
        {subscriptionFormDetailData.statusHistory &&
          subscriptionFormDetailData.statusHistory.length > 0 && (
            <>
              <div>
                <b>{t('common:statusHistory')}: </b>
              </div>
              <div className="space-y-2">
                {subscriptionFormDetailData.statusHistory.map((history, index) => (
                  <div key={index} className="border p-2 rounded">
                    <div>
                      <b>{t('common:prevStatus')}: </b>
                      {EnumTranslationHelper.getTranslatedEnumValue({
                        enumName: 'SubscriptionFormStatus',
                        enumValue: history.prevStatus,
                        namespace: TranslationResourceNamespace.form,
                      })}
                    </div>
                    <div>
                      <b>{t('common:newStatus')}: </b>
                      {EnumTranslationHelper.getTranslatedEnumValue({
                        enumName: 'SubscriptionFormStatus',
                        enumValue: history.newStatus,
                        namespace: TranslationResourceNamespace.form,
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

export default SubscriptionFormDetailContainerUIBase
