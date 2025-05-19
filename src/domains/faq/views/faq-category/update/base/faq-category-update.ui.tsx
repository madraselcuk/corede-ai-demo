'use client'

import { FaqCategoryUpdateFormContainer } from '../faq-category-update-form.container'
import FaqCategoryUpdateFormUIBase from './faq-category-update-form.ui'

const FaqCategoryUpdateUIBase = () => {
  return (
    <div>
      <FaqCategoryUpdateFormContainer>
        {(props) => <FaqCategoryUpdateFormUIBase {...props} />}
      </FaqCategoryUpdateFormContainer>
    </div>
  )
}

export default FaqCategoryUpdateUIBase
