import { HelpCenterDetailUIComponentProps } from '../help-center-detail.container'
import { useI18n } from '@/localization/hooks/useI18n'
import { motion } from 'framer-motion'
import { FuncContainerUIForDetailFormTemplate } from '@/components/template/func-container-ui-for-detail/func-container-ui-for-detail.template'

export const HelpCenterDetailContent = ({
  detailResult,
  ...props
}: HelpCenterDetailUIComponentProps) => {
  const { t } = useI18n()

  return (
    <FuncContainerUIForDetailFormTemplate
      detailResult={detailResult}
      {...props}
    >
      <motion.div>
        <span className="text-lg font-bold">{t('helpCenter:question')}: </span>
        <span className="text-lg font-normal">{detailResult?.question}</span>
      </motion.div>
      <motion.div>
        <span className="text-lg font-bold">{t('helpCenter:answer')}: </span>
        <span className="text-lg font-normal">{detailResult?.answer}</span>
      </motion.div>
      <motion.div>
        <span className="text-lg font-bold">{t('helpCenter:readingTime')}: </span>
        <span className="text-lg font-normal">{detailResult?.readingTime}</span>
      </motion.div>
      <motion.div>
        <span className="text-lg font-bold">{t('helpCenter:category')}: </span>
        <span className="text-lg font-normal">
          {detailResult?.category?.name}
        </span>
      </motion.div>
    </FuncContainerUIForDetailFormTemplate>
  )
}

export default HelpCenterDetailContent
