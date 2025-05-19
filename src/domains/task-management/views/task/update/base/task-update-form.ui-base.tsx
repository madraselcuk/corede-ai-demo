import { TaskUpdateFormContainerUIProps } from "../task-update-form.container"
import { i18n } from '@/localization'
import { Form } from "@/components/ui/co/form"
import { Button } from "@/components/ui/co/button"
import { FormTextFieldGroup } from "@/components/molecules/form-text-field"
import { FormDateFieldGroup } from "@/components/molecules/form-date-field"
import { FormNumberFieldGroup } from "@/components/molecules/form-number-field"
import { FormTaskPrioritySelector } from "@/domains/task-management/components/form-task-priority-selector"
import { FormTaskStatusSelector } from "@/domains/task-management/components/form-task-status-selector"
import { FormMultiChipSelector } from "@/components/molecules/form-multi-chip-selector/multi-chip-selector"

export const TaskUpdateFormUIBase = ({
  form,
  handleUpdateTask,
  isLoading
}: TaskUpdateFormContainerUIProps) => {
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleUpdateTask)}
          className="space-y-4"
        >
          <FormTextFieldGroup
            form={form}
            hookName="input.title"
            label={{
              content: i18n.t("task:title")
            }}
          />

          {/* Description Field */}
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

export default TaskUpdateFormUIBase
