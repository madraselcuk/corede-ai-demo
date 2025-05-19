import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'
import { useUserDeleteMutation } from '../../../../@package/api/domains/user/user/user.api'

interface UserDeleteDialogProps {
  id: string
  name: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  onError?: () => void
}

export function UserDeleteDialog(props: UserDeleteDialogProps) {
  return (
    <EntityDelete
      useEntityDeleteMutation={useUserDeleteMutation}
      entityName={props.name}
      entityId={props.id}
      onSuccess={props.onSuccess}
      onError={props.onError}
      onClose={props.onClose}
      isOpen={props.isOpen}
    />
  )
}
