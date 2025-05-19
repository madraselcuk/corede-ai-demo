import Loading from '@/components/shared/Loading'
import { FaqDetailUIComponentProps } from '../faq-detail.container'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'

export const FaqDetailContent = ({
  detailResult,
  detailQueryIsLoading,
  connectionError,
  noDataError,
}: FaqDetailUIComponentProps) => {
  const { t } = useI18n()

  if (detailQueryIsLoading) {
    return <Loading loading={detailQueryIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('faq:noFaqFound')} />
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{t('faq:question')}: </b>
        </div>
        <div>{detailResult?.question}</div>
        <div>
          <b>{t('faq:answer')}: </b>
        </div>
        <div>{detailResult?.answer}</div>
        <div>
          <b>{t('faq:readingTime')}: </b>
        </div>
        <div>{detailResult?.readingTime}</div>
        <div>
          <b>{t('faq:category')}: </b>
        </div>
        <div>{detailResult?.category?.name}</div>
      </div>
    </div>
  )
}

export default FaqDetailContent
