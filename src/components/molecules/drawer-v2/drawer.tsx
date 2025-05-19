import {
  Drawer,
  DrawerDescription,
  DrawerTitle,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
} from '@/components/ui/co/drawer'
import { CoDrawerProps } from './drawer.props'
import { drawerDefaultProps } from './drawer.props.default'

export const CoDrawer = (props: CoDrawerProps) => {
  return (
    <Drawer
      open={props.open}
      onOpenChange={props.onOpenChange}
      onClose={props.onClose}
      direction={
        props.drawerProps?.direction ??
        drawerDefaultProps.drawerProps?.direction
      }
    >
      <DrawerContent
        className={
          props.contentProps?.className ??
          drawerDefaultProps.contentProps?.className
        }
      >
        <DrawerHeader
          className={
            props.headerProps?.className ??
            drawerDefaultProps.headerProps?.className
          }
        >
          <DrawerTitle
            className={
              props.headerProps?.headerTitle?.className ??
              drawerDefaultProps.headerProps?.headerTitle?.className
            }
          >
            {props.headerProps?.headerTitle?.title ??
              drawerDefaultProps.headerProps?.headerTitle?.title}
          </DrawerTitle>
          {props.headerProps?.headerDescription && (
            <DrawerDescription
              className={
                props.headerProps?.headerDescription?.className ??
                drawerDefaultProps.headerProps?.headerDescription?.className
              }
            >
              {props.headerProps?.headerDescription?.description ??
                drawerDefaultProps.headerProps?.headerDescription?.description}
            </DrawerDescription>
          )}
        </DrawerHeader>
        {props.children}
        {props.footerProps?.children && (
          <DrawerFooter className={props.footerProps?.className}>
            {props.footerProps?.children}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
