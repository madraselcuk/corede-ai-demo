import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/co/checkbox'
import {
  ActionColumnProps,
  Actions,
} from '@/components/molecules/table/data-table/columns/action-columns'
import { IEntity } from '@common_package'

interface ColumnDefsProps<T extends IEntity> {
  // Select column configuration
  selectColumn?: {
    enabled: boolean
  }
  // Actions column configuration (optional)
  actionsColumnDef?: Omit<ActionColumnProps<T>, 'entity'>
  // Additional custom columns
  additionalColumns?: ColumnDef<T>[]
}

export function getColumnDefs<T extends IEntity>(
  params: ColumnDefsProps<T>,
): ColumnDef<T>[] {
  const columns: ColumnDef<T>[] = []

  // Add select column if enabled
  if (params.selectColumn?.enabled) {
    columns.push({
      id: 'select',
      header: ({ table }) => (
        <div className="flex items-center px-4">
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    })
  }

  // Add additional custom columns if provided
  if (params.additionalColumns) {
    columns.push(...params.additionalColumns)
  }

  // Add actions column if configuration is provided
  if (params.actionsColumnDef) {
    columns.push({
      id: 'actions',
      cell: ({ row }) => (
        <Actions<T> {...params.actionsColumnDef} entity={row.original} />
      ),
    })
  }

  return columns
}
