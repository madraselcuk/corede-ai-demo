import { FaqUpdateUI } from '@/domains/faq/views/faq/update'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <FaqUpdateUI faqId={params.id} />
    </>
  )
}
