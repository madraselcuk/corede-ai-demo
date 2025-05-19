'use client'

import { FaqListPublicContainer } from '@/domains/faq/views/faq/list-public'
import { Questions } from './Questions'

const FaqContent: React.FC = () => {
  return (
    <FaqListPublicContainer>
      {(props) =>
        props.faqCategoryListIsLoading ||
        props.faqListIsLoading ||
        !props.faqCategoryList ||
        !props.faqListResult ? (
          <></>
        ) : (
          <>
            <Questions {...props} />
          </>
        )
      }
    </FaqListPublicContainer>
  )
}

export default FaqContent
