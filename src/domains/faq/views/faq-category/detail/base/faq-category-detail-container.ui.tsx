import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import Loading from '@/components/shared/Loading'
import { useI18n } from '@/localization/hooks/useI18n'
import { FaqCategoryDetailUIComponentProps } from '../faq-category-detail.container'

export const FaqCategoryDetailContent = ({
  detailResult,
  detailQueryIsLoading,
  connectionError,
  noDataError,
}: FaqCategoryDetailUIComponentProps) => {
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
          <b>{t('common:name')}: </b>
        </div>
        <div>{detailResult?.name}</div>
        <div>
          <b>{t('common:icon')}: </b>
        </div>
        <div>{detailResult?.icon}</div>
      </div>
    </div>
  )
}

export default FaqCategoryDetailContent
