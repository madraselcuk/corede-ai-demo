import { useCallback } from 'react'
import { useDeleteBlogCategoryMutation } from '@/domains/blog/api'
import { EntityDeleteDialog } from '@/components/organisms/entity-delete/entity-delete.dialog'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'

interface BlogCategoryDeleteDialogProps {
  blogCategoryId?: string
  blogCategoryName?: string
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function BlogCategoryDeleteDialog({
  blogCategoryId,
  blogCategoryName,
  isOpen,
  onClose,
  onSuccess,
}: BlogCategoryDeleteDialogProps) {
  const { t } = useI18n()
  const [deleteBlogCategory, { isLoading }] = useDeleteBlogCategoryMutation()

  const handleDelete = useCallback(async () => {
    if (!blogCategoryId) return

    try {
      await deleteBlogCategory({ input: { _id: blogCategoryId } })
      toast.push(
        <Notification title={t('common:success')} type="success">
          {t('blog:blogCategoryDeletedSuccessfully')}
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
  }, [blogCategoryId, deleteBlogCategory, onClose, onSuccess, t])

  return (
    <EntityDeleteDialog
      isOpen={isOpen}
      isLoading={isLoading}
      title={t('blog:deleteBlogCategory')}
      description={`${t('blog:blogCategoryDeleteDescription')} "${
        blogCategoryName || t('blog:thisBlogCategory')
      }"?`}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  )
}
