import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { useI18n } from '@/localization/hooks/useI18n'
import { IHelpCenterCategoryListItemResult } from '@corede_package'

export function helpCenterCategoryColumnDefs(params: {
  onEdit: (helpCenterCategory: IHelpCenterCategoryListItemResult) => void
  onDelete: (helpCenterCategory: IHelpCenterCategoryListItemResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<IHelpCenterCategoryListItemResult>({
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
        header: t('helpCenter:category'),
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
