import { TableCell, TableRow } from '@/components/ui/co/table'
import i18n from '@/localization/i18next'
import { CircleSlash } from 'lucide-react'

interface TableEmptyStateRowProps {
  readonly colSpan: number
  readonly message?: string
}

export function TableEmptyStateRow({
  colSpan,
  message = i18n.t('common:noResultPlaceholder'),
}: TableEmptyStateRowProps) {
  return (
    <TableRow>
      <TableCell
        colSpan={colSpan}
        className="h-[380px]"
      >
        <div className="w-[calc(100dvw-100px)] md:w-[calc(100dvw-200px)] lg:w-[calc(100dvw-420px)]">
          <div className="flex flex-col justify-center gap-2 text-lg text-center items-center">
            <CircleSlash className="size-10 text-gray-500" />
            {message}
          </div>
        </div>
      </TableCell>
    </TableRow>
  )
}
