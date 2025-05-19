'use client'

import NotificationCreateFormContainer from "../notification-create-form.container"
import NotificationCreateFormUI from "./notification-create-form.ui"

const NotificationCreateUI = () => {
  return (
    <div>
      <NotificationCreateFormContainer>
        {(props) => <NotificationCreateFormUI {...props} />}
      </NotificationCreateFormContainer>
    </div>
  )
}

export default NotificationCreateUI
