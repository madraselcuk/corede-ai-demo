'use client'

import { WebinarUpdateFormContainerUIProps } from "../webinar-update-form.container"
import { useI18n } from "@/localization/hooks/useI18n"
import { Form } from "@/components/ui/co/form"
import { Button } from "@/components/ui/co/button"
import { FormTextFieldGroup } from "@/components/molecules/form-text-field"
import { NoDataState } from "@/components/organisms/no-data-state/no-data-state"
import { NoConnectionState } from "@/components/organisms/no-connection-state/no-connection-state"
import { FormDateFieldGroup } from "@/components/molecules/form-date-field"
import { FormLanguageSelector } from "@/components/molecules/form-enum-selectors/form-language-selector"
import { FormWebinarStatusSelector } from "@/domains/webinar/components/form-webinar-status-selector"
import { FormWebinarTypeSelector } from "@/domains/webinar/components/form-webinar-type-selector"
import { FormNumberFieldGroup } from "@/components/molecules/form-number-field"

export const WebinarUpdateFormUI = ({
  form,
  handleUpdateWebinar,
  isLoading,
  connectionError,
  noDataError
}: WebinarUpdateFormContainerUIProps) => {
  const { t } = useI18n()

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t("webinar:noWebinarFound")} />
  }

  return (
    <>
      {/* Before Update Webinar */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateWebinar)}>
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

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <Button
                type="submit"
                disabled={!form.formState.isValid || isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>

              <Button
                type="button"
                variant="outline"
                disabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default WebinarUpdateFormUI 