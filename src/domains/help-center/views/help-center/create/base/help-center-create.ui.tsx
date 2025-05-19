'use client'

import HelpCenterCreateFormContainer from '../help-center-create-form.container'
import HelpCenterCreateFormUI from './help-center-create-form.ui'

const HelpCenterCreateUI = () => {
  return (
    <div>
      <HelpCenterCreateFormContainer>
        {(props) => <HelpCenterCreateFormUI {...props} />}
      </HelpCenterCreateFormContainer>
    </div>
  )
}

export default HelpCenterCreateUI
