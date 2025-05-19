'use client'

import HelpCenterDetailContainer from '../help-center-detail.container'
import HelpCenterDetailContent from './help-center-detail-container.ui'

export const HelpCenterDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">FAQ Details</h2>
        <HelpCenterDetailContainer>
          {(props) => <HelpCenterDetailContent {...props} />}
        </HelpCenterDetailContainer>
      </div>
    </div>
  )
}
