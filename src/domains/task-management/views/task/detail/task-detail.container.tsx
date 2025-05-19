import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useTaskDetailQuery } from '@/domains/task-management/api'
import { ITaskDetailResult } from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import { ITaskDetailInput } from '@corede_package'
import { JSX, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export interface TaskDetailInputs extends IGraphqlVariables<ITaskDetailInput> {}

export interface TaskDetailContainerUIProps {
  taskDetailData?: ITaskDetailResult
  taskDetailIsLoading?: boolean
}

export interface TaskDetailContainerProps {
  children: (props: TaskDetailContainerUIProps) => JSX.Element
  taskId?: string
}

export const TaskDetailContainer = (props: TaskDetailContainerProps) => {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const [currentTaskId, setCurrentTaskId] = useState<string | undefined>(
    undefined,
  )

  // queries
  const {
    data: taskDetailData,
    isLoading: taskDetailIsLoading,
    error: taskDetailError,
  } = useTaskDetailQuery(
    {
      input: { _id: currentTaskId! },
    },
    {
      skip: !currentTaskId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentTaskId(id)
    }
    if (props.taskId) {
      setCurrentTaskId(props.taskId)
    }
  }, [id, props.taskId])

  useEffect(() => {
    if (taskDetailError) {
      toast.push(
        // TODO: add error message translation
        <Notification title="Error loading task details" type="danger">
          Error loading task details
        </Notification>,
      )
    }
  }, [taskDetailError])

  useEffect(() => {
    if (!id && !props.taskId) {
      router.push('/task/task-list')
    }
  }, [id, props.taskId, router])

  return (
    <>
      {props.children({
        taskDetailData,
        taskDetailIsLoading,
      })}
    </>
  )
}

export default TaskDetailContainer
