import { useCallback } from 'react'
import { useBlogDeleteMutation } from '@/domains/blog/api'
import { EntityDeleteDialog } from '@/components/organisms/entity-delete/entity-delete.dialog'
import { useI18n } from '@/localization/hooks/useI18n'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
interface BlogDeleteDialogProps {
  blogId?: string
  blogTitle?: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function BlogDeleteDialog({
  blogId,
  blogTitle,
  isOpen,
  onClose,
  onSuccess,
}: BlogDeleteDialogProps) {
  const { t } = useI18n()
  const [blogDelete, { isLoading }] = useBlogDeleteMutation()

  const handleDelete = useCallback(async () => {
    if (!blogId) return

    try {
      await blogDelete({ input: { _id: blogId } })

      toast.push(
        <Notification title={t('common:success')} type="success">
          {t('blog:blogDeletedSuccessfully')}
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
  }, [blogId, blogDelete, onClose, onSuccess, t])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      title={t('blog:deleteBlog')}
      description={`${t('blog:blogDeleteDescription')} "${blogTitle || t('blog:thisBlog')
        }"?`}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
