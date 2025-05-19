import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/co/dropdown-menu'
import { MoreHorizontal, Pencil, Trash } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { IEntity } from '@common_package'
import i18n from '@/localization/i18next'

export interface BaseAction<T extends IEntity> {
  readonly icon?: React.ReactNode
  readonly label: string
  readonly onClick: (entity: T) => void
  readonly tooltip?: string
  readonly show?: boolean
  readonly order?: number
}

export interface ActionColumnProps<T extends IEntity> {
  readonly entity: T
  // Default actions configuration
  readonly defaultActions?: {
    readonly edit?: {
      readonly enabled?: boolean
      readonly isButton?: boolean // false = menu item
      readonly icon?: React.ReactNode
      readonly label?: string
      readonly tooltip?: string
      readonly order?: number
      readonly onEdit?: (entity: T) => void
    }
    readonly delete?: {
      readonly enabled?: boolean
      readonly isButton?: boolean // false = menu item
      readonly icon?: React.ReactNode
      readonly label?: string
      readonly tooltip?: string
      readonly order?: number
      readonly onDelete?: (entity: T) => void
    }
  }
  // Custom actions
  readonly buttonActions?: BaseAction<T>[]
  readonly menuActions?: BaseAction<T>[]
}

export function Actions<T extends { _id: string }>({
  entity,
  defaultActions = {
    edit: {
      enabled: true,
      isButton: false,
      icon: <Pencil className="size-4" />,
      label: i18n.t('common:edit'),
      order: 0,
      onEdit: undefined,
    },
    delete: {
      enabled: true,
      isButton: false,
      icon: <Trash className="size-4" />,
      label: i18n.t('common:delete'),
      order: 1,
      onDelete: undefined,
    },
  },
  buttonActions = [],
  menuActions = [],
}: ActionColumnProps<T>) {
  // Combine and sort all actions
  const getAllMenuActions = () => {
    const actions: BaseAction<T>[] = [...menuActions]

    if (
      defaultActions.edit?.enabled &&
      !defaultActions.edit?.isButton &&
      defaultActions.edit?.onEdit
    ) {
      actions.push({
        icon: defaultActions.edit.icon ?? <Pencil className="size-4" />,
        label: defaultActions.edit.label ?? i18n.t('common:edit'),
        onClick: () => defaultActions.edit?.onEdit?.(entity),
        tooltip: defaultActions.edit.tooltip,
        order: defaultActions.edit.order ?? 0,
      })
    }

    if (
      defaultActions.delete?.enabled &&
      !defaultActions.delete?.isButton &&
      defaultActions.delete?.onDelete
    ) {
      actions.push({
        icon: defaultActions.delete.icon ?? <Trash className="size-4" />,
        label: defaultActions.delete.label ?? i18n.t('common:delete'),
        onClick: () => defaultActions.delete?.onDelete?.(entity),
        tooltip: defaultActions.delete.tooltip,
        order: defaultActions.delete.order ?? 1,
      })
    }

    return actions.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  }

  const getAllButtonActions = () => {
    const actions: BaseAction<T>[] = [...buttonActions]

    if (
      defaultActions.edit?.enabled &&
      defaultActions.edit?.isButton &&
      defaultActions.edit?.onEdit
    ) {
      actions.push({
        icon: defaultActions.edit.icon ?? <Pencil className="size-4" />,
        label: defaultActions.edit.label ?? i18n.t('common:edit'),
        onClick: () => defaultActions.edit?.onEdit?.(entity),
        tooltip: defaultActions.edit.tooltip,
        order: defaultActions.edit.order ?? 0,
      })
    }

    if (
      defaultActions.delete?.enabled &&
      defaultActions.delete?.isButton &&
      defaultActions.delete?.onDelete
    ) {
      actions.push({
        icon: defaultActions.delete.icon ?? <Trash className="size-4" />,
        label: defaultActions.delete.label ?? i18n.t('common:delete'),
        onClick: () => defaultActions.delete?.onDelete?.(entity),
        tooltip: defaultActions.delete.tooltip,
        order: defaultActions.delete.order ?? 1,
      })
    }

    return actions.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  }

  const menuActionItems = getAllMenuActions()
  const buttonActionItems = getAllButtonActions()

  return (
    <div className="flex items-center gap-2">
      {/* Render button actions */}
      {buttonActionItems.map((action, index) => (
        <Button
          key={index}
          onClick={() => action.onClick(entity)}
          title={action.tooltip}
        >
          {action.icon}
          <span className="sr-only">{action.label}</span>
        </Button>
      ))}

      {/* Render menu actions only if there are any */}
      {menuActionItems.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="plain" size="xs">
              <MoreHorizontal className="size-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {menuActionItems.map((action, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => action.onClick(entity)}
                title={action.tooltip}
                className="cursor-pointer"
              >
                {action.icon && <span className="mr-2">{action.icon}</span>}
                {action.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}
