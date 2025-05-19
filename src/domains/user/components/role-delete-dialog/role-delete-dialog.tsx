import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'
import { useRoleDeleteMutation } from '../../../../@package/api/domains/user/role/role.api'

interface RoleDeleteDialogProps {
  id: string
  name: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  onError?: () => void
}

export function RoleDeleteDialog(props: RoleDeleteDialogProps) {
  return (
    <EntityDelete
      useEntityDeleteMutation={useRoleDeleteMutation}
      entityName={props.name}
      entityId={props.id}
      onSuccess={props.onSuccess}
      onError={props.onError}
      onClose={props.onClose}
      isOpen={props.isOpen}
    />
  )
}
