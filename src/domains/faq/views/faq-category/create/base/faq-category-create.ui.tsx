'use client'

import FaqCategoryCreateFormContainer from '../faq-category-create-form.container'
import FaqCategoryCreateFormUIBase from './faq-category-create-form.ui'

const FaqCategoryCreateUI = () => {
  return (
    <div>
      <FaqCategoryCreateFormContainer>
        {(props) => <FaqCategoryCreateFormUIBase {...props} />}
      </FaqCategoryCreateFormContainer>
    </div>
  )
}

export default FaqCategoryCreateUI
