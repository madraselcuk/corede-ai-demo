'use client'

import PermissionCreateFormContainer from "../permission-create-form.container"
import PermissionCreateFormUI from "./permission-create-form.ui"

const PermissionCreateUI = () => {
  return (
    <div>
      <PermissionCreateFormContainer>
        {(props) => <PermissionCreateFormUI {...props} />}
      </PermissionCreateFormContainer>
    </div>
  )
}

export default PermissionCreateUI
