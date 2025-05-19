'use client'

import React from 'react'
import PermissionListContainer from '../permission-list.container'
import PermissionListTableUI from './permission-list-container.ui'

const PermissionListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <PermissionListContainer>
        {(props) => <PermissionListTableUI {...props} />}
      </PermissionListContainer>
    </div>
  )
}

export default PermissionListUI
