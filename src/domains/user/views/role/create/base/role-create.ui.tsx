'use client'

import RoleCreateFormContainer from "../role-create-form.container"
import RoleCreateFormUI from "./role-create-form.ui"

const RoleCreateUI = () => {
  return (
    <div>
      <RoleCreateFormContainer>
        {(props) => <RoleCreateFormUI {...props} />}
      </RoleCreateFormContainer>
    </div>
  )
}

export default RoleCreateUI
