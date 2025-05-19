'use client'

import PermissionDetailContainer from "../permission-detail.container"
import PermissionDetailContent from "./permission-detail-container.ui"

const PermissionDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">Permission Details</h2>
        <PermissionDetailContainer>
          {(props) => <PermissionDetailContent {...props} />}
        </PermissionDetailContainer>
      </div>
    </div>
  )
}

export default PermissionDetailUI
