import { Button } from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import { useI18n } from '@/localization/hooks/useI18n'
import { motion } from 'framer-motion'

interface EntityDeleteDialogProps {
  isOpen: boolean
  isLoading?: boolean
  title?: string
  description?: string
  onConfirm: () => void
  onCancel: () => void
}

export function EntityDeleteDialog({
  isOpen,
  isLoading = false,
  title,
  description,
  onConfirm,
  onCancel,
}: EntityDeleteDialogProps) {
  const { t } = useI18n()

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => !isLoading && onCancel()}
      onRequestClose={() => !isLoading && onCancel()}
    >
      <motion.div className="flex flex-col gap-4">
        <h3>{title ?? t('common:deleteEntity')}</h3>

        <p>{description ?? t('common:deleteEntityDescription')}</p>

        <div className="flex justify-end gap-2">
          <Button onClick={onCancel} disabled={isLoading}>
            {t('common:cancel')}
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isLoading}
            variant="solid"
            className="bg-rose-400 hover:bg-rose-600"
          >
            {t('common:delete')}
          </Button>
        </div>
      </motion.div>
    </Dialog>
  )
}
