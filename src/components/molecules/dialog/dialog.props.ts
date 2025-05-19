import { HasChildren, HasClassName } from "@/components/interface"

export interface CoDialogProps extends HasChildren {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  contentProps?: HasClassName
  headerProps?: HasClassName & {
    headerTitle: HasClassName & {
      title: string
    }
    headerDescription?: HasClassName & {
      description?: string
    }
  }
  footerProps?: HasClassName & HasChildren
}
