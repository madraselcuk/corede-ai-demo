'use client'

import WebinarCreateFormContainer from "../webinar-create-form.container"
import WebinarCreateFormUI from "./webinar-create-form.ui"

const WebinarCreateUI = () => {
  return (
    <div>
      <WebinarCreateFormContainer>
        {(props) => <WebinarCreateFormUI {...props} />}
      </WebinarCreateFormContainer>
    </div>
  )
}

export default WebinarCreateUI 