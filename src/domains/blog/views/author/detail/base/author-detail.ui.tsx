'use client'

import AuthorDetailContainer from "../author-detail.container"
import AuthorDetailContainerUIBase from "./author-detail-container.ui"

const AuthorDetailUIBase = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">Author Details</h2>
        <AuthorDetailContainer>
          {(props) => <AuthorDetailContainerUIBase {...props} />}
        </AuthorDetailContainer>
      </div>
    </div>
  )
}

export default AuthorDetailUIBase
