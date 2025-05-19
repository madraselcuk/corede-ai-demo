import { OrganizationUpdateUI } from '@/domains/user/views/organization/update'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <OrganizationUpdateUI organizationId={params.id} />
    </>
  )
}
