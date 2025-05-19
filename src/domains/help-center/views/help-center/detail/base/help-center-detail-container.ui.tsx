import Loading from '@/components/shared/Loading'
import { HelpCenterDetailUIComponentProps } from '../help-center-detail.container'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'

export const HelpCenterDetailContent = ({
  detailResult,
  detailQueryIsLoading,
  connectionError,
  noDataError,
}: HelpCenterDetailUIComponentProps) => {
  const { t } = useI18n()

  if (detailQueryIsLoading) {
    return <Loading loading={detailQueryIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('helpCenter:noHelpCenterFound')} />
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{t('helpCenter:question')}: </b>
        </div>
        <div>{detailResult?.question}</div>
        <div>
          <b>{t('helpCenter:answer')}: </b>
        </div>
        <div>{detailResult?.answer}</div>
        <div>
          <b>{t('helpCenter:readingTime')}: </b>
        </div>
        <div>{detailResult?.readingTime}</div>
        <div>
          <b>{t('helpCenter:category')}: </b>
        </div>
        <div>{detailResult?.category?.name}</div>
      </div>
    </div>
  )
}

export default HelpCenterDetailContent
