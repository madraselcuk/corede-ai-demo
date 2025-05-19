import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'
import Avatar from '@/components/ui/Avatar'
import { Language } from '@/@package/common/enums/language.enum'

interface LanguageColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  enableSorting?: boolean
}

const languageFlagMap: Record<Language, string> = {
  [Language.en]: 'US',
  [Language.fr]: 'FR',
  [Language.de]: 'DE',
  [Language.it]: 'IT',
  [Language.pt]: 'PT',
  [Language.ru]: 'RU',
  [Language.es]: 'ES',
  [Language.tr]: 'TR',
}

export function getLanguageColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
  enableSorting = true,
}: LanguageColumnOptions): ColumnDef<T> {
  return {
    accessorKey,
    enableSorting,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className={`flex justify-${headerOrientation}`}
          onClick={() =>
            enableSorting &&
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          {header}
          {enableSorting && <ArrowUpDown className="ml-2 size-4" />}
        </Button>
      )
    },
    cell: ({ row }) => {
      const value = row.getValue(accessorKey) as Language | undefined

      if (!value || !(value in Language)) {
        return <span>-</span>
      }

      const flag = languageFlagMap[value]
      return (
        <div className="flex items-center justify-center w-full">
          <Avatar size={24} shape="circle" src={`/img/countries/${flag}.png`} />
        </div>
      )
    },
  }
}
