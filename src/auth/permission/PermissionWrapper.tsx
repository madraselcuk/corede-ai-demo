import { ReactNode } from 'react';
import { usePermissions } from './PermissionContext';
import { IPermissionCheck } from './permission.interface';

/**
 * @param doNotWrapChildren if true, children will be returned as `<>{props.children}</>`, if false, `props.children`
 */
interface IPermissionWrapperProps {
  check?: IPermissionCheck;
  children: ReactNode;
  fallback?: ReactNode;
  doNotWrapChildren?: boolean;
}

/**
 * This wrapper will allow conditional rendering based on permissions.
 */
export const PermissionWrapper = (props: IPermissionWrapperProps) => {
  const { hasPermission } = usePermissions();

  return !props.check || hasPermission(props.check) ? (
    props.doNotWrapChildren ? (
      (props.children as JSX.Element)
    ) : (
      <>{props.children}</>
    )
  ) : (
    <>{props.fallback}</>
  );
};

/**
 * @param doNotWrapChildren if true, children will be returned as `<>{props.children}</>`, if false, `props.children`
 */
interface IPermissionsAnyWrapperProps {
  checksAny?: IPermissionCheck[];
  children: ReactNode;
  fallback?: ReactNode;
  doNotWrapChildren?: boolean;
}

/**
 * This wrapper will allow conditional rendering based on permissions.
 */
export const PermissionsAnyWrapper = (props: IPermissionsAnyWrapperProps) => {
  const { hasPermission } = usePermissions();

  let allowed = false;
  for (const check of props.checksAny ?? []) {
    allowed = hasPermission(check);
    if (allowed) break;
  }

  return allowed ? (
    props.doNotWrapChildren ? (
      (props.children as JSX.Element)
    ) : (
      <>{props.children}</>
    )
  ) : (
    <>{props.fallback}</>
  );
};
