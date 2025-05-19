'use client'

import { CoDialog } from '@/components/molecules/dialog/dialog'
import AuthorCreateFormContainer from '../webinar-join-public.func.container'
import AuthorCreateFormUIBase from './subscription-form-create-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'

interface AuthorCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
}

export const AuthorCreateDialog = ({
  open,
  onOpenChange,
  onClose,
}: AuthorCreateDialogProps) => {
  const { t } = useI18n()

  return (
    <CoDialog
      open={open}
      onOpenChange={onOpenChange}
      onClose={onClose}
      headerProps={{
        headerTitle: {
          title: t('form:subscriptionFormCreate'),
        },
      }}
    >
      <AuthorCreateFormContainer>
        {(contentProps) => <AuthorCreateFormUIBase {...contentProps} uiType="dialog" />}
      </AuthorCreateFormContainer>
    </CoDialog>
  )
}

export default AuthorCreateDialog
