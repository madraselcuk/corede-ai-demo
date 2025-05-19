'use client'

import SubscriptionFormListContainer from '../subscription-form-list.container'
import SubscriptionFormListTableUIBase from './subscription-form-list-container.ui'

const SubscriptionFormListUIBase = () => {
  return (
    <div className="container mx-auto py-10">
      <SubscriptionFormListContainer>
        {(props) => <SubscriptionFormListTableUIBase {...props} />}
      </SubscriptionFormListContainer>
    </div>
  )
}

export default SubscriptionFormListUIBase
