import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'
import Switcher from '@/components/ui/Switcher'

interface SwitcherColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  variantMap?: Record<
    string,
    'default' | 'secondary' | 'success' | 'warning' | 'error'
  >
}

export function getSwitcherColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
}: SwitcherColumnOptions): ColumnDef<T> {
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
      const value = row.getValue<boolean>(accessorKey)
      return <Switcher readOnly checked={value === true} />
    },
  }
}
