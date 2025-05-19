/* eslint-disable react/display-name */
import React, { JSX } from 'react';
import { usePermissions } from './PermissionContext';
import { IPermissionCheck } from './permission.interface';

/**
 * Higher-Order Component (HOC) for components or routes that need permission checks.
 */
export function withPermission<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>,
  check: IPermissionCheck,
) {
  return (props: T) => {
    const { hasPermission } = usePermissions();

    if (!hasPermission(check)) {
      return <p>You do not have permission to access this component.</p>;
    }

    return <WrappedComponent {...props} />;
  };
}
