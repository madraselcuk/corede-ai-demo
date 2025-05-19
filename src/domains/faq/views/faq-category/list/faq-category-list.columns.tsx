import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { useI18n } from '@/localization/hooks/useI18n'
import { IFaqCategoryListItemResult } from '@corede_package'

export function faqCategoryColumnDefs(params: {
  onEdit: (faqCategory: IFaqCategoryListItemResult) => void
  onDelete: (faqCategory: IFaqCategoryListItemResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<IFaqCategoryListItemResult>({
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
        header: t('faq:category'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'icon',
        header: t('common:icon'),
      }),
      // Add more columns as needed
    ],
  })
}
