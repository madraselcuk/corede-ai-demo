'use client'

import { DataTable } from '@/components/molecules/table/data-table/data-table'
import { RoleListContainerUIProps } from '../role-list.container'

export const RoleListTableUI = (props: RoleListContainerUIProps) => {
  return (
    <div className="container mx-auto py-10">
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default RoleListTableUI
