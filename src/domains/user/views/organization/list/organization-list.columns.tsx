'use client'

import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { useI18n } from '@/localization/hooks/useI18n'
import { IOrganizationListItemResult } from '@corede_package'

export function organizationColumnDefs(params: {
  onEdit: (organization: IOrganizationListItemResult) => void
  onDelete: (organization: IOrganizationListItemResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<IOrganizationListItemResult>({
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
        accessorKey: 'status',
        header: t('common:status'),
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
