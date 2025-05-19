import { EnumSelectProps } from "../components/atoms/select-enum/enum-select.props"

export const enumSelectTheme: Partial<EnumSelectProps> = {
  input: {
    inputContainerClassName: "",
    button: {
      buttonClassName: "w-[200px] justify-between",
      noValueSelectedClassName: "text-muted-foreground",
      buttonPlaceholder: ""
    }
  },
  select: {
    selectContainerClassName: "w-[200px] p-0",
    search: {
      noSearch: false,
      searchClassName: "h-9",
      searchPlaceholder: ""
    },
    noResultContent: null
  }
}
