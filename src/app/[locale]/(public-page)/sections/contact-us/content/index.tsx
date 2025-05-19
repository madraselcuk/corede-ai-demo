'use client'
import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import {
  ContactFormCreateFormContainer,
  ContactFormCreateFormContainerUIProps,
} from '@/domains/form/views/contact-form/create'
const Content = () => {
  return (
    <div className="pt-8 pb-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* İletişim bilgileri */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            <ContactInfo />
          </div>

          {/* İletişim formu */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <ContactFormCreateFormContainer>
              {(props: ContactFormCreateFormContainerUIProps) => (
                <ContactForm {...props} />
              )}
            </ContactFormCreateFormContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
