// Import Dependencies
import { CalendarDaysIcon } from "@heroicons/react/24/outline"

// Local Imports
import { Avatar } from "@/components/ui-tailux/avatar/Avatar"
import { Box } from "@/components/ui-tailux/box/box"
import { Card } from "@/components/ui-tailux/card/card"

// Types
export interface PostCardProps {
  cover: string
  created_at: string
  title: string
  description: string
  author_name: string
  author_avatar: string | null
}

// ----------------------------------------------------------------------

export function PostCard({
  cover,
  created_at,
  title,
  description,
  author_name,
  author_avatar
}: PostCardProps) {
  return (
    <Box className="flex flex-col">
      <img
        className="h-44 w-full rounded-2xl object-cover object-center"
        src={cover}
        alt={title}
      />
      <Card
        skin="shadow"
        className="-mt-8 flex min-w-0 grow flex-col rounded-2xl p-4"
      >
        <div className="truncate">
          <a
            href="##"
            className="hover:text-primary-600 focus:text-primary-600 dark:text-dark-100 dark:hover:text-primary-400 dark:focus:text-primary-400 text-sm+ font-medium text-gray-700"
          >
            {title}
          </a>
        </div>
        <p className="mt-2 line-clamp-3 grow">{description}</p>
        <div className="mt-4 flex items-center justify-between gap-1.5">
          <a
            href="##"
            className="dark:hover:text-dark-100 flex min-w-0 items-center space-x-2 text-xs hover:text-gray-800 rtl:space-x-reverse"
          >
            <Avatar
              size={6}
              src={author_avatar || undefined}
              name={author_name}
              initialColor="auto"
              classNames={{ display: "text-xs" }}
            />
            <span className="truncate">{author_name}</span>
          </a>
          <div className="dark:text-dark-300 flex shrink-0 items-center space-x-1.5 text-xs text-gray-400 rtl:space-x-reverse">
            <CalendarDaysIcon className="size-4" />
            <span>{created_at}</span>
          </div>
        </div>
      </Card>
    </Box>
  )
}
