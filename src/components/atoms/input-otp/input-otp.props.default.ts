import { OtpInputProps } from "./input-otp"

export const inputOtpDefaultProps: OtpInputProps = {
  inputContainerClassName: "flex items-center gap-2 has-[:disabled]:opacity-50",
  inputClassName: "disabled:cursor-not-allowed",
  inputGroupClassName: "flex items-center",
  inputSlot: {
    className:
      "relative flex h-9 w-9 items-center justify-center border-y border-r border-neutral-200 text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-neutral-800",
    activeClassName: "z-10 ring-1 ring-neutral-950 dark:ring-neutral-300"
  }
}
