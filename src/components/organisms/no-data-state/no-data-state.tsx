import { i18n } from '@/localization'
import { UserIcon } from 'lucide-react'

export interface NoDataStateProps {
  text?: string
}

export function NoDataState({
  text = i18n.t('common:noResultPlaceholder'),
}: NoDataStateProps) {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center gap-4">
      <UserIcon className="size-16 text-gray-400" />
      <p className="text-lg font-medium text-gray-700">{text}</p>
    </div>
  )
}
