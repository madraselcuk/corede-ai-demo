import { createContext, useContext, ReactNode } from 'react';
import { IPermissionCheck } from './permission.interface';
import {
  domainIsAllowed,
  PermissionCheckHelper,
  subdomainIsAllowed,
} from './permission-check.helper';
import { IPermission, PermissionDomain, PermissionSubdomain } from "@corede_package";

export type THasPermissionFunc = (check: IPermissionCheck) => boolean;

interface PermissionContextType {
  permissions: IPermission[];
  hasPermission: THasPermissionFunc;
  hasAnyPermission: (checks: IPermissionCheck[]) => boolean;
  hasPermissionForDomain: (domain: PermissionDomain) => boolean;
  hasPermissionForSubdomain: (subdomain: PermissionSubdomain) => boolean;
}

// Default context value
const defaultContext: PermissionContextType = {
  permissions: [],
  hasPermission: () => false,
  hasAnyPermission: () => false,
  hasPermissionForDomain: () => false,
  hasPermissionForSubdomain: () => false,
};

// Create Context
const PermissionContext = createContext<PermissionContextType>(defaultContext);

// Hook to use permissions
export const usePermissions = () => {
  return useContext(PermissionContext);
};

// Provider Component
interface IPermissionProviderProps {
  children: ReactNode;
  permissions: IPermission[];
}

/**
 * to manage and validate user permissions globally.
 */
export const PermissionProvider = (props: IPermissionProviderProps) => {
  const hasPermission = (checkPermission: IPermissionCheck): boolean => {
    return PermissionCheckHelper.hasPermissionByAllowedPermissions({
      allowedPermissions: props.permissions,
      checkPermission: checkPermission,
    });
  };
  const hasAnyPermission = (checkPermissions: IPermissionCheck[]): boolean => {
    let allowed = false;

    for (const checkPermission of checkPermissions) {
      allowed = PermissionCheckHelper.hasPermissionByAllowedPermissions({
        allowedPermissions: props.permissions,
        checkPermission: checkPermission,
      });
      if (allowed) break;
    }

    return allowed;
  };
  const hasPermissionForDomain = (domain: PermissionDomain): boolean => {
    return domainIsAllowed(props.permissions, domain);
  };
  const hasPermissionForSubdomain = (subdomain: PermissionSubdomain): boolean => {
    return subdomainIsAllowed(props.permissions, subdomain);
  };

  return (
    <PermissionContext.Provider
      value={{
        permissions: props.permissions,
        hasPermission,
        hasAnyPermission,
        hasPermissionForDomain,
        hasPermissionForSubdomain,
      }}
    >
      {props.children}
    </PermissionContext.Provider>
  );
};
