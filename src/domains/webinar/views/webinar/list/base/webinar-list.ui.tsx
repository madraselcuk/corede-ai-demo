'use client'

import WebinarListContainer from "../webinar-list.container"
import WebinarListContainerUI from "./webinar-list-container.ui"

const WebinarListUI = () => {
  return (
    <div className="container mx-auto py-10">
      <WebinarListContainer>
        {(props) => <WebinarListContainerUI {...props} />}
      </WebinarListContainer>
    </div>
  )
}

export default WebinarListUI 