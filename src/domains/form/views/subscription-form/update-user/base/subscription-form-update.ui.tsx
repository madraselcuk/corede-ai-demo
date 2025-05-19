'use client'

import SubscriptionFormUpdateFormContainer from '../subscription-form-update-form.container'
import SubscriptionFormUpdateFormUI from './subscription-form-update-form.ui'

const SubscriptionFormUpdateUI = ({
  subscriptionFormId,
}: {
  subscriptionFormId: string
}) => {
  return (
    <div>
      <SubscriptionFormUpdateFormContainer
        subscriptionFormId={subscriptionFormId}
      >
        {(props) => <SubscriptionFormUpdateFormUI {...props} />}
      </SubscriptionFormUpdateFormContainer>
    </div>
  )
}

export default SubscriptionFormUpdateUI
