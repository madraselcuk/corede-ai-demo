import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'
import { useOrganizationDeleteMutation } from '../../../../@package/api/domains/user/organization'

interface OrganizationDeleteDialogProps {
  organizationId: string
  organizationName: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  onError?: () => void
}

export function OrganizationDeleteDialog(props: OrganizationDeleteDialogProps) {
  return (
    <EntityDelete
      useEntityDeleteMutation={useOrganizationDeleteMutation}
      entityName={props.organizationName}
      entityId={props.organizationId}
      onSuccess={props.onSuccess}
      onError={props.onError}
      onClose={props.onClose}
      isOpen={props.isOpen}
    />
  )
}
