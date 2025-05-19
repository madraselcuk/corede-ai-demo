'use client'

import AuthorCreateFormContainer from '../author-create-form.container'
import CreateAuthorFormUIBase from './author-create-form.ui'

const AuthorCreateUIBase = () => {
  return (
    <div>
      <AuthorCreateFormContainer>
        {(props) => <CreateAuthorFormUIBase {...props} />}
      </AuthorCreateFormContainer>
    </div>
  )
}

export default AuthorCreateUIBase
