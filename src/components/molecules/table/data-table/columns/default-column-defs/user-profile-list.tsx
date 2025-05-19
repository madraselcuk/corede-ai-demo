import { ColumnDef } from '@tanstack/react-table'
import { CoAvatar } from '@/components/atoms/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/co/tooltip'
import { IUserProfile, NameFactory } from '@/@package/common'

interface UserProfileListColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  maxDisplay?: number
}

export function getUserProfileListColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
  maxDisplay = 3,
}: UserProfileListColumnOptions): ColumnDef<T> {
  return {
    accessorKey,
    header: () => {
      return <div className={`flex justify-${headerOrientation}`}>{header}</div>
    },
    cell: ({ row }) => {
      const users = row.getValue<IUserProfile[]>(accessorKey)
      const visibleUsers = users.slice(0, maxDisplay)
      const remainingCount = users.length - maxDisplay

      return (
        <div className="flex items-center justify-center w-full">
          <div className="flex -space-x-2">
            {visibleUsers.map((user, index) => (
              <CoAvatar
                key={index}
                size="md"
                rootProps={{
                  className: 'border-2 border-background',
                }}
                imageProps={{
                  src:
                    user.profileImage?.thumbnailPublicUrl ??
                    user.profileImage?.publicUrl,
                  alt: NameFactory.getFullName({
                    defaultName: '-',
                    name: user.name,
                    surname: user.surname,
                  }),
                }}
                fallbackProps={{
                  fallbackLetters: NameFactory.getFallbackLetters({
                    name: user.name,
                    surname: user.surname,
                  }),
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
