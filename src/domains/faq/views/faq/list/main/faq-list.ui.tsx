'use client'

import React from 'react'
import FaqListContainer from '../faq-list.container'
import FaqListTableUI from './faq-list-container.ui'
import { Container } from '@/components/shared/co'

const FaqListUI: React.FC = () => {
  return (
    <Container>
      <FaqListContainer>
        {(props) => <FaqListTableUI {...props} />}
      </FaqListContainer>
    </Container>
  )
}

export default FaqListUI
