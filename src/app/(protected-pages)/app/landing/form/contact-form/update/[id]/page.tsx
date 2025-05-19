import { ContactFormUpdateUI } from '@/domains/form/views/contact-form/update'

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <ContactFormUpdateUI contactFormId={params.id} />
    </>
  )
}
