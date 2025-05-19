import { NotificationUpdateUI } from '@/domains/notification/views/notification/update'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <NotificationUpdateUI notificationId={params.id} />
    </>
  )
}
