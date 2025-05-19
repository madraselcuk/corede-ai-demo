import { HasChildren, HasClassName } from "@/components/interface"

export interface CoDrawerProps extends HasChildren {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  drawerProps?: {
    direction?: "top" | "right" | "bottom" | "left"
  }
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
