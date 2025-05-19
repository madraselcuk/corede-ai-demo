import { FormFieldWrapperProps } from "@/components/molecules/form-field-wrapper/form-field-wrapper"

export const formFieldTheme: Partial<FormFieldWrapperProps<any>> = {
  containerProps: {
    className: "mr-5 ml-5"
  },
  label: {
    props: {
      className: "mb-2 block text-sm font-medium text-gray-900"
    }
  },
  // inputProps: {
  //   className:
  //     "mb-2 border-destructive rounded-2xl block text-sm font-medium text-gray-900"
  // },
  messageProps: {
    className: "text-xs text-red-600"
  }
}
