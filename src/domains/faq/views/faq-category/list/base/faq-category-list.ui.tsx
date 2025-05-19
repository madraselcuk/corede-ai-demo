'use client'

import React from 'react'
import FaqCategoryListContainer from '../faq-category-list.container'
import FaqCategoryListTableUI from './faq-category-list-container.ui'

const FaqCategoryListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <FaqCategoryListContainer>
        {(props) => <FaqCategoryListTableUI {...props} />}
      </FaqCategoryListContainer>
    </div>
  )
}

export default FaqCategoryListUI
