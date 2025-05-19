'use client'

import SubscriptionFormUpdateFormContainer from '../subscription-form-update-form.container'
import SubscriptionFormUpdateFormUIBase from './subscription-form-update-form.ui'

const SubscriptionFormUpdateUIBase = () => {
  return (
    <div>
      <SubscriptionFormUpdateFormContainer>
        {(props) => <SubscriptionFormUpdateFormUIBase {...props} />}
      </SubscriptionFormUpdateFormContainer>
    </div>
  )
}

export default SubscriptionFormUpdateUIBase
