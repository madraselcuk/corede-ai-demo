import { UserUpdateUI } from '@/domains/user/views/user/update'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <UserUpdateUI userId={params.id} />
    </>
  )
}
