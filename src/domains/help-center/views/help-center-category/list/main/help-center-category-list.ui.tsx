'use client'

import React from 'react'
import HelpCenterCategoryListContainer from '../help-center-category-list.container'
import HelpCenterCategoryListTableUI from './help-center-category-list-container.ui'
import { Container } from '@/components/shared/co'

export const HelpCenterCategoryListUI: React.FC = () => {
  return (
    <Container>
      <HelpCenterCategoryListContainer>
        {(props) => <HelpCenterCategoryListTableUI {...props} />}
      </HelpCenterCategoryListContainer>
    </Container>
  )
}
