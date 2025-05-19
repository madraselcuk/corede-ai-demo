import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { useProjectDetailQuery } from '@/domains/task-management/api'
import { IProjectDetailInput, IProjectDetailResult } from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import { JSX, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export interface ProjectDetailInputs
  extends IGraphqlVariables<IProjectDetailInput> {}

export interface ProjectDetailContainerUIProps {
  projectDetailData?: IProjectDetailResult
  projectDetailIsLoading?: boolean
  projectId?: string
}

export interface ProjectDetailContainerProps {
  children: (props: ProjectDetailContainerUIProps) => JSX.Element
  projectId?: string
}

export const ProjectDetailContainer = (props: ProjectDetailContainerProps) => {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [currentProjectId, setCurrentProjectId] = useState<string | undefined>(
    undefined,
  )

  // queries
  const {
    data: projectDetailData,
    isLoading: projectDetailIsLoading,
    error: projectDetailError,
  } = useProjectDetailQuery(
    {
      input: { _id: currentProjectId! },
    },
    {
      skip: !currentProjectId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentProjectId(id)
    }
    if (props.projectId) {
      setCurrentProjectId(props.projectId)
    }
  }, [id, props.projectId])

  useEffect(() => {
    if (projectDetailError) {
      toast.push(
        // TODO: add error message translation
        <Notification title="Error loading project details" type="danger">
          Error loading project details
        </Notification>,
      )
    }
  }, [projectDetailError])

  useEffect(() => {
    if (!id && !props.projectId) {
      router.push('/task/task-list')
    }
  }, [id, props.projectId, router])

  return (
    <>
      {props.children({
        projectId: props.projectId,
        projectDetailData,
        projectDetailIsLoading,
      })}
    </>
  )
}

export default ProjectDetailContainer
