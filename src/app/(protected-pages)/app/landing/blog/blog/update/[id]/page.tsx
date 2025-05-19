import { BlogUpdateUI } from '@/domains/blog/views/blog/update'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <BlogUpdateUI blogId={params.id} />
    </>
  )
}
