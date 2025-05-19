import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'
import { useContactFormDeleteMutation } from '../../api'

interface ContactFormDeleteDialogProps {
  contactFormId: string
  contactFormName: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  onError?: () => void
}

export function ContactFormDeleteDialog(props: ContactFormDeleteDialogProps) {
  return (
    <EntityDelete
      useEntityDeleteMutation={useContactFormDeleteMutation}
      entityId={props.contactFormId}
      entityName={props.contactFormName}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSuccess={props.onSuccess}
      onError={props.onError}
    />
  )
}
