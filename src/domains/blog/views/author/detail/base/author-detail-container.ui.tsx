'use client'

import { NoConnectionState } from "@/components/organisms/no-connection-state/no-connection-state"
import { AuthorDetailContainerUIProps } from "../author-detail.container"
import { i18n } from "@/localization"
import { NoDataState } from "@/components/organisms/no-data-state/no-data-state"

export const AuthorDetailContainerUIBase = ({
  authorDetailData,
  authorDetailIsLoading,
  connectionError,
  noDataError
}: AuthorDetailContainerUIProps) => {
  if (authorDetailIsLoading) {
    return <div>Loading...</div>
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={i18n.t("blog:noAuthorFound")} />
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{i18n.t("common:name")}: </b>
        </div>
        <div>{authorDetailData?.name}</div>
        <div>
          <b>{i18n.t("blog:bio")}: </b>
        </div>
        <div>{authorDetailData?.bio}</div>
      </div>
    </div>
  )
}

export default AuthorDetailContainerUIBase
