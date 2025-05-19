'use client'

import React from 'react'
import FAQSection from './FAQSection'
import { FaqListPopularPublicContainer } from '@/domains/faq/views/faq/list-popular-public'

const index: React.FC = () => {
  return (
    <FaqListPopularPublicContainer>
      {(props) =>
        props.isLoading || !(props.data?.data?.length >= 0) ? (
          <></>
        ) : (
          <FAQSection faqListResult={props.data} />
        )
      }
    </FaqListPopularPublicContainer>
  )
}

export default index
