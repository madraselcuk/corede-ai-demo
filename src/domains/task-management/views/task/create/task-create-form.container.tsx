import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { i18n } from '@/localization'
import { JSX, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useTaskCreateForProjectMutation } from '@/domains/task-management/api'
import {
  ITaskCreateForProjectInput,
  TaskPriority,
  TaskStatus,
} from '@corede_package'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { convertNumberInStringToNumber } from '@/utils/zod.utilities'

export interface TaskCreateFormInputs
  extends IGraphqlVariables<ITaskCreateForProjectInput> {}

export interface TaskCreateFormContainerUIProps {
  form: ReturnType<typeof useForm<TaskCreateFormInputs>>
  handleCreateTask: (values: TaskCreateFormInputs) => Promise<void>
  isLoading: boolean
}

export interface TaskCreateFormContainerProps {
  children: (props: TaskCreateFormContainerUIProps) => JSX.Element
}

export const TaskCreateFormContainer = ({
  children,
}: TaskCreateFormContainerProps) => {
  const [taskCreateForProject, { isLoading }] =
    useTaskCreateForProjectMutation()

  const formSchema = z.object({
    input: z.object({
      title: z.string().min(1, i18n.t('common:invalidFormFieldMessage')),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      status: z.nativeEnum(TaskStatus),
      progress: z.preprocess(
        convertNumberInStringToNumber,
        z.number().min(0).max(100).optional(),
      ),
      priority: z.nativeEnum(TaskPriority).optional(),
      assigneeIds: z.array(z.string()).optional(),
      followerIds: z.array(z.string()).optional(),
      parentTaskId: z.string().optional(),
      startDate: z.date().optional(),
      dueDate: z.date().optional(),
      clientOrganizationId: z.string().optional(),
      departmentId: z.string().optional(),
      documents: z.array(z.any()).optional(),
    }),
  })

  const form = useForm<TaskCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        title: '',
        description: undefined,
        tags: [],
        status: undefined,
        progress: 0,
        priority: TaskPriority.medium,
        assigneeIds: undefined,
        followerIds: undefined,
        parentTaskId: undefined,
        clientOrganizationId: undefined,
        departmentId: undefined,
        documents: undefined,
      },
    },
  })

  const handleCreateTask = useCallback(
    async (values: TaskCreateFormInputs) => {
      try {
        await taskCreateForProject({
          input: {
            ...(values.input as ITaskCreateForProjectInput), // TODO: force type cast !!!
            projectId: '67eff489901dfc28d2f1867f',
          },
        })
        toast.push(
          // TODO: add error message translation
          <Notification title="Error creating task" type="success">
            Error creating task
          </Notification>,
        )
      } catch (error) {
        console.error(error)
        toast.push(
          // TODO: add error message translation
          <Notification title="Error creating task" type="danger">
            Error creating task
          </Notification>,
        )
      }
    },
    [taskCreateForProject],
  )

  return children({
    form,
    handleCreateTask,
    isLoading,
  })
}

export default TaskCreateFormContainer
