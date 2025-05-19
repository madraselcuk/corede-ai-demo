'use client'

import UserUpdateFormContainer from '../user-update-form.container'
import UserUpdateFormUI from './user-update-form.ui'

const UserUpdateUI = ({ userId }: { userId: string }) => {
  return (
    <div>
      <UserUpdateFormContainer userId={userId}>
        {(props) => <UserUpdateFormUI {...props} />}
      </UserUpdateFormContainer>
    </div>
  )
}

export default UserUpdateUI
