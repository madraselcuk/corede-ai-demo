'use client'

import React from 'react'
import FaqListContainer from '../faq-list.container'
import FaqListTableUI from './faq-list-container.ui'

const FaqListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <FaqListContainer>
        {(props) => <FaqListTableUI {...props} />}
      </FaqListContainer>
    </div>
  )
}

export default FaqListUI
