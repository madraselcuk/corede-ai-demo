'use client'

import React from 'react'
import HelpCenterListContainer from '../help-center-list.container'
import HelpCenterListTableUI from './help-center-list-container.ui'
import { Container } from '@/components/shared/co'

const HelpCenterListUI: React.FC = () => {
  return (
    <Container>
      <HelpCenterListContainer>
        {(props) => <HelpCenterListTableUI {...props} />}
      </HelpCenterListContainer>
    </Container>
  )
}

export default HelpCenterListUI
