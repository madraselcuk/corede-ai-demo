import {i18n} from '@/localization'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export interface NoConnectionStateProps {
  text?: string
}

export function NoConnectionState({
  text = i18n.t("common:connectionError")
}: NoConnectionStateProps) {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center gap-4">
      <ExclamationTriangleIcon className="size-16 text-red-500" />
      <p className="text-lg font-medium text-gray-700">{text}</p>
    </div>
  )
}
