import { IAuthorListItemResult } from '@corede_package'
import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { i18n } from '@/localization'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { SocialMediaLinks } from '@/domains/blog/components/social-media-links/social-media-links'

export function authorColumnDefs(params: {
  onEdit: (author: IAuthorListItemResult) => void
  onDelete: (author: IAuthorListItemResult) => void
}) {
  return getColumnDefs<IAuthorListItemResult>({
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
        header: i18n.t('name'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'bio',
        header: i18n.t('blog:bio'),
      }),
      {
        id: 'socialLinks',
        header: i18n.t('common:socialLinks'),
        cell: ({ row }) => {
          const author = row.original
          return (
            <SocialMediaLinks
              facebook={author.facebook}
              instagram={author.instagram}
              linkedIn={author.linkedIn}
              x={author.x}
            />
          )
        },
      },
      getDateColumnDef({
        accessorKey: 'createdAt',
        header: i18n.t('common:createdAt'),
      }),
    ],
  })
}
