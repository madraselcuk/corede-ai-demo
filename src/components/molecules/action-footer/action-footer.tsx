'use client'

import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { TbDeviceFloppy, TbArrowNarrowLeft } from 'react-icons/tb'
import { useI18n } from '@/localization/hooks/useI18n'
import { UiType } from '@/@types/common'
import { cn } from '@/utils/css-class-name.utility'

export interface ActionFooterProps {
  uiType?: UiType
  backButton?: {
    noBack?: boolean
    onBack?: () => void
  }
  mainAction: {
    onMainAction?: () => void
    title: string
    loading: boolean
    disabled?: boolean
    type?: 'button' | 'submit'
    successMessage?: string
  }

  secondaryAction?: {
    onSecondaryAction: () => void
    title: string
    loading: boolean
    disabled?: boolean
    successMessage?: string
  }
}

const ActionFooter = ({
  uiType = 'container',
  backButton,
  mainAction,
  secondaryAction,
}: ActionFooterProps) => {
  const { t } = useI18n()

  const noBack =
    backButton?.noBack ?? (uiType === 'dialog' || uiType === 'drawer')

  const handleBack = () => {
    if (backButton?.onBack) {
      backButton.onBack()
    } else {
      history.back()
    }
  }

  const handleSecondaryAction = () => {
    if (!secondaryAction) return
    secondaryAction.onSecondaryAction()
    if (secondaryAction.successMessage) {
      toast.push(
        <Notification type="success">
          {secondaryAction?.successMessage}
        </Notification>,
        {
          placement: 'top-center',
        },
      )
    }
  }

  const handlePublish = () => {
    if (mainAction.onMainAction) {
      mainAction.onMainAction()
    }
    if (mainAction.successMessage) {
      toast.push(
        <Notification type="success">{mainAction.successMessage}</Notification>,
        {
          placement: 'top-center',
        },
      )
    }
  }

  const containerClassName = cn(
    'sticky bottom-0 left-0 right-0 z-10 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 py-4 -mb-4 md:-mb-6',
  ) // CHANGED margin/padding values.

  return (
    <div className={cn(uiType === 'container' ? containerClassName : '')}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between">
          <div>
            {!noBack && (
              <Button
                className="ltr:mr-3 rtl:ml-3"
                type="button"
                variant="plain"
                icon={<TbArrowNarrowLeft />}
                onClick={handleBack}
              >
                {t('common:back')}
              </Button>
            )}
          </div>
          <div className="flex items-center">
            {secondaryAction && (
              <Button
                className="ltr:mr-3 rtl:ml-3"
                type="button"
                icon={<TbDeviceFloppy />}
                loading={secondaryAction?.loading}
                disabled={secondaryAction?.disabled}
                onClick={handleSecondaryAction}
              >
                {secondaryAction?.title}
              </Button>
            )}
            <Button
              variant="solid"
              type={mainAction.type || 'button'}
              loading={mainAction.loading}
              disabled={mainAction.disabled}
              onClick={handlePublish}
            >
              {mainAction.title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionFooter
