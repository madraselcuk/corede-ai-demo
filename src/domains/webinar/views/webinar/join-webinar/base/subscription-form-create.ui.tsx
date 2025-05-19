'use client'

import SubscriptionFormCreateFormContainer from '../webinar-join-public.func.container'
import CreateSubscriptionFormFormUI from './subscription-form-create-form.ui'

const SubscriptionFormCreateUI = () => {
  return (
    <div>
      <SubscriptionFormCreateFormContainer>
        {(props) => <CreateSubscriptionFormFormUI {...props} />}
      </SubscriptionFormCreateFormContainer>
    </div>
  )
}

export default SubscriptionFormCreateUI
