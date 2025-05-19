'use client'

import { DataTable } from '@/components/molecules/table/data-table/data-table'
import { HelpCenterListUIComponentProps } from '../help-center-list.container'
import { Button } from '@/components/ui/Button'
import { useI18n } from '@/localization/hooks/useI18n'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'

export const HelpCenterListTableUI = (props: HelpCenterListUIComponentProps) => {
  const { t } = useI18n()

  if (props.noConnectionError) {
    return <NoConnectionState />
  }

  return (
    <div className="container mx-auto py-10">
      <Button variant="solid" onClick={props.handleCreate}>
        {t('common:create')}
      </Button>
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default HelpCenterListTableUI
