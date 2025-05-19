import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'
import { useSubscriptionFormDeleteMutation } from '../../api'

interface SubscriptionFormDeleteDialogProps {
  subscriptionFormId: string
  subscriptionFormName: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  onError?: () => void
}

export function SubscriptionFormDeleteDialog(
  props: SubscriptionFormDeleteDialogProps,
) {
  return (
    <EntityDelete
      useEntityDeleteMutation={useSubscriptionFormDeleteMutation}
      entityId={props.subscriptionFormId}
      entityName={props.subscriptionFormName}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSuccess={props.onSuccess}
      onError={props.onError}
    />
  )
}
