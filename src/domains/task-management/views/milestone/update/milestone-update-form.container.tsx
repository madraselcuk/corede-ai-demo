import { zodResolver } from "@hookform/resolvers/zod"
import { IGraphqlVariables } from '@common_package'
import { i18n } from '@/localization'
import { JSX, useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { convertNumberInStringToNumber, objectIsChanged } from "@/utils/zod.utilities"
import {
  IMilestone,
  IProjectMilestoneUpdateFilterInput,
  IProjectMilestoneUpdateInput
} from "@corede_package"
import { useProjectMilestoneUpdateMutation } from "@/domains/task-management/api"
import toast from "@/components/ui/toast"
import Notification from "@/components/ui/Notification"

export interface MilestoneUpdateFormInputs
  extends IGraphqlVariables<
    IProjectMilestoneUpdateInput,
    IProjectMilestoneUpdateFilterInput
  > { }

export interface MilestoneUpdateFormContainerUIProps {
  form: ReturnType<typeof useForm<MilestoneUpdateFormInputs>>
  handleUpdateMilestone: (
    values: MilestoneUpdateFormInputs
  ) => Promise<void>
  isLoading: boolean
}

export interface MilestoneUpdateFormContainerProps {
  children: (props: MilestoneUpdateFormContainerUIProps) => JSX.Element
  projectId?: string,
  milestone?: IMilestone
}

export const MilestoneUpdateFormContainer = ({
  projectId,
  milestone,
  children
}: MilestoneUpdateFormContainerProps) => {

  // mutations
  const [
    updateMilestone,
    { isLoading: updateMilestoneIsLoading }
  ] = useProjectMilestoneUpdateMutation()

  const formSchema = z
    .object({
      input: z.object({
        title: z.string().min(1, { message: i18n.t("common:fieldRequired") }),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        order: z
          .preprocess(
            convertNumberInStringToNumber,
            z.number().min(0).max(100)
          ),
        startDate: z.date(),
        dueDate: z.date(),
        departmentId: z.string().optional()
      })
    }).refine((data) => {
      const inputChanged = objectIsChanged(data.input)
      return inputChanged
    })


  console.log("update milestone: ", milestone)

  const form = useForm<MilestoneUpdateFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        title: milestone?.title ?? "",
        description: milestone?.description ?? undefined,
        tags: milestone?.tags ?? undefined,
        order: milestone?.order ?? 0,
        startDate: milestone?.startDate ?? undefined,
        dueDate: milestone?.dueDate ?? undefined
      }
    },
    reValidateMode: "onBlur"
  })

  const submitUpdateMilestone = useCallback(
    async (values: MilestoneUpdateFormInputs) => {
      try {
        console.log("projectId: ", projectId)
        console.log("milestone: ", milestone)

        if (!projectId || !milestone) {
          return
        }

        await updateMilestone({
          filter: {
            projectId: projectId,
            milestoneId: milestone._id
          },
          input: values.input
        })

        toast.push(
          // TODO: add error message translation
          <Notification title="Error updating project milestone" type="success">
            Error updating project milestone
          </Notification>,
        )
      } catch (error) {
        console.error(error, "updateMilestone.error")
        toast.push(
          // TODO: add error message translation
          <Notification title="Error updating project milestone" type="danger">
            Error updating project milestone
          </Notification>,
        )
      }
    },
    [milestone, projectId, updateMilestone]
  )

  // Populate form with projectMilestone data when available
  useEffect(() => {
    form.reset({
      input: {
        title: "",
        description: undefined,
        tags: undefined,
        order: 0,
        startDate: undefined,
        dueDate: undefined,
        departmentId: undefined
      }
    })
  }, [form])

  return (
    <>
      {children({
        form,
        handleUpdateMilestone: submitUpdateMilestone,
        isLoading: updateMilestoneIsLoading
      })}
    </>
  )
}

export default MilestoneUpdateFormContainer
