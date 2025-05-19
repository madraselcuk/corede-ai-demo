'use client'

import { HelpCenterCategoryUpdateFormContainer } from '../help-center-category-update-form.container'
import HelpCenterCategoryUpdateFormUIBase from './help-center-category-update-form.ui'

const HelpCenterCategoryUpdateUIBase = () => {
  return (
    <div>
      <HelpCenterCategoryUpdateFormContainer>
        {(props) => <HelpCenterCategoryUpdateFormUIBase {...props} />}
      </HelpCenterCategoryUpdateFormContainer>
    </div>
  )
}

export default HelpCenterCategoryUpdateUIBase
