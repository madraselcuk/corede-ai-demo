import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown, Eye, EyeOff, User } from 'lucide-react'
import { IUserProfile, NameFactory } from '@/@package/common'
import { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/co/tooltip'
import Avatar from '@/components/ui/Avatar'

interface UserProfileColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
}

export function getUserProfileColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
}: UserProfileColumnOptions): ColumnDef<T> {
  const [isCompactView, setIsCompactView] = useState(false)

  return {
    accessorKey,
    header: ({ column }) => {
      return (
        <div className={`flex justify-${headerOrientation} items-center gap-2`}>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {header}
            <ArrowUpDown className="ml-2 size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCompactView(!isCompactView)}
            title={isCompactView ? 'Show full view' : 'Show compact view'}
          >
            {isCompactView ? (
              <Eye className="size-4" />
            ) : (
              <EyeOff className="size-4" />
            )}
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const user = row.getValue<IUserProfile>(accessorKey)

      if (!user) {
        return <div className="flex items-center justify-center">-</div>
      }

      const fullName = NameFactory.getFullName({
        name: user?.name,
        surname: user?.surname,
      })

      if (isCompactView) {
        return (
          <div className="flex items-center justify-center">
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <div className="flex items-center">
                    <Avatar
                      size="sm"
                      shape="circle"
                      src={
                        user?.profileImage?.thumbnailPublicUrl ??
                        user?.profileImage?.publicUrl
                      }
                      icon={<User />}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{fullName}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )
      }

      return (
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center">
            <Avatar
              size="sm"
              shape="circle"
              src={
                user?.profileImage?.thumbnailPublicUrl ??
                user?.profileImage?.publicUrl
              }
              icon={<User />}
            />
          </div>
          <span>{fullName}</span>
        </div>
      )
    },
  }
}
