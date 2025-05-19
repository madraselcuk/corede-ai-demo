'use client'

import React from "react"
import OrganizationListContainer from "../organization-list.container"
import OrganizationListTableUI from "./organization-list-container.ui"

const OrganizationListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <OrganizationListContainer>
        {(props) => <OrganizationListTableUI {...props} />}
      </OrganizationListContainer>
    </div>
  )
}

export default OrganizationListUI
