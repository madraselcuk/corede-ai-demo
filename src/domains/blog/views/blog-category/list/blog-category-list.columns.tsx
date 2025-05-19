import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { i18n } from '@/localization'
import { IBlogCategoriesItemResult } from "@corede_package"

export function blogCategoryColumnDefs(params: {
  onEdit: (blogCategory: IBlogCategoriesItemResult) => void
  onDelete: (blogCategory: IBlogCategoriesItemResult) => void
}) {
  return getColumnDefs<IBlogCategoriesItemResult>({
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
        header: i18n.t('blog:blogCategoryName'),
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
