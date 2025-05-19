/* eslint-disable react/display-name */
import { PermissionDomain } from '@corede_package'
import { usePermissions } from './PermissionContext'
import { JSX } from 'react'
// import { Navigate } from 'react-router-dom'

export function withProtectedDomainRoute<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>,
  domain: PermissionDomain,
) {
  return (props: T) => {
    const { hasPermissionForDomain } = usePermissions()

    if (!hasPermissionForDomain(domain)) {
      // return <Navigate to="/unauthorized" replace />
      // TODO: change navigate to next navigation
    }

    return <WrappedComponent {...props} />
  }
}
