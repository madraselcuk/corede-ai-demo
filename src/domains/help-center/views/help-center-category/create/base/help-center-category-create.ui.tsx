'use client'

import HelpCenterCategoryCreateFormContainer from '../help-center-category-create-form.container'
import HelpCenterCategoryCreateFormUIBase from './help-center-category-create-form.ui'

const HelpCenterCategoryCreateUI = () => {
  return (
    <div>
      <HelpCenterCategoryCreateFormContainer>
        {(props) => <HelpCenterCategoryCreateFormUIBase {...props} />}
      </HelpCenterCategoryCreateFormContainer>
    </div>
  )
}

export default HelpCenterCategoryCreateUI
