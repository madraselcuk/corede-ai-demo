import { toast } from '@/components/ui/toast'
import { Notification } from '@/components/ui/Notification'
import { GetUseEffectErrorResult } from '@/utils/use-effect-error-result-handler'
import { i18n } from '@/localization'
import { Language } from '@common_package'
import { ActionType } from '@/@types/common'

export const notifyOnError = (params: {
  entity?: string
  message?: string
  error?: any
  title?: string
  actionType?: ActionType
}) => {
  const {
    entity = i18n.t('common:thisEntity'),
    message,
    error,
    title,
    actionType = 'general',
  } = params

  toast.push(
    <Notification title={title || getTitle(actionType, entity)} type="danger">
      {GetUseEffectErrorResult({
        error,
        currentLanguage: i18n.language as Language,
        defaultMessage: message || getMessage(actionType, entity),
      })}
    </Notification>,
  )
}

const getTitle = (actionType: ActionType, entity: string): string => {
  switch (actionType) {
    case 'create':
      return i18n.t('common:entityCreateErrorTitle', { entity })
    case 'update':
      return i18n.t('common:entityUpdateErrorTitle', { entity })
    case 'delete':
      return i18n.t('common:entityDeleteErrorTitle', { entity })
    default:
      return i18n.t('common:error')
  }
}

const getMessage = (actionType: ActionType, entity: string): string => {
  switch (actionType) {
    case 'create':
      return i18n.t('common:entityCreateErrorMessage', { entity })
    case 'update':
      return i18n.t('common:entityUpdateErrorMessage', { entity })
    case 'delete':
      return i18n.t('common:entityDeleteErrorMessage', { entity })
    default:
      return i18n.t('common:error')
  }
}
