import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/co/dialog'
import { CoDialogProps } from './dialog.props'
import { dialogDefaultProps } from './dialog.props.default'

export const CoDialog = (props: CoDialogProps) => {
  return (
    <Dialog
      open={props.open}
      onOpenChange={(open) => {
        props.onOpenChange(open)
        if (!open) {
          props.onClose?.()
        }
      }}
    >
      <DialogContent
        className={
          props.contentProps?.className ??
          dialogDefaultProps.contentProps?.className
        }
      >
        <DialogHeader
          className={
            props.headerProps?.className ??
            dialogDefaultProps.headerProps?.className
          }
        >
          <DialogTitle
            className={
              props.headerProps?.headerTitle?.className ??
              dialogDefaultProps.headerProps?.headerTitle?.className
            }
          >
            {props.headerProps?.headerTitle?.title ??
              dialogDefaultProps.headerProps?.headerTitle?.title}
          </DialogTitle>
          <DialogDescription
            className={
              props.headerProps?.headerDescription?.className ??
              dialogDefaultProps.headerProps?.headerDescription?.className
            }
          >
            {props.headerProps?.headerDescription?.description ??
              dialogDefaultProps.headerProps?.headerDescription?.description}
          </DialogDescription>
        </DialogHeader>
        {props.children}
        {props.footerProps && (
          <DialogFooter className={props.footerProps?.className}>
            {props.footerProps?.children}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
