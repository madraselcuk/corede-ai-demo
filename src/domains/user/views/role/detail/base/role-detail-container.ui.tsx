'use client'
import Loading from '@/components/shared/Loading'
import { RoleDetailContainerUIProps } from '../role-detail.container'
import { i18n } from '@/localization'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'

export const RoleDetailContent = ({
  roleDetailData,
  roleDetailIsLoading,
  connectionError,
  noDataError,
}: RoleDetailContainerUIProps) => {
  const { t } = useI18n()

  if (roleDetailIsLoading) {
    return <Loading loading={roleDetailIsLoading} />
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
        <div>{roleDetailData?.name || '-'}</div>

        <div>
          <b>{i18n.t('common:key')}: </b>
        </div>
        <div>{roleDetailData?.key || '-'}</div>

        <div>
          <b>{i18n.t('common:action')}: </b>
        </div>
        <div>{roleDetailData?.action}</div>

        <div>
          <b>{i18n.t('common:domain')}: </b>
        </div>
        <div>{roleDetailData?.domain || '-'}</div>

        <div>
          <b>{i18n.t('common:subdomain')}: </b>
        </div>
        <div>{roleDetailData?.subdomain || '-'}</div>

        <div>
          <b>{i18n.t('common:category')}: </b>
        </div>
        <div>
          {roleDetailData?.category}
        </div>

        <div>
          <b>{i18n.t('common:description')}: </b>
        </div>
        <div>{roleDetailData?.description || '-'}</div>

        <div>
          <b>{i18n.t('common:createdAt')}: </b>
        </div>
        <div>
          {roleDetailData?.createdAt
            ? new Date(roleDetailData.createdAt).toLocaleString()
            : '-'}
        </div>

        <div>
          <b>{i18n.t('common:updatedAt')}: </b>
        </div>
        <div>
          {roleDetailData?.updatedAt
            ? new Date(roleDetailData.updatedAt).toLocaleString()
            : '-'}
        </div>
      </div>
    </div>
  )
}

export default RoleDetailContent
