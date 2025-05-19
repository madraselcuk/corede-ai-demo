'use client'

import NotificationHistoryDetailContainer from "../notification-history-detail.container"
import NotificationHistoryDetailContent from "./notification-history-detail-container.ui"

const NotificationHistoryDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">NotificationHistory Details</h2>
        <NotificationHistoryDetailContainer>
          {(props) => <NotificationHistoryDetailContent {...props} />}
        </NotificationHistoryDetailContainer>
      </div>
    </div>
  )
}

export default NotificationHistoryDetailUI
