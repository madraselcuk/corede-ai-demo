import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { JSX, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useParams } from 'next/navigation'
import {
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'
import { ITaskUpdateInput, TaskPriority, TaskStatus } from '@corede_package'
import {
  useTaskDetailQuery,
  useTaskUpdateMutation,
} from '@/domains/task-management/api'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface TaskUpdateFormInputs
  extends IGraphqlVariables<ITaskUpdateInput> {}

export interface TaskUpdateFormContainerUIProps {
  form: ReturnType<typeof useForm<TaskUpdateFormInputs>>
  handleUpdateTask: (values: TaskUpdateFormInputs) => Promise<void>
  isLoading: boolean
}

export interface TaskUpdateFormContainerProps {
  taskId?: string
  children: (props: TaskUpdateFormContainerUIProps) => JSX.Element
}

export const TaskUpdateFormContainer = ({
  taskId,
  children,
}: TaskUpdateFormContainerProps) => {
  const { id } = useParams<{ id: string }>()
  const [currentTaskId, setCurrentTaskId] = useState<string | undefined>(
    undefined,
  )

  // queries
  const { data: taskData, isLoading: taskIsLoading } = useTaskDetailQuery(
    {
      input: { _id: currentTaskId! },
    },
    {
      skip: !currentTaskId,
    },
  )

  // mutations
  const [updateTask, { isLoading: updateTaskIsLoading }] =
    useTaskUpdateMutation()

  const formSchema: z.ZodType<TaskUpdateFormInputs> = z
    .object({
      input: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        status: z.nativeEnum(TaskStatus).optional(),
        progress: z.number().min(0).max(100).optional(),
        priority: z.nativeEnum(TaskPriority).optional(),
        assigneeIds: z.array(z.string()).optional(),
        followerIds: z.array(z.string()).optional(),
        startDate: z.date().optional(),
        dueDate: z.date().optional(),
        departmentId: z.string().optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, taskData)
      return inputChanged
    })

  const form = useForm<TaskUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        title: undefined,
        description: undefined,
        tags: undefined,
        status: undefined,
        progress: undefined,
        priority: undefined,
        assigneeIds: undefined,
        followerIds: undefined,
        startDate: undefined,
        dueDate: undefined,
        departmentId: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateTask = useCallback(
    async (values: TaskUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, taskData)
        await updateTask({
          filter: {
            _id: currentTaskId!,
          },
          input: values.input,
        })

        toast.push(
          // TODO: add error message translation
          <Notification title="Error updating task" type="success">
            Error updating task
          </Notification>,
        )
      } catch (error) {
        console.error(error, 'updateTask.error')
        toast.push(
          // TODO: add error message translation
          <Notification title="Error updating task" type="danger">
            Error updating task
          </Notification>,
        )
      }
    },
    [taskData, updateTask, currentTaskId],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentTaskId(id)
    }
    if (taskId) {
      setCurrentTaskId(taskId)
    }
  }, [id, taskId])

  // Populate form with task data when available
  useEffect(() => {
    if (taskData) {
      const updateInput: ITaskUpdateInput = {
        title: taskData.title,
        description: taskData.description,
        tags: taskData.tags,
        status: taskData.status,
        progress: taskData.progress,
        priority: taskData.priority,
        assigneeIds: taskData.assignees.map((assignee) => assignee._id),
        followerIds: taskData.followers.map((follower) => follower._id),
        startDate: taskData.startDate,
        dueDate: taskData.dueDate,
        departmentId: taskData.department?._id,
      }

      form.reset({
        input: updateInput,
      })
    }
  }, [taskData, form])

  return (
    <>
      {children({
        form,
        handleUpdateTask: submitUpdateTask,
        isLoading: taskIsLoading || updateTaskIsLoading,
      })}
    </>
  )
}

export default TaskUpdateFormContainer
