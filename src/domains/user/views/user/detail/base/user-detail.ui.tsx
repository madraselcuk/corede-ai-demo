'use client'

import UserDetailContainer from "../user-detail.container"
import UserDetailContent from "./user-detail-container.ui"

const UserDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">User Details</h2>
        <UserDetailContainer>
          {(props) => <UserDetailContent {...props} />}
        </UserDetailContainer>
      </div>
    </div>
  )
}

export default UserDetailUI
