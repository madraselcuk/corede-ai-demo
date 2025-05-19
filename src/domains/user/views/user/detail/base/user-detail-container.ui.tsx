'use client'
import Loading from '@/components/shared/Loading'
import { UserDetailContainerUIProps } from '../user-detail.container'
import { i18n } from '@/localization'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'

export const UserDetailContent = ({
  userDetailData,
  userDetailIsLoading,
  connectionError,
  noDataError,
}: UserDetailContainerUIProps) => {
  const { t } = useI18n()

  if (userDetailIsLoading) {
    return <Loading loading={userDetailIsLoading} />
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
        <div>{userDetailData?.name}</div>
        <div>
          <b>{i18n.t('common:surname')}: </b>
        </div>
        <div>{userDetailData?.surname}</div>
        <div>
          <b>{i18n.t('common:email')}: </b>
        </div>
        <div>{userDetailData?.email}</div>
        <div>
          <b>{i18n.t('common:phoneNumber')}: </b>
        </div>
        <div>{userDetailData?.phoneNumber}</div>
        <div>
          <b>{i18n.t('common:type')}: </b>
        </div>
        <div>{userDetailData?.type}</div>
        <div>
          <b>{i18n.t('common:address')}: </b>
        </div>
        <div>{userDetailData?.address}</div>
        <div>
          <b>{i18n.t('common:country')}: </b>
        </div>
        <div>{userDetailData?.country}</div>
        <div>
          <b>{i18n.t('common:city')}: </b>
        </div>
        <div>{userDetailData?.city}</div>
        <div>
          <b>{i18n.t('common:organization')}: </b>
        </div>
        <div>{userDetailData?.organization?.name}</div>
        <div>
          <b>{i18n.t('common:department')}: </b>
        </div>
        <div>{userDetailData?.department?.name}</div>
      </div>
    </div>
  )
}

export default UserDetailContent
