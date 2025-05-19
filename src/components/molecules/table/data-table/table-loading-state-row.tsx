import Loading from '@/components/shared/Loading'
import { TableCell, TableRow } from '@/components/ui/co/table'

interface TableLoadingStateRowProps {
  readonly colSpan: number
  readonly message?: string
}

export function TableLoadingStateRow({
  colSpan,
  // message = i18n.t('common:loading'),
  //CHANGED message silindi, loading componenti kullanıldı.
}: TableLoadingStateRowProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-24 text-center">
        <Loading loading={true} type='cover' />
      </TableCell>
    </TableRow>
  )
}
