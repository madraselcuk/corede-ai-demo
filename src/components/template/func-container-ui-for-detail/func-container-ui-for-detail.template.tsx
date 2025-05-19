import { useI18n } from '@/localization/hooks/useI18n'
import Loading from '@/components/shared/Loading'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { motion } from 'framer-motion'
import {
  containerAnimation,
  formFieldsAnimation,
} from '@/components/animation/motion'
import { CommonDetailUIComponentProps } from '@/@types/common.func.containers'
import { HasChildren } from '@/components/interface'

export const FuncContainerUIForDetailFormTemplate = <TDetail,>({
  detailQueryIsLoading,
  detailResult,
  connectionError,
  noDataError,
  children,
}: CommonDetailUIComponentProps<TDetail> & HasChildren) => {
  const { t } = useI18n()

  if (detailQueryIsLoading) {
    return <Loading loading={detailQueryIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError || !detailResult) {
    return <NoDataState text={t('common:noData')} />
  }
  return (
    <motion.div className="flex flex-col gap-4" {...containerAnimation}>
      <motion.div className="flex flex-col pb-4 gap-2" {...formFieldsAnimation}>
        {children}
      </motion.div>
    </motion.div>
  )
}
