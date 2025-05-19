'use client'

import ContactFormCreateFormContainer from '../contact-form-create-form.container'
import CreateContactFormFormUI from './contact-form-create-form.ui'

const ContactFormCreateUI = () => {
  return (
    <div>
      <ContactFormCreateFormContainer>
        {(props) => <CreateContactFormFormUI {...props} />}
      </ContactFormCreateFormContainer>
    </div>
  )
}

export default ContactFormCreateUI
