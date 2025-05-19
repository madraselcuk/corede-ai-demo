'use client'

import { MilestoneAddFormContainerUIProps } from "../milestone-add-form.container"
import { i18n } from '@/localization'
import { Form } from "@/components/ui/co/form"
import { Button } from "@/components/ui/co/button"
import { FormTextFieldGroup } from "@/components/molecules/form-text-field"
import { FormDateFieldGroup } from "@/components/molecules/form-date-field"
import { FormNumberFieldGroup } from "@/components/molecules/form-number-field"

export const MilestoneAddFormUIBase = ({
  form,
  handleAddMilestone,
  isLoading
}: MilestoneAddFormContainerUIProps) => {
  console.log("formData", form.getValues())
  console.log("formErrors", form.formState.errors)
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleAddMilestone)}
          className="space-y-4"
        >
          <FormTextFieldGroup
            form={form}
            hookName="input.title"
            label={{
              content: i18n.t("milestone:title")
            }}
          />

          <FormTextFieldGroup
            form={form}
            hookName="input.description"
            label={{
              content: i18n.t("milestone:description")
            }}
          />

          {/* TODO Tags Field */}

          <FormNumberFieldGroup
            form={form}
            hookName="input.order"
            label={{
              content: i18n.t("milestone:order")
            }}
          />

          <FormDateFieldGroup
            form={form}
            hookName="input.startDate"
            label={{
              content: i18n.t("milestone:startDate")
            }}
          />

          <FormDateFieldGroup
            form={form}
            hookName="input.dueDate"
            label={{
              content: i18n.t("milestone:dueDate")
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

export default MilestoneAddFormUIBase
