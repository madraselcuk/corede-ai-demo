import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { JSX, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useParams } from 'next/navigation'
import {
  convertNumberInStringToNumber,
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'
import {
  IProjectUpdateInput,
  ProjectPriority,
  ProjectStatus,
} from '@corede_package'
import {
  useProjectDetailQuery,
  useProjectUpdateMutation,
} from '@/domains/task-management/api'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface ProjectUpdateFormInputs
  extends IGraphqlVariables<IProjectUpdateInput> {}

export interface ProjectUpdateFormContainerUIProps {
  form: ReturnType<typeof useForm<ProjectUpdateFormInputs>>
  handleUpdateProject: (values: ProjectUpdateFormInputs) => Promise<void>
  isLoading: boolean
}

export interface ProjectUpdateFormContainerProps {
  projectId?: string
  children: (props: ProjectUpdateFormContainerUIProps) => JSX.Element
}

export const ProjectUpdateFormContainer = ({
  projectId,
  children,
}: ProjectUpdateFormContainerProps) => {
  const { id } = useParams<{ id: string }>()
  const [currentProjectId, setCurrentProjectId] = useState<string | undefined>(
    undefined,
  )

  // queries
  const { data: projectData, isLoading: projectIsLoading } =
    useProjectDetailQuery(
      {
        input: { _id: currentProjectId! },
      },
      {
        skip: !currentProjectId,
      },
    )

  // mutations
  const [updateProject, { isLoading: updateProjectIsLoading }] =
    useProjectUpdateMutation()

  const formSchema = z
    .object({
      input: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        status: z.nativeEnum(ProjectStatus).optional(),
        progress: z.preprocess(
          convertNumberInStringToNumber,
          z.number().min(0).max(100).optional(),
        ),
        priority: z.nativeEnum(ProjectPriority).optional(),
        assigneeIds: z.array(z.string()).optional(),
        followerIds: z.array(z.string()).optional(),
        departmentId: z.string().optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, projectData)
      return inputChanged
    })

  const form = useForm<ProjectUpdateFormInputs>({
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
        departmentId: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateProject = useCallback(
    async (values: ProjectUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, projectData)
        await updateProject({
          filter: {
            _id: currentProjectId!,
          },
          input: values.input,
        })

        toast.push(
          // TODO: add error message translation
          <Notification title="Error updating project" type="success">
            Error updating project
          </Notification>,
        )
      } catch (error) {
        console.error(error, 'updateProject.error')
        toast.push(
          // TODO: add error message translation
          <Notification title="Error updating project" type="danger">
            Error updating project
          </Notification>,
        )
      }
    },
    [projectData, updateProject, currentProjectId],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentProjectId(id)
    }
    if (projectId) {
      setCurrentProjectId(projectId)
    }
  }, [id, projectId])

  // Populate form with project data when available
  useEffect(() => {
    console.log('projectData: ', projectData)
    if (projectData) {
      const updateInput: IProjectUpdateInput = {
        title: projectData.title,
        description: projectData.description,
        tags: projectData.tags,
        status: projectData.status,
        progress: projectData.progress,
        priority: projectData.priority,
        assigneeIds: projectData.assignees.map((assignee) => assignee._id),
        followerIds: projectData.followers.map((follower) => follower._id),
        departmentId: projectData.department?._id,
      }

      form.reset({
        input: updateInput,
      })
    }
  }, [projectData, form])

  return (
    <>
      {children({
        form,
        handleUpdateProject: submitUpdateProject,
        isLoading: projectIsLoading || updateProjectIsLoading,
      })}
    </>
  )
}

export default ProjectUpdateFormContainer
