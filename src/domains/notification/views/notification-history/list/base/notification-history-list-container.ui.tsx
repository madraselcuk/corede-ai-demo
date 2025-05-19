'use client'

import { DataTable } from '@/components/molecules/table/data-table/data-table'
import { NotificationHistoryListContainerUIProps } from '../notification-history-list.container'
import { Button } from '@/components/ui/Button'
import { useI18n } from '@/localization/hooks/useI18n'

export const NotificationHistoryListTableUI = (props: NotificationHistoryListContainerUIProps) => {
  const { t } = useI18n()

  return (
    <div className="container mx-auto py-10">
      <Button variant="solid" onClick={props.handleCreate}>
        {t('common:create')}
      </Button>
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default NotificationHistoryListTableUI
