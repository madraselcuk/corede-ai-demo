import { FormDateFieldProps } from "./form-date-field.props"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/co/form"
import { formDateFieldDefaultProps } from "./form-date-field.props.default"
import { DateTimePicker } from "@/components/atoms/input-date/date-time-picker"
import { DateTimeInput } from "@/components/atoms/input-date/date-input"

export const FormDateFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  dateInputProps
}: FormDateFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={hookName}
      render={({ field }) => (
        <FormItem
          {...formDateFieldDefaultProps.containerProps}
          {...containerProps}
        >
          {!label?.noLabel && label?.content && (
            <FormLabel
              {...formDateFieldDefaultProps.label?.props}
              {...label?.props}
            >
              {label?.content}
            </FormLabel>
          )}

          <FormControl>
            <DateTimePicker
              value={field.value}
              onChange={field.onChange}
              use12HourFormat
              timePicker={{ hour: false, minute: false, second: false }}
              renderTrigger={({ open, value, setOpen }) => (
                <DateTimeInput
                  // format="dd/MM/yyyy hh:mm aa"
                  format="dd/MM/yyyy"
                  {...formDateFieldDefaultProps.dateInputProps}
                  {...dateInputProps}
                  value={value}
                  onChange={(x) => !open && field.onChange(x)}
                  disabled={open}
                  onCalendarClick={() => setOpen(!open)}
                />
              )}
            />
          </FormControl>

          {description?.content && (
            <FormDescription
              {...formDateFieldDefaultProps.description?.props}
              {...description.props}
            >
              {description?.content}
            </FormDescription>
          )}

          <FormMessage
            {...formDateFieldDefaultProps.messageProps}
            {...messageProps}
          />
        </FormItem>
      )}
    />
  )
}
