'use client'

import OrganizationCreateFormContainer from "../organization-create-form.container"
import OrganizationCreateFormUI from "./organization-create-form.ui"

const OrganizationCreateUI = () => {
  return (
    <div>
      <OrganizationCreateFormContainer>
        {(props) => <OrganizationCreateFormUI {...props} />}
      </OrganizationCreateFormContainer>
    </div>
  )
}

export default OrganizationCreateUI
