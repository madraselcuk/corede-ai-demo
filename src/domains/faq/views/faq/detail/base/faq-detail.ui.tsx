'use client'

import FaqDetailContainer from '../faq-detail.container'
import FaqDetailContent from './faq-detail-container.ui'

export const FaqDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">FAQ Details</h2>
        <FaqDetailContainer>
          {(props) => <FaqDetailContent {...props} />}
        </FaqDetailContainer>
      </div>
    </div>
  )
}
