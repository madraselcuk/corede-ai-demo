import { HelpCenterUpdateUI } from '@/domains/help-center/views/help-center/update'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <HelpCenterUpdateUI helpCenterId={params.id} />
    </>
  )
}
