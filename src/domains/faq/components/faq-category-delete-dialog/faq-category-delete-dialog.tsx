import { useFaqCategoryDeleteMutation } from '@/domains/faq/api'
import { EntityDelete } from '@/components/organisms/entity-delete/entity-delete'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'

export function FaqCategoryDeleteDialog(
  props: EntityActionWithIdViewBaseProps,
) {
  return (
    <EntityDelete
      useEntityDeleteMutation={useFaqCategoryDeleteMutation}
      {...props}
    />
  )
}
