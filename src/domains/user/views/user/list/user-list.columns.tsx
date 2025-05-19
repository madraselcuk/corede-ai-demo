'use client'

import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { useI18n } from '@/localization/hooks/useI18n'
import { IUserListItemResult } from '@corede_package'

export function userColumnDefs(params: {
  onEdit: (user: IUserListItemResult) => void
  onDelete: (user: IUserListItemResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<IUserListItemResult>({
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
        accessorKey: 'name',
        header: t('common:name'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'surname',
        header: t('common:surname'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'email',
        header: t('common:email'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'phoneNumber',
        header: t('common:phoneNumber'),
      }),
      getTextColumnDef({
        accessorKey: 'type',
        header: t('common:type'),
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
