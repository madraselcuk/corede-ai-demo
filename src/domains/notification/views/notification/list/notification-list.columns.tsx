'use client'

import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { getEnumColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/enum'
import { useI18n } from '@/localization/hooks/useI18n'
import { INotificationListItemResult } from '@corede_package'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'
import { CoChip } from '@/components/atoms/chip/chip'

export function notificationColumnDefs(params: {
  onEdit: (notification: INotificationListItemResult) => void
}) {
  const { t } = useI18n()

  // Custom column definition for channels
  const channelsColumnDef: ColumnDef<INotificationListItemResult> = {
    accessorKey: 'channels',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {t('notification:channels')}
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const channels = row.getValue<any>('channels')
      const channelTypes = Object.keys(channels || {})

      return (
        <div className="flex flex-wrap gap-1">
          {channelTypes.map((channelType) => {
            let variant:
              | 'default'
              | 'secondary'
              | 'success'
              | 'warning'
              | 'error' = 'default'

            switch (channelType) {
              case 'email':
                variant = 'success'
                break
              case 'sms':
                variant = 'warning'
                break
              case 'push':
                variant = 'secondary'
                break
              case 'web':
                variant = 'default'
                break
            }

            return (
              <CoChip key={channelType} variant={variant}>
                {channelType}
              </CoChip>
            )
          })}
        </div>
      )
    },
  }

  return getColumnDefs<INotificationListItemResult>({
    selectColumn: {
      enabled: true,
    },
    actionsColumnDef: {
      defaultActions: {
        edit: {
          enabled: true,
          isButton: false,
          order: 0,
          onEdit: params.onEdit,
        },
        delete: {
          enabled: false,
        },
      },
    },
    additionalColumns: [
      getTextColumnDef({
        accessorKey: 'name',
        header: t('common:name'),
        enableSorting: true,
      }),
      getEnumColumnDef({
        accessorKey: 'type',
        header: t('common:type'),
        enumName: 'NotificationType',
        namespace: 'notification',
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'domain',
        header: t('notification:domain'),
        enableSorting: true,
      }),
      channelsColumnDef,
      getDateColumnDef({
        accessorKey: 'createdAt',
        header: t('common:createdAt'),
        enableSorting: true,
      }),
      getDateColumnDef({
        accessorKey: 'updatedAt',
        header: t('common:updatedAt'),
        enableSorting: true,
      }),
    ],
  })
}
