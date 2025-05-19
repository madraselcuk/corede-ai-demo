'use client'

import ContactFormDetailContainer from '../contact-form-detail.container'
import ContactFormDetailContainerUI from './contact-form-detail-container.ui'

const ContactFormDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">ContactForm Details</h2>
        <ContactFormDetailContainer>
          {(props) => <ContactFormDetailContainerUI {...props} />}
        </ContactFormDetailContainer>
      </div>
    </div>
  )
}

export default ContactFormDetailUI
