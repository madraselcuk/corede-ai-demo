'use client'

import NotificationDetailContainer from "../notification-detail.container"
import NotificationDetailContent from "./notification-detail-container.ui"

const NotificationDetailUI = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">Notification Details</h2>
        <NotificationDetailContainer>
          {(props) => <NotificationDetailContent {...props} />}
        </NotificationDetailContainer>
      </div>
    </div>
  )
}

export default NotificationDetailUI
