import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'

interface ColorColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  showColorValue?: boolean
}

export function getColorColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
  showColorValue = true,
}: ColorColumnOptions): ColumnDef<T> {
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
      const color = row.getValue<string>(accessorKey)
      return (
        <div className="flex items-center gap-2">
          <div
            className="size-6 rounded-full border"
            style={{ backgroundColor: color }}
          />
          {showColorValue && <span className="text-sm">{color}</span>}
        </div>
      )
    },
  }
}
