'use client'

import OrganizationDetailContainer from "../organization-detail.container"
import OrganizationDetailContent from "./organization-detail-container.ui"

const OrganizationDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">Organization Details</h2>
        <OrganizationDetailContainer>
          {(props) => <OrganizationDetailContent {...props} />}
        </OrganizationDetailContainer>
      </div>
    </div>
  )
}

export default OrganizationDetailUI
