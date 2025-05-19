import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'
import { CoChip } from '@/components/atoms/chip/chip'

interface ChipColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  variantMap?: Record<
    string,
    'default' | 'secondary' | 'success' | 'warning' | 'error'
  >
}

export function getChipColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'left',
  variantMap = {},
}: ChipColumnOptions): ColumnDef<T> {
  return {
    accessorKey,
    header: ({ column }) => {
      return (
        <div className={`flex justify-${headerOrientation}`}>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {header}
            <ArrowUpDown className="ml-2 size-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const value = row.getValue<string>(accessorKey)
      return <CoChip variant={variantMap[value] || 'default'}>{value}</CoChip> // TODO: add variant
    },
  }
}
