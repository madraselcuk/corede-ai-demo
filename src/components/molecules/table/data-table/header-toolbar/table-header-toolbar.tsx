'use client'

import { Table } from '@tanstack/react-table'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { X, RefreshCw, ListFilter } from 'lucide-react'
import { CoDateRangePicker } from '@/components/atoms/date-range-picker/date-range-picker'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/co/dropdown-menu'
import { IDateFilter } from '@common_package'
import { useI18n } from '@/localization/hooks/useI18n'

export interface IBaseHeaderToolbarFilter {
  readonly searchQuery?: string
  readonly dateRange?: IDateFilter
}

export interface BaseTableHeaderToolbarProps<TData> {
  readonly table?: Table<TData>
}

export interface OptionalTableHeaderToolbarProps<
  TFilter extends IBaseHeaderToolbarFilter,
> {
  readonly search?: {
    enabled?: boolean
    placeholder?: string
  }
  readonly dateRange?: {
    enabled?: boolean
    placeholder?: string
  }
  readonly filters?: TFilter
  readonly setFilters?: (filters: TFilter) => void
  readonly handleRefresh?: () => void
  readonly children?: React.ReactNode
}

export interface TableHeaderToolbarProps<
  TData,
  TFilter extends IBaseHeaderToolbarFilter,
> extends BaseTableHeaderToolbarProps<TData>,
    OptionalTableHeaderToolbarProps<TFilter> {}

export function TableHeaderToolbar<
  TData,
  TFilter extends IBaseHeaderToolbarFilter,
>({
  table,
  filters,
  setFilters,
  search,
  dateRange,
  children,
  handleRefresh,
}: TableHeaderToolbarProps<TData, TFilter>) {
  const { t } = useI18n()

  const isFiltered = !!filters?.searchQuery || !!filters?.dateRange

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="w-full flex flex-col md:flex-row  flex-1 gap-4 items-center ">
        {search?.enabled && (
          <Input
            // wait={1000}
            placeholder={search.placeholder ?? t('common:searchPlaceholder')}
            value={filters?.searchQuery}
            onChange={(event) => {
              setFilters?.({
                ...filters,
                searchQuery: event.target.value,
              } as TFilter)
            }}
            className="h-8 w-full"
          />
        )}
        <div className="w-full md:w-fit flex flex-col md:flex-row  gap-2">
          {dateRange?.enabled && (
            <CoDateRangePicker
              startDate={filters?.dateRange?.from}
              endDate={filters?.dateRange?.to}
              placeholder={
                dateRange.placeholder ?? t('common:dateRangePlaceholder')
              }
              onChange={(range: IDateFilter | undefined) => {
                setFilters?.({
                  ...filters,
                  dateRange: range,
                } as TFilter)
              }}
            />
          )}
          {isFiltered && (
            <Button
              onClick={() => setFilters?.({} as TFilter)}
              className="w-full md:w-fit "
              variant="plain"
            >
              <div className="flex items-center justify-center gap-2">
                <span>{t('common:reset')}</span>
                <span>
                  <X className="size-4" />
                </span>
              </div>
            </Button>
          )}
          {children}
        </div>
      </div>
      <div className="w-full md:w-fit flex flex-col md:flex-row gap-2">
        {table && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-full md:w-fit md:ml-2">
                <ListFilter className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {handleRefresh && (
          <Button
            onClick={handleRefresh}
            className="w-full md:w-fit"
          >
            <RefreshCw className="size-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
