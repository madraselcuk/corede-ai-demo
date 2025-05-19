'use client'

import UserCreateFormContainer from "../user-create-form.container"
import UserCreateFormUI from "./user-create-form.ui"

const UserCreateUI = () => {
  return (
    <div>
      <UserCreateFormContainer>
        {(props) => <UserCreateFormUI {...props} />}
      </UserCreateFormContainer>
    </div>
  )
}

export default UserCreateUI
