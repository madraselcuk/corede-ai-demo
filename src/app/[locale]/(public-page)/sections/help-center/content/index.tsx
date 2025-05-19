'use client'

import React from 'react'
import HelpCenterListPublicContainer from '@/domains/help-center/views/help-center/list-public/help-center-list-public.func.container'
import { Content } from './Content'

const HelpCenterContent = () => {
  return (
    <HelpCenterListPublicContainer>
      {(props) =>
        props.helpCenterListIsLoading ||
        props.helpCenterCategoryListIsLoading ||
        !props.helpCenterListResult ||
        !props.helpCenterCategoryList ? undefined : (
          <Content {...props} />
        )
      }
    </HelpCenterListPublicContainer>
  )
}

export default HelpCenterContent
