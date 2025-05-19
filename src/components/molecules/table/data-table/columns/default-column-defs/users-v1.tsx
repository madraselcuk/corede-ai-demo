import { ColumnDef } from '@tanstack/react-table'
import { CoAvatar } from '@/components/atoms/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/co/tooltip'

interface UserData {
  image?: string
  name: string
}

interface UsersV1ColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  maxDisplay?: number
}

export function getUsersV1ColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
  maxDisplay = 3,
}: UsersV1ColumnOptions): ColumnDef<T> {
  return {
    accessorKey,
    header: () => {
      return <div className={`flex justify-${headerOrientation}`}>{header}</div>
    },
    cell: ({ row }) => {
      const users = row.getValue<UserData[]>(accessorKey)
      const visibleUsers = users.slice(0, maxDisplay)
      const remainingCount = users.length - maxDisplay

      return (
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {visibleUsers.map((user, index) => (
              <CoAvatar
                key={index}
                rootProps={{
                  className: 'size-8 border-2 border-background',
                }}
                imageProps={{
                  src: user.image,
                  alt: user.name,
                }}
                fallbackProps={{
                  fallbackLetters: user.name.substring(0, 2).toUpperCase(),
                }}
              />
            ))}
            {remainingCount > 0 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="border-background bg-muted flex size-8 items-center justify-center rounded-full border-2 text-xs font-medium">
                      +{remainingCount}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {users
                      .slice(maxDisplay)
                      .map((user) => user.name)
                      .join(', ')}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      )
    },
  }
}
