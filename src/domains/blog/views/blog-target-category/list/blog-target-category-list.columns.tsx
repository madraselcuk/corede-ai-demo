'use client'

import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { i18n } from '@/localization'
import { IBlogTargetCategoriesItemResult } from '@corede_package'

export function blogTargetCategoryColumnDefs(params: {
  onEdit: (blogTargetCategory: IBlogTargetCategoriesItemResult) => void
  onDelete: (blogTargetCategory: IBlogTargetCategoriesItemResult) => void
}) {
  return getColumnDefs<IBlogTargetCategoriesItemResult>({
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
        header: i18n.t('blog:blogTargetCategoryName'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'icon',
        header: i18n.t('common:icon'),
      }),
      // Add more columns as needed
    ],
  })
}
