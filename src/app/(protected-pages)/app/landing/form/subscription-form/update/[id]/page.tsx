import { SubscriptionFormUpdateUI } from '@/domains/form/views/subscription-form/update-user'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <SubscriptionFormUpdateUI subscriptionFormId={params.id} />
    </>
  )
}
