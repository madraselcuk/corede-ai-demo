'use client'

import FaqCreateFormContainer from '../faq-create-form.container'
import FaqCreateFormUI from './faq-create-form.ui'

const FaqCreateUI = () => {
  return (
    <div>
      <FaqCreateFormContainer>
        {(props) => <FaqCreateFormUI {...props} />}
      </FaqCreateFormContainer>
    </div>
  )
}

export default FaqCreateUI
