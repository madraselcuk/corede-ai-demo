import { CoAutocompleteSelectProps } from '@/components/atoms/select-autocomplete'
import { i18n } from '@/localization'
import { Skeleton } from '@/components/ui/co/skeleton'
import { Check } from 'lucide-react'

export const selectAutocompleteTheme: Partial<CoAutocompleteSelectProps> = {
  inputClassName: 'text-base',
  listContainerClassName:
    'animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-white outline-none',
  listClassName: 'rounded-lg ring-1 ring-slate-200',
  listGroupClassName: '',
  listItem: {
    listItemClassName: 'flex w-full items-center gap-2',
    listItemClassNameAddForSelected: 'pl-8',
    listItemSelectedElement: <Check className="w-4" />,
  },
  emptyProps: {
    emptyMessage: i18n.t('common:noResultPlaceholder'),
    emptyClassName: 'select-none rounded-sm px-2 py-3 text-center text-sm',
  },
  loadingProps: {
    loadingElement: (
      <div className="p-1">
        <Skeleton className="h-8 w-full" />
      </div>
    ),
  },
}
