'use client'

import { HelpCenterCategoryDetailContainer } from '..'
import HelpCenterCategoryDetailContent from './help-center-category-detail-container.ui'

export const HelpCenterCategoryDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">FAQ Details</h2>
        <HelpCenterCategoryDetailContainer>
          {(props) => <HelpCenterCategoryDetailContent {...props} />}
        </HelpCenterCategoryDetailContainer>
      </div>
    </div>
  )
}
