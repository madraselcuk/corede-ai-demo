'use client'

import Loading from '@/components/shared/Loading'
import { NotificationDetailContainerUIProps } from '../notification-detail.container'
import { i18n } from '@/localization'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'
import { AllTranslationKeys } from '@/localization/types'

export const NotificationDetailContent = ({
  notificationDetailData,
  notificationDetailIsLoading,
  connectionError,
  noDataError,
}: NotificationDetailContainerUIProps) => {
  const { t } = useI18n()

  if (notificationDetailIsLoading) {
    return <Loading loading={notificationDetailIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return (
      <NoDataState
        text={t('notification.noNotificationFound' as AllTranslationKeys)}
      />
    )
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{i18n.t('notification.name' as AllTranslationKeys)}: </b>
        </div>
        <div>{notificationDetailData?.name}</div>
        <div>
          <b>{i18n.t('notification.type' as AllTranslationKeys)}: </b>
        </div>
        <div>{notificationDetailData?.type}</div>
        <div>
          <b>{i18n.t('notification.domain' as AllTranslationKeys)}: </b>
        </div>
        <div>{notificationDetailData?.domain}</div>

        {/* Email channel details if available */}
        {notificationDetailData?.channels?.email && (
          <>
            <div>
              <b>
                {i18n.t(
                  'notification.channels.email.subject' as AllTranslationKeys,
                )}
                :{' '}
              </b>
            </div>
            <div>{notificationDetailData.channels.email.subject?.en}</div>
            <div>
              <b>{i18n.t('notification.channels.email.content')}: </b>
            </div>
            <div>{notificationDetailData.channels.email.content}</div>
          </>
        )}

        {/* SMS channel details if available */}
        {notificationDetailData?.channels?.sms && (
          <>
            <div>
              <b>
                {i18n.t(
                  'notification.channels.sms.subject' as AllTranslationKeys,
                )}
                :{' '}
              </b>
            </div>
            <div>{notificationDetailData.channels.sms.subject?.en}</div>
            <div>
              <b>
                {i18n.t(
                  'notification.channels.sms.content' as AllTranslationKeys,
                )}
                :{' '}
              </b>
            </div>
            <div>{notificationDetailData.channels.sms.content?.en}</div>
          </>
        )}

        {/* Push notification channel details if available */}
        {notificationDetailData?.channels?.push && (
          <>
            <div>
              <b>
                {i18n.t(
                  'notification.channels.push.subject' as AllTranslationKeys,
                )}
                :{' '}
              </b>
            </div>
            <div>{notificationDetailData.channels.push.subject?.en}</div>
            <div>
              <b>
                {i18n.t(
                  'notification.channels.push.content' as AllTranslationKeys,
                )}
                :{' '}
              </b>
            </div>
            <div>{notificationDetailData.channels.push.content?.en}</div>
          </>
        )}

        {/* Web channel details if available */}
        {notificationDetailData?.channels?.web && (
          <>
            <div>
              <b>
                {i18n.t(
                  'notification.channels.web.subject' as AllTranslationKeys,
                )}
                :{' '}
              </b>
            </div>
            <div>{notificationDetailData.channels.web.subject?.en}</div>
            <div>
              <b>
                {i18n.t(
                  'notification.channels.web.content' as AllTranslationKeys,
                )}
                :{' '}
              </b>
            </div>
            <div>{notificationDetailData.channels.web.content?.en}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default NotificationDetailContent
