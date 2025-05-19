import { zodResolver } from "@hookform/resolvers/zod"
import { IGraphqlVariables } from '@common_package'

import { i18n } from '@/localization'
import { JSX, useCallback } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useProjectCreateMutation } from "@/domains/task-management/api"
import {
  IProjectCreateInput,
  ProjectPriority,
  ProjectStatus
} from "@corede_package"
import toast from "@/components/ui/toast"
import Notification from "@/components/ui/Notification"
import { convertNumberInStringToNumber } from "@/utils/zod.utilities"

export interface ProjectCreateFormInputs
  extends IGraphqlVariables<IProjectCreateInput> { }

export interface ProjectCreateFormContainerUIProps {
  form: ReturnType<typeof useForm<ProjectCreateFormInputs>>
  handleCreateProject: (values: ProjectCreateFormInputs) => Promise<void>
  isLoading: boolean
}

export interface ProjectCreateFormContainerProps {
  children: (props: ProjectCreateFormContainerUIProps) => JSX.Element
}

export const ProjectCreateFormContainer = ({
  children
}: ProjectCreateFormContainerProps) => {

  const [projectCreate, { isLoading }] = useProjectCreateMutation()

  const formSchema = z.object({
    input: z.object({
      title: z.string().nonempty(i18n.t("common:invalidFormFieldMessage")),
      description: z.string().optional(),
      tags: z.array(z.string()).optional().default([]),
      progress: z
        .preprocess(
          convertNumberInStringToNumber,
          z.number().min(0).max(100).optional()
        ),
      status: z.nativeEnum(ProjectStatus),

      priority: z.nativeEnum(ProjectPriority).optional(),
      assigneeIds: z.array(z.string()).optional(),
      followerIds: z.array(z.string()).optional(),
      startDate: z.any().optional(),
      dueDate: z.any().optional(),
    })
  })

  const form = useForm<ProjectCreateFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        title: "",
        description: "",
        tags: [],
        status: ProjectStatus.draft,
        priority: ProjectPriority.medium,
        assigneeIds: [],
        followerIds: [],
        mainProjectId: undefined,
        parentProjectId: undefined,
        startDate: undefined,
        dueDate: undefined,
        departmentId: undefined
      }
    }
  })

  const handleCreateProject = useCallback(
    async (values: ProjectCreateFormInputs) => {
      try {
        await projectCreate(values)

        toast.push(
          // TODO: add error message translation
          <Notification title="Error creating project" type="success">
            Error creating project
          </Notification>,
        )
      } catch (error) {
        console.error(error)
        toast.push(
          // TODO: add error message translation
          <Notification title="Error creating project" type="danger">
            Error creating project
          </Notification>,
        )
      }
    },
    [projectCreate]
  )

  return children({
    form,
    handleCreateProject,
    isLoading
  })
}

export default ProjectCreateFormContainer
