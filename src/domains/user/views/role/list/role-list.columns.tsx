'use client'

import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { useI18n } from '@/localization/hooks/useI18n'
import { IRoleListItemResult } from '@corede_package'
import { getEnumColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/enum'
import { TranslationResourceNamespace } from '@/localization/resources'

export function roleColumnDefs(params: {
  onEdit: (role: IRoleListItemResult) => void
  onDelete: (role: IRoleListItemResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<IRoleListItemResult>({
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
      getEnumColumnDef({
        accessorKey: 'type',
        header: t('common:type'),
        enableSorting: true,
        enumName: 'RoleType',
        namespace: TranslationResourceNamespace.user,
        colorScheme: 'type',
      }),
      getTextColumnDef({
        accessorKey: 'description',
        header: t('common:description'),
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
