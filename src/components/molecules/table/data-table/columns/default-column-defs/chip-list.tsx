import { ColumnDef } from '@tanstack/react-table'
import { ChipList } from '@/components/molecules/chip-list/chip-list'

interface ChipListColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  maxDisplay?: number
  variantMap?: Record<
    string,
    'default' | 'secondary' | 'success' | 'warning' | 'error'
  >
}

export function getChipListColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'left',
  maxDisplay = 3,
  variantMap = {},
}: ChipListColumnOptions): ColumnDef<T> {
  return {
    accessorKey,
    header: () => {
      return <div className={`flex justify-${headerOrientation}`}>{header}</div>
    },
    cell: ({ row }) => {
      const values = row.getValue<string[]>(accessorKey)
      const chips = values.map((value) => ({
        label: value,
        variant: variantMap[value] || 'default',
      }))

      return <ChipList chips={chips} maxDisplay={maxDisplay} />
    },
  }
}
