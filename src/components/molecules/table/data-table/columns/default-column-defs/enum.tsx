import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'
import { EnumTranslationHelper } from '@/localization/helpers/enum.translation.helper'
import Tag from '@/components/ui/Tag'
import { TranslationResourceNamespace } from '@/localization/resources'

/**
 * Custom color scheme for enums
 * [key:enumValue]: [value:className]
 * @example
 * {
 *   active: 'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900',
 *   blocked: 'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900',
 * }
 */
export type CustomColorScheme = {
  [key: string]: string
}

// Color schemes for different types of enums
const enumColorSchemes: Record<string, string[]> = {
  status: [
    'bg-emerald-200 dark:bg-emerald-200 text-gray-900 dark:text-gray-900', // active
    'bg-red-200 dark:bg-red-200 text-gray-900 dark:text-gray-900', // blocked
    'bg-yellow-200 dark:bg-yellow-200 text-gray-900 dark:text-gray-900', // pending
    'bg-blue-200 dark:bg-blue-200 text-gray-900 dark:text-gray-900', // in_progress
    'bg-purple-200 dark:bg-purple-200 text-gray-900 dark:text-gray-900', // completed
  ],
  type: [
    'bg-cyan-200 dark:bg-cyan-200 text-gray-900 dark:text-gray-900',
    'bg-orange-200 dark:bg-orange-200 text-gray-900 dark:text-gray-900',
    'bg-pink-200 dark:bg-pink-200 text-gray-900 dark:text-gray-900',
  ],
  default: [
    'bg-gray-200 dark:bg-gray-200 text-gray-900 dark:text-gray-900',
    'bg-gray-300 dark:bg-gray-300 text-gray-900 dark:text-gray-900',
    'bg-gray-400 dark:bg-gray-400 text-gray-900 dark:text-gray-900',
  ],
}

interface EnumColumnOptions {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  enableSorting?: boolean
  enumName: string
  namespace?: string
  colorScheme?: keyof typeof enumColorSchemes
  customColorScheme?: CustomColorScheme
}

export function getEnumColumnDef<T>({
  accessorKey,
  header,
  headerOrientation = 'center',
  enableSorting = true,
  enumName,
  namespace = TranslationResourceNamespace.common,
  colorScheme = 'status',
  customColorScheme,
}: EnumColumnOptions): ColumnDef<T> {
  // Get the color scheme for this enum type
  const colors = enumColorSchemes[colorScheme] || enumColorSchemes.default

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
      const value = row.getValue(accessorKey) as string | undefined

      if (!value) {
        return <span>-</span>
      }

      const translatedValue = EnumTranslationHelper.getTranslatedEnumValue({
        enumName,
        enumValue: value,
        namespace,
      })

      // Get a consistent color based on the enum value
      // Use the hash of the value to get a consistent index
      let color: string
      if (customColorScheme) {
        color = customColorScheme[value]
      } else {
        const hash = value.split('').reduce((acc, char) => {
          return char.charCodeAt(0) + ((acc << 5) - acc)
        }, 0)
        const colorIndex = Math.abs(hash) % colors.length
        color = colors[colorIndex]
      }

      return (
        <div className="flex items-center">
          <Tag className={color}>
            <span className="capitalize">{translatedValue}</span>
          </Tag>
        </div>
      )
    },
  }
}
