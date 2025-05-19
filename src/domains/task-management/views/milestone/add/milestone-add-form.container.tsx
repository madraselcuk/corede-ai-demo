import { zodResolver } from "@hookform/resolvers/zod"
import { IGraphqlVariables } from '@common_package'
import { i18n } from '@/localization'
import { JSX, useCallback } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { convertNumberInStringToNumber, objectIsChanged } from "@/utils/zod.utilities"
import {
  IProjectMilestoneAddFilterInput,
  IProjectMilestoneAddInput
} from "@corede_package"
import toast from "@/components/ui/toast"
import Notification from "@/components/ui/Notification"
import { useProjectMilestoneAddMutation } from "@/domains/task-management/api"

export interface MilestoneAddFormInputs
  extends IGraphqlVariables<
    IProjectMilestoneAddInput,
    IProjectMilestoneAddFilterInput
  > { }

export interface MilestoneAddFormContainerUIProps {
  form: ReturnType<typeof useForm<MilestoneAddFormInputs>>
  handleAddMilestone: (
    values: MilestoneAddFormInputs
  ) => Promise<void>
  isLoading: boolean
}

export interface MilestoneAddFormContainerProps {
  projectId: string
  children: (props: MilestoneAddFormContainerUIProps) => JSX.Element
}

export const MilestoneAddFormContainer = ({
  projectId,
  children
}: MilestoneAddFormContainerProps) => {

  // mutations
  const [addMilestone, { isLoading: addMilestoneIsLoading }] =
    useProjectMilestoneAddMutation()

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
        organizationId: z.string().optional(),
        departmentId: z.string().optional()
      })
    }).refine((data) => {
      const inputChanged = objectIsChanged(data.input)
      return inputChanged
    })

  const form = useForm<MilestoneAddFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        title: "",
        description: undefined,
        tags: undefined,
        order: 0,
        startDate: undefined,
        dueDate: undefined,
        organizationId: undefined,
        departmentId: undefined
      }
    },
    reValidateMode: "onBlur"
  })

  const submitAddMilestone = useCallback(
    async (values: MilestoneAddFormInputs) => {
      try {
        if (values.input) {
          values.input.tags = []
          values.input.order = Number(values.input.order)
        }

        console.log("resolver filter: ", projectId)
        console.log("resolver values: ", values)

        await addMilestone({
          filter: {
            _id: projectId!
          },
          input: values.input
        })

        toast.push(
          // TODO: add error message translation
          <Notification title="Error adding milestone" type="success">
            Error adding milestone
          </Notification>,
        )
      } catch (error) {
        console.error(error, "addMilestone.error")
        toast.push(
          // TODO: add error message translation
          <Notification title="Error adding milestone" type="danger">
            Error adding milestone
          </Notification>,
        )
      }
    },
    [addMilestone, projectId]
  )

  // use e

  return (
    <>
      {children({
        form,
        handleAddMilestone: submitAddMilestone,
        isLoading: addMilestoneIsLoading
      })}
    </>
  )
}

export default MilestoneAddFormContainer
