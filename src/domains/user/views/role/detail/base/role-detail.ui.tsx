'use client'

import RoleDetailContainer from "../role-detail.container"
import RoleDetailContent from "./role-detail-container.ui"

const RoleDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">Role Details</h2>
        <RoleDetailContainer>
          {(props) => <RoleDetailContent {...props} />}
        </RoleDetailContainer>
      </div>
    </div>
  )
}

export default RoleDetailUI
