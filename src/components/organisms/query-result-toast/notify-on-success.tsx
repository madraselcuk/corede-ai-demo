import { toast } from '@/components/ui/toast'
import { Notification } from '@/components/ui/Notification'
import { i18n } from '@/localization'
import { ActionType } from '@/@types/common'

export const notifyOnSuccess = (params: {
  entity?: string
  message?: string
  title?: string
  actionType?: ActionType
}) => {
  const {
    entity = i18n.t('common:thisEntity'),
    message,
    title,
    actionType = 'general',
  } = params

  toast.push(
    <Notification title={title || getTitle(actionType, entity)} type="success">
      {message || getMessage(actionType, entity)}
    </Notification>,
  )
}

const getTitle = (actionType: ActionType, entity: string): string => {
  switch (actionType) {
    case 'create':
      return i18n.t('common:entityCreateSuccessTitle', { entity })
    case 'update':
      return i18n.t('common:entityUpdateSuccessTitle', { entity })
    case 'delete':
      return i18n.t('common:entityDeleteSuccessTitle', { entity })
    default:
      return i18n.t('common:success')
  }
}

const getMessage = (actionType: ActionType, entity: string): string => {
  switch (actionType) {
    case 'create':
      return i18n.t('common:entityCreateSuccessMessage', { entity })
    case 'update':
      return i18n.t('common:entityUpdateSuccessMessage', { entity })
    case 'delete':
      return i18n.t('common:entityDeleteSuccessMessage', { entity })
    default:
      return i18n.t('common:success')
  }
}
