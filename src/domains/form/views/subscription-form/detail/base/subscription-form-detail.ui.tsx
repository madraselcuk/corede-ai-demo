'use client'

import SubscriptionFormDetailContainer from '../subscription-form-detail.container'
import SubscriptionFormDetailContainerUIBase from './subscription-form-detail-container.ui'

const SubscriptionFormDetailUIBase = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">SubscriptionForm Details</h2>
        <SubscriptionFormDetailContainer>
          {(props) => <SubscriptionFormDetailContainerUIBase {...props} />}
        </SubscriptionFormDetailContainer>
      </div>
    </div>
  )
}

export default SubscriptionFormDetailUIBase
