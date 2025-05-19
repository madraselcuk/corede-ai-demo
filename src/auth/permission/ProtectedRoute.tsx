// TODO: Change navigate to next navigate

// import { Navigate } from 'react-router-dom';
// import { IPermissionCheck } from './permission.interface';
// import { usePermissions } from './PermissionContext';
// import { PermissionDomain, PermissionSubdomain } from "@corede_package";

// /**
//  * prevents access to route
//  */
// export const ForbiddenRoute = (props: { children: React.ReactNode }) => {
//   return <Navigate to="/unauthorized" />;
// };

// /**
//  * used to protect routes to be accessed from any where (including direct url)
//  */
// export const ProtectedRoute = (props: { check: IPermissionCheck; children: React.ReactNode }) => {
//   const { hasPermission } = usePermissions();

//   return hasPermission(props.check) ? <>{props.children}</> : <Navigate to="/unauthorized" />;
// };

// /**
//  * used to protect routes to be accessed from any where (including direct url)
//  */
// export const ProtectedDomainRoute = (props: {
//   domain: PermissionDomain;
//   children: React.ReactNode;
// }) => {
//   const { hasPermissionForDomain } = usePermissions();

//   return hasPermissionForDomain(props.domain) ? (
//     <>{props.children}</>
//   ) : (
//     <Navigate to="/unauthorized" />
//   );
// };

// /**
//  * used to protect routes to be accessed from any where (including direct url)
//  */
// export const ProtectedDomainListRoute = (props: {
//   domains: PermissionDomain[];
//   children: React.ReactNode;
// }) => {
//   const { hasPermissionForDomain } = usePermissions();

//   let hasPermission = true;
//   for (const domain of props.domains) {
//     if (!hasPermissionForDomain(domain)) {
//       hasPermission = false;
//       break;
//     }
//   }

//   return hasPermission ? <>{props.children}</> : <Navigate to="/unauthorized" />;
// };

// /**
//  * used to protect routes to be accessed from any where (including direct url)
//  */
// export const ProtectedSubdomainRoute = (props: {
//   subdomain: PermissionSubdomain;
//   children: React.ReactNode;
// }) => {
//   const { hasPermissionForSubdomain } = usePermissions();

//   return hasPermissionForSubdomain(props.subdomain) ? (
//     <>{props.children}</>
//   ) : (
//     <Navigate to="/unauthorized" />
//   );
// };
