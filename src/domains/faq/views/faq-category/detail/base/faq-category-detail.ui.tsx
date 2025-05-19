'use client'

import { FaqCategoryDetailContainer } from '..'
import FaqCategoryDetailContent from './faq-category-detail-container.ui'

export const FaqCategoryDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">FAQ Details</h2>
        <FaqCategoryDetailContainer>
          {(props) => <FaqCategoryDetailContent {...props} />}
        </FaqCategoryDetailContainer>
      </div>
    </div>
  )
}
