'use client'

import React from "react"
import UserListContainer from "../user-list.container"
import UserListTableUI from "./user-list-container.ui"

const UserListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <UserListContainer>
        {(props) => <UserListTableUI {...props} />}
      </UserListContainer>
    </div>
  )
}

export default UserListUI
