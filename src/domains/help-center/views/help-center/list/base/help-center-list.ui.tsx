'use client'

import React from 'react'
import HelpCenterListContainer from '../help-center-list.container'
import HelpCenterListTableUI from './help-center-list-container.ui'

const HelpCenterListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <HelpCenterListContainer>
        {(props) => <HelpCenterListTableUI {...props} />}
      </HelpCenterListContainer>
    </div>
  )
}

export default HelpCenterListUI
