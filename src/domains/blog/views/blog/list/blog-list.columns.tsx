import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getChipListColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/chip-list'
import { getEntityProfileColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/entity-profile'
import { getLanguageColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/language'
import {
  getRichTextColumnDef,
  getTextColumnDef,
} from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { getUserProfileColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/user-profile'
import { useI18n } from '@/localization/hooks/useI18n'
import { IBlogCategory, IBlogListItemResult } from '@corede_package'

export function blogColumnDefs(params: {
  onEdit: (blog: IBlogListItemResult) => void
  onDelete: (blog: IBlogListItemResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<IBlogListItemResult>({
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
        accessorKey: 'title',
        header: t('blog:title'),
        enableSorting: true,
      }),
      // getTextColumnDef({
      //   accessorKey: 'content',
      //   header: t('blog:content'),
      // }),
      getRichTextColumnDef({
        accessorKey: 'content',
        header: t('blog:content'),
      }),
      getTextColumnDef({
        accessorKey: 'slug',
        header: t('blog:slug'),
      }),
      getTextColumnDef({
        accessorKey: 'readingTime',
        header: t('blog:readingTime'),
        enableSorting: true,
      }),
      getChipListColumnDef({
        accessorKey: 'tags',
        header: t('blog:tags'),
      }),
      getChipListColumnDef({
        accessorKey: 'references',
        header: t('blog:references'),
      }),
      getUserProfileColumnDef({
        accessorKey: 'author',
        header: t('blog:author'),
      }),
      getEntityProfileColumnDef<IBlogListItemResult, IBlogCategory>({
        accessorKey: 'category',
        header: t('blog:blogCategory'),
        convertColumnValue: (value) => {
          return {
            _id: value._id.toString(),
            name: value.name,
            nameTranslation: value.nameTranslation,
            icon: value.icon,
          }
        },
      }),
      getEntityProfileColumnDef<IBlogListItemResult, IBlogCategory>({
        accessorKey: 'targetCategory',
        header: t('blog:targetCategory'),
        convertColumnValue: (value) => {
          return {
            _id: value._id.toString(),
            name: value.name,
            nameTranslation: value.nameTranslation,
            icon: value.icon,
          }
        },
      }),
      getLanguageColumnDef({
        accessorKey: 'language',
        header: t('common:language'),
      }),
    ],
  })
}
