'use client'

import { DataTable } from '@/components/molecules/table/data-table/data-table'
import { Button } from '@/components/ui/co/button'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { SubscriptionFormListContainerUIProps } from '../subscription-form-list.container'

export const SubscriptionFormListTableUIBase = (
  props: SubscriptionFormListContainerUIProps,
) => {
  if (props.noConnectionError) {
    return <NoConnectionState />
  }

  return (
    <div className="container mx-auto py-10">
      <Button onClick={props.handleCreate}>Create</Button>
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default SubscriptionFormListTableUIBase
