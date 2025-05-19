import { useHelpCenterCategoryDeleteMutation } from '../../api'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'

export function HelpCenterCategoryDeleteDialog(
  props: EntityActionWithIdViewBaseProps,
) {
  return (
    <EntityDelete
      useEntityDeleteMutation={useHelpCenterCategoryDeleteMutation}
      {...props}
    />
  )
}
