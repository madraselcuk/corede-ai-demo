'use client'

import { DataTable } from '@/components/molecules/table/data-table/data-table'
import { PermissionListContainerUIProps } from '../permission-list.container'

export const PermissionListTableUI = (
  props: PermissionListContainerUIProps,
) => {
  return (
    <div className="container mx-auto py-10">
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default PermissionListTableUI
