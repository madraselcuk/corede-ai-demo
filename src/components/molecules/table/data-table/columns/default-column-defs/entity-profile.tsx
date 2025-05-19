import { ColumnDef } from '@tanstack/react-table'
import { IBaseTranslation, IEntity } from '@/@package/common'
import { useI18n } from '@/localization/hooks/useI18n'

interface IEntityProfile extends IEntity {
  name: string
  nameTranslation?: IBaseTranslation
  icon?: string
  color?: string
}

interface EntityProfileColumnOptions<TValue> {
  accessorKey: string
  header: string
  headerOrientation?: 'left' | 'right' | 'center'
  /**
   * Convert the column value to an IEntityProfile object
   * - If not provided, the column value will be used as the IEntityProfile object
   * @param value - The column value
   * @returns The IEntityProfile object
   */
  convertColumnValue?: (value: TValue) => IEntityProfile
}

export function getEntityProfileColumnDef<T, TValue>({
  accessorKey,
  header,
  headerOrientation = 'center',
  convertColumnValue,
}: EntityProfileColumnOptions<TValue>): ColumnDef<T> {
  const { currentLanguage } = useI18n()

  return {
    accessorKey,
    header: () => {
      return <div className={`flex justify-${headerOrientation}`}>{header}</div>
    },
    cell: ({ row }) => {
      const value = row.getValue<TValue>(accessorKey)
      const entityProfile = convertColumnValue
        ? convertColumnValue(value)
        : (value as IEntityProfile)

      return (
        <div className="flex items-center justify-center w-full">
          {/* {entityProfile.icon && (
            <Avatar
              // className={entityProfile.color}
              icon={entityProfile.icon}
              shape="square"
            />
          )} */}
          <span>
            {entityProfile.nameTranslation?.[currentLanguage] ??
              entityProfile.name}
          </span>
        </div>
      )
    },
  }
}
