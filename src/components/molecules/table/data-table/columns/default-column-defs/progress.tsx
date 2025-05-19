import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'
import { CoProgress } from '@/components/atoms/progress/progress'

interface ProgressColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
}

export function getProgressColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
}: ProgressColumnOptions): ColumnDef<T> {
  return {
    accessorKey,
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
      const value = row.getValue<number>(accessorKey)
      return <CoProgress value={value} />
    }
  }
}
