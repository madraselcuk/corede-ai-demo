'use client'

import OrganizationUpdateFormContainer from '../organization-update-form.container'
import OrganizationUpdateFormUI from './organization-update-form.ui'

const OrganizationUpdateUI = ({ organizationId }: { organizationId: string }) => {
  return (
    <div>
      <OrganizationUpdateFormContainer organizationId={organizationId}>
        {(props) => <OrganizationUpdateFormUI {...props} />}
      </OrganizationUpdateFormContainer>
    </div>
  )
}

export default OrganizationUpdateUI
