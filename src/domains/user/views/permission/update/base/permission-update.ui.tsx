'use client'

import PermissionUpdateFormContainer from '../permission-update-form.container'
import PermissionUpdateFormUI from './permission-update-form.ui'

const PermissionUpdateUI = ({ permissionId }: { permissionId: string }) => {
  return (
    <div>
      <PermissionUpdateFormContainer permissionId={permissionId}>
        {(props) => <PermissionUpdateFormUI {...props} />}
      </PermissionUpdateFormContainer>
    </div>
  )
}

export default PermissionUpdateUI
