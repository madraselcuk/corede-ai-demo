import { ProjectUpdateFormContainerUIProps } from "../project-update-form.container"
import { i18n } from '@/localization'
import { Form } from "@/components/ui/co/form"
import { Button } from "@/components/ui/co/button"
import { FormTextFieldGroup } from "@/components/molecules/form-text-field"
import { FormNumberFieldGroup } from "@/components/molecules/form-number-field"
import { FormProjectStatusSelector } from "@/domains/task-management/components/form-project-status-selector"
import { FormProjectPrioritySelector } from "@/domains/task-management/components/form-project-priority-selector"

export const ProjectUpdateFormUIBase = ({
  form,
  handleUpdateProject,
  isLoading
}: ProjectUpdateFormContainerUIProps) => {

  console.log("update is valid", form.formState.isValid)
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleUpdateProject)}
          className="space-y-4"
        >
          <FormTextFieldGroup
            form={form}
            hookName="input.title"
            label={{
              content: i18n.t("project:title")
            }}
          />
          <FormTextFieldGroup
            form={form}
            hookName="input.description"
            label={{
              content: i18n.t("project:description")
            }}
          />
          {/* TODO Tags Field */}

          <FormProjectStatusSelector form={form} hookName="input.status" />

          <FormNumberFieldGroup
            form={form}
            hookName="input.progress"
            label={{
              content: i18n.t("project:progress")
            }}
          />

          <FormProjectPrioritySelector form={form} hookName="input.priority" />

          {/* TODO Tags AssigneeIds Field */}

          {/* TODO Tags FollowerIds Field */}

          {/* TODO Tags ParentId Field */}

          <Button type="submit" disabled={!form.formState.isValid || isLoading}>
            {isLoading ? i18n.t("common:submitting") : i18n.t("common:submit")}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ProjectUpdateFormUIBase
