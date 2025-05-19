import { FaqCategoryDetailUIComponentProps } from '../faq-category-detail.container'
import { useI18n } from '@/localization/hooks/useI18n'
import { motion } from 'framer-motion'
import * as Icons from 'react-icons/fa'
import { FuncContainerUIForDetailFormTemplate } from '@/components/template/func-container-ui-for-detail/func-container-ui-for-detail.template'

export const FaqCategoryDetailContent = ({
  detailResult,
  ...props
}: FaqCategoryDetailUIComponentProps) => {
  const { t } = useI18n()

  // Render icon component
  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons]
    return IconComponent ? <IconComponent className="text-xl  " /> : null
  }

  return (
    <FuncContainerUIForDetailFormTemplate
      detailResult={detailResult}
      {...props}
    >
      <motion.div>
        <span className="text-lg font-bold">{t('common:name')}:</span>
        <span className="text-lg font-normal"> {detailResult?.name}</span>
      </motion.div>
      <motion.div className="flex items-center gap-2">
        <span className="text-lg font-bold">{t('common:icon')}:</span>
        <span className="text-lg font-normal flex items-center">
          {renderIcon(detailResult?.icon || '')}
        </span>
      </motion.div>
    </FuncContainerUIForDetailFormTemplate>
  )
}
