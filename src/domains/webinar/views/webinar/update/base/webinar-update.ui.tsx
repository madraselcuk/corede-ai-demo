'use client'

import WebinarUpdateFormContainer from "../webinar-update-form.container"
import WebinarUpdateFormUI from "./webinar-update-form.ui"

const WebinarUpdateUI = () => {
  return (
    <div>
      <WebinarUpdateFormContainer>
        {(props) => <WebinarUpdateFormUI {...props} />}
      </WebinarUpdateFormContainer>
    </div>
  )
}

export default WebinarUpdateUI 