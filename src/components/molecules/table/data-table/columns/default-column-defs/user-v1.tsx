import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'
import { CoAvatar } from '@/components/atoms/avatar'

interface UserV1Data {
  image?: string
  name: string
}

interface UserV1ColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
}

export function getUserV1ColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
}: UserV1ColumnOptions): ColumnDef<T> {
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
      const user = row.getValue<UserV1Data>(accessorKey)
      return (
        <div className="flex items-center gap-2">
          <CoAvatar
            rootProps={{ className: "size-8" }}
            imageProps={{
              src: user.image,
              alt: user.name
            }}
            fallbackProps={{
              fallbackLetters: user.name.substring(0, 2).toUpperCase()
            }}
          />
          <span>{user.name}</span>
        </div>
      )
    }
  }
}
