'use client'

import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { getEntityProfileColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/entity-profile'
import { getEnumColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/enum'
import { getLanguageColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/language'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'

import { useI18n } from '@/localization/hooks/useI18n'
import { INotificationHistoryListItemResult } from '@corede_package'
import { INotification } from '@corede_package'

export function notificationHistoryColumnDefs(params: {
  onEdit: (notificationHistory: INotificationHistoryListItemResult) => void
  onDelete: (notificationHistory: INotificationHistoryListItemResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<INotificationHistoryListItemResult>({
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
          enabled: true,
          isButton: false,
          order: 1,
          onDelete: params.onDelete,
        },
      },
    },
    additionalColumns: [
      getTextColumnDef({
        accessorKey: 'status',
        header: t('common:status'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'notification.name',
        header: t('common:name'),
        enableSorting: true,
      }),
      getEnumColumnDef({
        accessorKey: 'notification.type',
        header: t('common:type'),
        enableSorting: true,
        enumName: 'NotificationType',
        namespace: 'notification',
        colorScheme: 'type',
      }),
      getEnumColumnDef({
        accessorKey: 'channelType',
        header: t('notification:channelType'),
        enableSorting: true,
        enumName: 'NotificationChannelType',
        namespace: 'notification',
        colorScheme: 'type',
      }),
      getEntityProfileColumnDef<
        INotificationHistoryListItemResult,
        INotification
      >({
        accessorKey: 'senderUser',
        header: t('notification:senderUser'),
        convertColumnValue: (value) => {
          return {
            _id: value._id.toString(),
            name: value.name,
          }
        },
      }),

      getEntityProfileColumnDef<
        INotificationHistoryListItemResult,
        INotification
      >({
        accessorKey: 'sentUser',
        header: t('notification:sentUser'),
        convertColumnValue: (value) => {
          return {
            _id: value._id.toString(),
            name: value.name,
          }
        },
      }),
      getLanguageColumnDef({
        accessorKey: 'language',
        header: t('common:language'),
        enableSorting: true,
      }),

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
