import { WebinarUpdateUI } from '@/domains/webinar/views/webinar/update'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <WebinarUpdateUI webinarId={params.id} />
    </>
  )
}
