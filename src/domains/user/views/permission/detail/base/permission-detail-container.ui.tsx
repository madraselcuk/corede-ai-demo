'use client'
import Loading from '@/components/shared/Loading'
import { PermissionDetailContainerUIProps } from '../permission-detail.container'
import { i18n } from '@/localization'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'

export const PermissionDetailContent = ({
  permissionDetailData,
  permissionDetailIsLoading,
  connectionError,
  noDataError,
}: PermissionDetailContainerUIProps) => {
  const { t } = useI18n()

  if (permissionDetailIsLoading) {
    return <Loading loading={permissionDetailIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('common:noDataFound')} />
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{i18n.t('common:name')}: </b>
        </div>
        <div>{permissionDetailData?.name || '-'}</div>

        <div>
          <b>{i18n.t('common:key')}: </b>
        </div>
        <div>{permissionDetailData?.key || '-'}</div>

        <div>
          <b>{i18n.t('common:action')}: </b>
        </div>
        <div>{permissionDetailData?.action}</div>

        <div>
          <b>{i18n.t('common:domain')}: </b>
        </div>
        <div>{permissionDetailData?.domain || '-'}</div>

        <div>
          <b>{i18n.t('common:subdomain')}: </b>
        </div>
        <div>{permissionDetailData?.subdomain || '-'}</div>

        <div>
          <b>{i18n.t('common:category')}: </b>
        </div>
        <div>
          {permissionDetailData?.category}
        </div>

        <div>
          <b>{i18n.t('common:description')}: </b>
        </div>
        <div>{permissionDetailData?.description || '-'}</div>

        <div>
          <b>{i18n.t('common:createdAt')}: </b>
        </div>
        <div>
          {permissionDetailData?.createdAt
            ? new Date(permissionDetailData.createdAt).toLocaleString()
            : '-'}
        </div>

        <div>
          <b>{i18n.t('common:updatedAt')}: </b>
        </div>
        <div>
          {permissionDetailData?.updatedAt
            ? new Date(permissionDetailData.updatedAt).toLocaleString()
            : '-'}
        </div>
      </div>
    </div>
  )
}

export default PermissionDetailContent
