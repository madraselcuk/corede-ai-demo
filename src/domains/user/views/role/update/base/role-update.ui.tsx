'use client'

import RoleUpdateFormContainer from '../role-update-form.container'
import RoleUpdateFormUI from './role-update-form.ui'

const RoleUpdateUI = ({ roleId }: { roleId: string }) => {
  return (
    <div>
      <RoleUpdateFormContainer roleId={roleId}>
        {(props) => <RoleUpdateFormUI {...props} />}
      </RoleUpdateFormContainer>
    </div>
  )
}

export default RoleUpdateUI
