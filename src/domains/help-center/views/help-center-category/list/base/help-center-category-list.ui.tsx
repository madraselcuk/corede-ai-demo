'use client'

import React from 'react'
import HelpCenterCategoryListContainer from '../help-center-category-list.container'
import HelpCenterCategoryListTableUI from './help-center-category-list-container.ui'

const HelpCenterCategoryListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <HelpCenterCategoryListContainer>
        {(props) => <HelpCenterCategoryListTableUI {...props} />}
      </HelpCenterCategoryListContainer>
    </div>
  )
}

export default HelpCenterCategoryListUI
