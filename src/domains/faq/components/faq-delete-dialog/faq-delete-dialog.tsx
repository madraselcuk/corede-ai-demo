import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'
import { useFaqDeleteMutation } from '@/domains/faq/api'

export function FaqDeleteDialog(props: EntityActionWithIdViewBaseProps) {
  return (
    <EntityDelete useEntityDeleteMutation={useFaqDeleteMutation} {...props} />
  )
}
