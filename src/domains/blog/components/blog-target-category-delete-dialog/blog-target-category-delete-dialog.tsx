import { useCallback } from 'react'
import { useDeleteBlogTargetCategoryMutation } from '@/domains/blog/api'
import { EntityDeleteDialog } from '@/components/organisms/entity-delete/entity-delete.dialog'
import { useI18n } from '@/localization/hooks/useI18n'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
interface BlogTargetCategoryDeleteDialogProps {
  blogTargetCategoryId?: string
  blogTargetCategoryName?: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function BlogTargetCategoryDeleteDialog({
  blogTargetCategoryId,
  blogTargetCategoryName,
  isOpen,
  onClose,
  onSuccess,
}: BlogTargetCategoryDeleteDialogProps) {
  const { t } = useI18n()
  const [deleteBlogTargetCategory, { isLoading }] =
    useDeleteBlogTargetCategoryMutation()

  const handleDelete = useCallback(async () => {
    if (!blogTargetCategoryId) return

    try {
      await deleteBlogTargetCategory({ input: { _id: blogTargetCategoryId } })
      toast.push(
        <Notification title={t('common:success')} type="success">
          {t('blog:blogTargetCategoryDeletedSuccessfully')}
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
  }, [blogTargetCategoryId, deleteBlogTargetCategory, onClose, onSuccess, t])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      title={t('blog:deleteBlogTargetCategory')}
      description={`${t('blog:blogTargetCategoryDeleteDescription')} "${
        blogTargetCategoryName || t('blog:thisBlogTargetCategory')
      }"?`}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
