import { useCallback } from 'react'
import { useAuthorDeleteMutation } from '@/domains/blog/api'
import { EntityDeleteDialog } from '@/components/organisms/entity-delete/entity-delete.dialog'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'

interface AuthorDeleteDialogProps {
  authorId?: string
  authorName?: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function AuthorDeleteDialog({
  authorId,
  authorName,
  isOpen,
  onClose,
  onSuccess,
}: AuthorDeleteDialogProps) {
  const { t } = useI18n()
  const [authorDelete, { isLoading }] = useAuthorDeleteMutation()

  const handleDelete = useCallback(async () => {
    if (!authorId) return

    try {
      await authorDelete({ input: { _id: authorId } })
      toast.push(
        <Notification title={t('common:success')} type="success">
          {t('blog:authorDeletedSuccessfully')}
        </Notification>,
      )
      onSuccess?.()
      onClose()
    } catch (error) {
      console.error(error)
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [authorId, authorDelete, onClose, onSuccess, t])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      title={t('blog:deleteAuthor')}
      description={`${t('blog:authorDeleteDescription')} "${
        authorName || t('blog:thisAuthor')
      }"?`}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
