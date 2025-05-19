'use client'

import React from 'react'
import RoleListContainer from '../role-list.container'
import RoleListTableUI from './role-list-container.ui'

const RoleListUI: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <RoleListContainer>
        {(props) => <RoleListTableUI {...props} />}
      </RoleListContainer>
    </div>
  )
}

export default RoleListUI
