'use client'

import { WebinarCreateFormContainerUIProps } from "../webinar-create-form.container"
import { Form } from "@/components/ui/co/form"
import { Button } from "@/components/ui/co/button"
import { FormTextFieldGroup } from "@/components/molecules/form-text-field"
import { FormWebinarStatusSelector } from "@/domains/webinar/components/form-webinar-status-selector"
import { FormLanguageSelector } from "@/components/molecules/form-enum-selectors/form-language-selector"
import { FormWebinarTypeSelector } from "@/domains/webinar/components/form-webinar-type-selector"
import { FormDateFieldGroup } from "@/components/molecules/form-date-field"
import { FormNumberFieldGroup } from "@/components/molecules/form-number-field"
import { useI18n } from "@/localization/hooks/useI18n"

export const WebinarCreateFormUI = ({
  form,
  handleCreateWebinar,
  isLoading
}: WebinarCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      {/* Before Create Webinar */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateWebinar)}>
            {/* Webinar Status Field */}
            <FormWebinarStatusSelector form={form} />

            {/* Title Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.title"
              label={{
                content: t("common:title")
              }}
            />

            {/* Description Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.description"
              label={{
                content: t("common:description")
              }}
            />

            {/* Content Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.content"
              label={{
                content: t("common:content")
              }}
            />

            {/* Language Field */}
            <FormLanguageSelector form={form} />

            {/* Type Field */}
            <FormWebinarTypeSelector form={form} />

            {/* Quota Field */}
            <FormNumberFieldGroup
              form={form}
              hookName="input.quota"
              label={{
                content: t("common:quota")
              }}
            />

            {/* LastApplicationDate Field */}
            <FormDateFieldGroup
              form={form}
              hookName="input.lastApplicationDate"
              label={{
                content: t("common:lastApplicationDate")
              }}
            />

            {/* StartDate Field */}
            <FormDateFieldGroup
              form={form}
              hookName="input.startDate"
              label={{
                content: t("common:startDate")
              }}
            />

            {/* Duration Field */}
            <FormNumberFieldGroup
              form={form}
              hookName="input.duration"
              label={{
                content: t("common:duration")
              }}
            />

            {/* ParticipationLink Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.participationLink"
              label={{
                content: t("common:participationLink")
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!form.formState.isValid}
            // loading={!isLoading} // TODO
            >
              {isLoading || form.formState.isSubmitting
                ? "Submitting in..."
                : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default WebinarCreateFormUI 