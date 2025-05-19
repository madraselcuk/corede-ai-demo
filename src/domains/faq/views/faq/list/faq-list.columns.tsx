'use client'

import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { getEntityProfileColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/entity-profile'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { useI18n } from '@/localization/hooks/useI18n'
import { IFaqCategory, IFaqListItemResult } from '@corede_package'
import { ColumnDef } from '@tanstack/react-table'

export function faqColumnDefs(params: {
  onEdit: (faq: IFaqListItemResult) => void
  onDelete: (faq: IFaqListItemResult) => void
}): ColumnDef<IFaqListItemResult>[] {
  const { t } = useI18n()

  return getColumnDefs<IFaqListItemResult>({
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
        accessorKey: 'question',
        header: t('common:question'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'answer',
        header: t('common:answer'),
      }),
      getTextColumnDef({
        accessorKey: 'readingTime',
        header: t('common:readingTime'),
        enableSorting: true,
      }),
      getEntityProfileColumnDef<IFaqListItemResult, IFaqCategory>({
        accessorKey: 'category',
        header: t('common:category'),
        convertColumnValue: (value) => {
          return {
            _id: value._id.toString(),
            name: value.name,
            nameTranslation: value.nameTranslation,
            icon: value.icon,
          }
        },
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
