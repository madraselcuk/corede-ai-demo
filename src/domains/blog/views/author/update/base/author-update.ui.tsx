'use client'

import AuthorUpdateFormContainer from "../author-update-form.container"
import AuthorUpdateFormUIBase from "./author-update-form.ui"

const AuthorUpdateUIBase = () => {
  return (
    <div>
      <AuthorUpdateFormContainer>
        {(props) => <AuthorUpdateFormUIBase {...props} />}
      </AuthorUpdateFormContainer>
    </div>
  )
}

export default AuthorUpdateUIBase
