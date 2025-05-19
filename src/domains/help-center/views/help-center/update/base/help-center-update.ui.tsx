'use client'

import { HelpCenterUpdateFormContainer } from '../help-center-update-form.container'
import { HelpCenterUpdateFormUI } from './help-center-update-form.ui'

export const HelpCenterUpdateUI = ({ entityId }: { entityId: string }) => {
  return (
    <div>
      <HelpCenterUpdateFormContainer entityId={entityId}>
        {(props) => <HelpCenterUpdateFormUI {...props} />}
      </HelpCenterUpdateFormContainer>
    </div>
  )
}
