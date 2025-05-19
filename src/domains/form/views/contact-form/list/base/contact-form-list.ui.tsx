'use client'

import ContactFormListContainer from '../contact-form-list.container'
import ContactFormListTableUIBase from './contact-form-list-container.ui'

const ContactFormListUIBase = () => {
  return (
    <div className="container mx-auto py-10">
      <ContactFormListContainer>
        {(props) => <ContactFormListTableUIBase {...props} />}
      </ContactFormListContainer>
    </div>
  )
}

export default ContactFormListUIBase
