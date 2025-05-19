'use client'

import React from "react"
import NotificationListContainer from "../notification-list.container"
import NotificationListTableUI from "./notification-list-container.ui"

const NotificationListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <NotificationListContainer>
        {(props) => <NotificationListTableUI {...props} />}
      </NotificationListContainer>
    </div>
  )
}

export default NotificationListUI
