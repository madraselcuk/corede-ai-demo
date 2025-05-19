import { useHelpCenterDeleteMutation } from '../../api'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'

export function HelpCenterDeleteDialog(props: EntityActionWithIdViewBaseProps) {
  return (
    <EntityDelete
      useEntityDeleteMutation={useHelpCenterDeleteMutation}
      {...props}
    />
  )
}
