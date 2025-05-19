'use client'

import NotificationUpdateFormContainer from '../notification-update-form.container'
import NotificationUpdateFormUI from './notification-update-form.ui'

const NotificationUpdateUI = ({ notificationId }: { notificationId: string }) => {
  return (
    <div>
      <NotificationUpdateFormContainer notificationId={notificationId}>
        {(props) => <NotificationUpdateFormUI {...props} />}
      </NotificationUpdateFormContainer>
    </div>
  )
}

export default NotificationUpdateUI
