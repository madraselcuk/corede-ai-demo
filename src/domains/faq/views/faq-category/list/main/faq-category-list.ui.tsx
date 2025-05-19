'use client'

import React from 'react'
import FaqCategoryListContainer from '../faq-category-list.container'
import FaqCategoryListTableUI from './faq-category-list-container.ui'
import { Container } from '@/components/shared/co'

export const FaqCategoryListUI: React.FC = () => {
  return (
    <Container>
      <FaqCategoryListContainer>
        {(props) => <FaqCategoryListTableUI {...props} />}
      </FaqCategoryListContainer>
    </Container>
  )
}
