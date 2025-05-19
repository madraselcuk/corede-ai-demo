'use client'
import Loading from '@/components/shared/Loading'
import { NotificationHistoryDetailContainerUIProps } from '../notification-history-detail.container'
import { i18n } from '@/localization'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'
import { Badge } from '@/components/ui/Badge'

export const NotificationHistoryDetailContent = ({
  notificationHistoryDetailData,
  notificationHistoryDetailIsLoading,
  connectionError,
  noDataError,
}: NotificationHistoryDetailContainerUIProps) => {
  const { t } = useI18n()

  if (notificationHistoryDetailIsLoading) {
    return <Loading loading={notificationHistoryDetailIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('notification:noNotificationHistoryFound')} />
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        {/* Notification Information */}
        <div className="col-span-2 mb-2">
          <h3 className="text-lg font-semibold">{t('notification:notificationHistoryDetails')}</h3>
        </div>

        <div>
          <b>{i18n.t('common:name')}: </b>
        </div>
        <div>{notificationHistoryDetailData?.notification?.name || '-'}</div>

        <div>
          <b>{i18n.t('common:domain')}: </b>
        </div>
        <div>{notificationHistoryDetailData?.notification?.domain || '-'}</div>

        <div>
          <b>{i18n.t('common:type')}: </b>
        </div>
        <div>{notificationHistoryDetailData?.notification?.type || '-'}</div>

        {/* Notification History Information */}
        <div className="col-span-2 mt-4 mb-2">
          <h3 className="text-lg font-semibold">{t('notification:notificationHistoryDeliveryDetails')}</h3>
        </div>

        <div>
          <b>{i18n.t('common:status')}: </b>
        </div>
        <div>
          {notificationHistoryDetailData?.status
            ? <Badge type={getStatusBadgeType(notificationHistoryDetailData.status)}>
              {notificationHistoryDetailData.status}
            </Badge>
            : '-'}
        </div>

        <div>
          <b>{i18n.t('common:channel')}: </b>
        </div>
        <div>{notificationHistoryDetailData?.channelType || '-'}</div>

        <div>
          <b>{i18n.t('common:language')}: </b>
        </div>
        <div>{notificationHistoryDetailData?.language || '-'}</div>

        <div>
          <b>{i18n.t('common:sentToTopic')}: </b>
        </div>
        <div>
          {notificationHistoryDetailData?.isSentToTopic
            ? (notificationHistoryDetailData.sentTopic || t('common:yes'))
            : t('common:no')}
        </div>

        {/* Timestamps */}
        <div className="col-span-2 mt-4 mb-2">
          <h3 className="text-lg font-semibold">{t('notification:notificationHistoryTimestamps')}</h3>
        </div>

        <div>
          <b>{i18n.t('common:createdAt')}: </b>
        </div>
        <div>
          {notificationHistoryDetailData?.createdAt
            ? new Date(notificationHistoryDetailData.createdAt).toLocaleString()
            : '-'}
        </div>

        <div>
          <b>{i18n.t('common:updatedAt')}: </b>
        </div>
        <div>
          {notificationHistoryDetailData?.updatedAt
            ? new Date(notificationHistoryDetailData.updatedAt).toLocaleString()
            : '-'}
        </div>

        {/* Results section if available */}
        {notificationHistoryDetailData?.results && notificationHistoryDetailData.results.length > 0 && (
          <>
            <div className="col-span-2 mt-4 mb-2">
              <h3 className="text-lg font-semibold">{t('notification:notificationHistoryResults')}</h3>
            </div>
            <div className="col-span-2">
              <pre className="bg-gray-100 p-3 rounded overflow-auto max-h-60">
                {JSON.stringify(notificationHistoryDetailData.results, null, 2)}
              </pre>
            </div>
          </>
        )}

        {/* Variable values if available */}
        {notificationHistoryDetailData?.variableValues && notificationHistoryDetailData.variableValues.length > 0 && (
          <>
            <div className="col-span-2 mt-4 mb-2">
              <h3 className="text-lg font-semibold">{t('notification:notificationHistoryVariables')}</h3>
            </div>
            <div className="col-span-2">
              <ul className="list-disc pl-5">
                {notificationHistoryDetailData.variableValues.map((variable, index) => (
                  <li key={index}>{variable}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// Helper function to determine badge type based on status
function getStatusBadgeType(status: string): 'success' | 'warning' | 'danger' | 'default' {
  switch (status) {
    case 'SENT':
      return 'success'
    case 'PENDING':
      return 'warning'
    case 'FAILED':
      return 'danger'
    default:
      return 'default'
  }
}

export default NotificationHistoryDetailContent
