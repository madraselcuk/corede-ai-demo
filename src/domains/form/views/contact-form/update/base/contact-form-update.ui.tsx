'use client'

import ContactFormUpdateFormContainer from '../contact-form-update-form.container'
import ContactFormUpdateFormUI from './contact-form-update-form.ui'

const ContactFormUpdateUI = ({ contactFormId }: { contactFormId: string }) => {
  return (
    <div>
      <ContactFormUpdateFormContainer contactFormId={contactFormId}>
        {(props) => <ContactFormUpdateFormUI {...props} />}
      </ContactFormUpdateFormContainer>
    </div>
  )
}

export default ContactFormUpdateUI
