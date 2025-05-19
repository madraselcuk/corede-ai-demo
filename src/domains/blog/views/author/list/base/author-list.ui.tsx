'use client'

import AuthorListContainer from "../author-list.container"
import AuthorListTableUIBase from "./author-list-container.ui"

const AuthorListUIBase = () => {
  return (
    <div className="container mx-auto py-10">
      <AuthorListContainer>
        {(props) => <AuthorListTableUIBase {...props} />}
      </AuthorListContainer>
    </div>
  )
}

export default AuthorListUIBase
