'use client'

import { FaqUpdateFormContainer } from '../faq-update-form.container'
import { FaqUpdateFormUI } from './faq-update-form.ui'

export const FaqUpdateUI = ({ entityId }: { entityId: string }) => {
  return (
    <div>
      <FaqUpdateFormContainer entityId={entityId}>
        {(props) => <FaqUpdateFormUI {...props} />}
      </FaqUpdateFormContainer>
    </div>
  )
}
