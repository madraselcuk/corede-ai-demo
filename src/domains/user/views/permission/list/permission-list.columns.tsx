'use client'

import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getEnumColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/enum'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { useI18n } from '@/localization/hooks/useI18n'
import { TranslationResourceNamespace } from '@/localization/resources'
import { IPermissionListItemResult } from '@corede_package'

export function permissionColumnDefs(params: {
  onEdit: (permission: IPermissionListItemResult) => void
  onDelete: (permission: IPermissionListItemResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<IPermissionListItemResult>({
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
          isButton: false,
          order: 1,
          onDelete: params.onDelete,
        },
      },
    },
    additionalColumns: [
      getEnumColumnDef({
        accessorKey: 'action',
        header: t('user:permission_action'),
        enableSorting: true,
        enumName: 'PermissionAction',
        namespace: TranslationResourceNamespace.user,
        colorScheme: 'type',
      }),
      getTextColumnDef({
        accessorKey: 'subject',
        header: t('user:permission_subject'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'scope',
        header: t('user:permission_scope'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'domain',
        header: t('user:permission_domain'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'subdomain',
        header: t('user:permission_subdomain'),
      }),
      getEnumColumnDef({
        accessorKey: 'category',
        header: t('common:category'),
        enableSorting: true,
        enumName: 'PermissionCategory',
        namespace: TranslationResourceNamespace.user,
        colorScheme: 'type',
      }),
    ],
  })
}
