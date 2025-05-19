import { TaskCreateFormContainerUIProps } from "../task-create-form.container"
import { i18n } from '@/localization'
import { Form } from "@/components/ui/co/form"
import { Button } from "@/components/ui/co/button"
import { FormTextFieldGroup } from "@/components/molecules/form-text-field"
import { FormTaskStatusSelector } from "@/domains/task-management/components/form-task-status-selector"
import { FormNumberFieldGroup } from "@/components/molecules/form-number-field"
import { FormTaskPrioritySelector } from "@/domains/task-management/components/form-task-priority-selector"
import { FormDateFieldGroup } from "@/components/molecules/form-date-field"
import { FormParentTaskSelector } from "@/domains/task-management/components/form-parent-task-selector"
import { FormMultiChipSelector } from "@/components/molecules/form-multi-chip-selector/multi-chip-selector"

export const TaskCreateFormUIBase = ({
  form,
  handleCreateTask,
  isLoading
}: TaskCreateFormContainerUIProps) => {
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreateTask)}
          className="space-y-4"
        >
          <FormTextFieldGroup
            form={form}
            hookName="input.title"
            label={{
              content: i18n.t("task:title")
            }}
          />
          <FormTextFieldGroup
            form={form}
            hookName="input.description"
            label={{
              content: i18n.t("task:description")
            }}
          />

          {/* Tags Field */}
          <FormMultiChipSelector
            form={form}
            hookName="input.tags"
            label={{
              content: i18n.t('task:tags'),
            }}
            inputProps={{
              defaultOptions: [],
            }}
          />

          <FormTaskStatusSelector form={form} hookName="input.status" />

          <FormNumberFieldGroup
            form={form}
            hookName="input.progress"
            label={{
              content: i18n.t("task:progress")
            }}
          />

          <FormTaskPrioritySelector form={form} hookName="input.priority" />

          {/* TODO AssigneeIds Field */}

          {/* TODO FollowerIds Field */}

          {/* TODO Parent task is nullable so when a task selected, it could be removed too. A small remove button is required */}

          <FormParentTaskSelector form={form} />

          <FormDateFieldGroup
            form={form}
            hookName="input.startDate"
            label={{
              content: i18n.t("task:startDate")
            }}
          />

          <FormDateFieldGroup
            form={form}
            hookName="input.dueDate"
            label={{
              content: i18n.t("task:dueDate")
            }}
          />
          <Button type="submit" disabled={!form.formState.isValid || isLoading}>
            {isLoading ? i18n.t("common:submitting") : i18n.t("common:submit")}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default TaskCreateFormUIBase
