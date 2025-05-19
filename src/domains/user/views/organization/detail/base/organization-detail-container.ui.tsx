'use client'
import Loading from '@/components/shared/Loading'
import { OrganizationDetailContainerUIProps } from '../organization-detail.container'
import { i18n } from '@/localization'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'

export const OrganizationDetailContent = ({
  organizationDetailData,
  organizationDetailIsLoading,
  connectionError,
  noDataError,
}: OrganizationDetailContainerUIProps) => {
  const { t } = useI18n()

  if (organizationDetailIsLoading) {
    return <Loading loading={organizationDetailIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('user:noOrganizationDataFound')} />
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        {/* Basic Information */}
        <div className="col-span-2 mb-2">
          <h3 className="text-lg font-semibold">{t('common:basicInformation')}</h3>
        </div>

        <div>
          <b>{i18n.t('common:name')}: </b>
        </div>
        <div>{organizationDetailData?.name || '-'}</div>

        <div>
          <b>{i18n.t('common:legalName')}: </b>
        </div>
        <div>{organizationDetailData?.legalName || '-'}</div>

        <div>
          <b>{i18n.t('common:summary')}: </b>
        </div>
        <div>{organizationDetailData?.summary || '-'}</div>

        <div>
          <b>{i18n.t('common:website')}: </b>
        </div>
        <div>{organizationDetailData?.website || '-'}</div>

        <div>
          <b>{i18n.t('common:status')}: </b>
        </div>
        <div>{organizationDetailData?.status || '-'}</div>

        {/* Contact Information */}
        <div className="col-span-2 mt-4 mb-2">
          <h3 className="text-lg font-semibold">{t('common:contactInformation')}</h3>
        </div>

        <div>
          <b>{i18n.t('common:email')}: </b>
        </div>
        <div>{organizationDetailData?.email || '-'}</div>

        <div>
          <b>{i18n.t('common:phone')}: </b>
        </div>
        <div>{organizationDetailData?.phone || '-'}</div>

        {/* TODO Addresses */}

        {/* Social Media */}
        {organizationDetailData?.socialMedias && (
          <>
            {organizationDetailData.socialMedias.linkedin && (
              <>
                <div>
                  <b>{i18n.t('common:linkedin')}: </b>
                </div>
                <div>{organizationDetailData.socialMedias.linkedin}</div>
              </>
            )}

            {organizationDetailData.socialMedias.x && (
              <>
                <div>
                  <b>{i18n.t('common:x')}: </b>
                </div>
                <div>{organizationDetailData.socialMedias.x}</div>
              </>
            )}

            {organizationDetailData.socialMedias.instagram && (
              <>
                <div>
                  <b>{i18n.t('common:instagram')}: </b>
                </div>
                <div>{organizationDetailData.socialMedias.instagram}</div>
              </>
            )}

            {organizationDetailData.socialMedias.facebook && (
              <>
                <div>
                  <b>{i18n.t('common:facebook')}: </b>
                </div>
                <div>{organizationDetailData.socialMedias.facebook}</div>
              </>
            )}

            {organizationDetailData.socialMedias.youtube && (
              <>
                <div>
                  <b>{i18n.t('common:youtube')}: </b>
                </div>
                <div>{organizationDetailData.socialMedias.youtube}</div>
              </>
            )}
          </>
        )}

        {/* Timestamps */}
        <div className="col-span-2 mt-4 mb-2">
          <h3 className="text-lg font-semibold">{t('common:timestamps')}</h3>
        </div>

        <div>
          <b>{i18n.t('common:createdAt')}: </b>
        </div>
        <div>
          {organizationDetailData?.createdAt
            ? new Date(organizationDetailData.createdAt).toLocaleString()
            : '-'}
        </div>

        <div>
          <b>{i18n.t('common:updatedAt')}: </b>
        </div>
        <div>
          {organizationDetailData?.updatedAt
            ? new Date(organizationDetailData.updatedAt).toLocaleString()
            : '-'}
        </div>
      </div>
    </div>
  )
}

export default OrganizationDetailContent
