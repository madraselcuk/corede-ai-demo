'use client'

import React from "react"
import NotificationHistoryListContainer from "../notification-history-list.container"
import NotificationHistoryListTableUI from "./notification-history-list-container.ui"

const NotificationHistoryListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <NotificationHistoryListContainer>
        {(props) => <NotificationHistoryListTableUI {...props} />}
      </NotificationHistoryListContainer>
    </div>
  )
}

export default NotificationHistoryListUI
