import { ProjectCreateFormContainerUIProps } from '../project-create-form.container'
import { i18n } from '@/localization'
import { Form } from '@/components/ui/co/form'
import { Button } from '@/components/ui/co/button'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field'
import { FormDateFieldGroup } from '@/components/molecules/form-date-field'
import { FormNumberFieldGroup } from '@/components/molecules/form-number-field'
import { FormProjectPrioritySelector } from '@/domains/task-management/components/form-project-priority-selector'
import { FormProjectStatusSelector } from '@/domains/task-management/components/form-project-status-selector'

export const ProjectCreateFormUIBase = ({
  form,
  handleCreateProject,
  isLoading,
}: ProjectCreateFormContainerUIProps) => {
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreateProject)}
          className="space-y-4"
        >
          <FormTextFieldGroup
            form={form}
            hookName="input.title"
            label={{
              content: i18n.t('project:title'),
            }}
          />
          <FormTextFieldGroup
            form={form}
            hookName="input.description"
            label={{
              content: i18n.t('project:description'),
            }}
          />
          {/* TODO Tags Field */}

          <FormProjectStatusSelector form={form} hookName="input.status" />

          <FormNumberFieldGroup
            form={form}
            hookName="input.progress"
            label={{
              content: i18n.t('project:progress'),
            }}
          />

          <FormProjectPrioritySelector form={form} hookName="input.priority" />

          {/* TODO Tags AssigneeIds Field */}

          {/* TODO Tags FollowerIds Field */}

          {/* TODO Tags ParentId Field */}

          <FormDateFieldGroup
            form={form}
            hookName="input.startDate"
            label={{
              content: i18n.t('project:startDate'),
            }}
          />

          <FormDateFieldGroup
            form={form}
            hookName="input.dueDate"
            label={{
              content: i18n.t('project:dueDate'),
            }}
          />
          <Button type="submit" disabled={!form.formState.isValid || isLoading}>
            {isLoading ? i18n.t('common:submitting') : i18n.t('common:submit')}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ProjectCreateFormUIBase
