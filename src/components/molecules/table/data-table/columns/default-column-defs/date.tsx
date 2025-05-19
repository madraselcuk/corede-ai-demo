import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'
import { format } from 'date-fns'

interface DateColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  dateFormat?: string
  enableSorting?: boolean
}

export function getDateColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
  dateFormat = 'PP',
  enableSorting = true,
}: DateColumnOptions): ColumnDef<T> {
  return {
    accessorKey,
    enableSorting,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className={`flex justify-${headerOrientation}`}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {header}
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = row.getValue<Date>(accessorKey)
      return <div>{date ? format(new Date(date), dateFormat) : ''}</div>
    },
  }
}
