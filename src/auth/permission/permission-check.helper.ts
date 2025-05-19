import { IBasePermission, PermissionAction } from '@common_package'
import { IPermissionCheck } from './permission.interface'
import {
  IPermission,
  IUserPermissionDetailOwnResult,
  PermissionDomain,
  PermissionSubdomain,
} from '@corede_package'

export type IHasPermissionFunc = (params: {
  userPermissionDetailResult: IUserPermissionDetailOwnResult
  checkPermission: IPermissionCheck
}) => boolean

export class PermissionCheckHelper {
  static getAllowedPermissions(
    userPermissionDetailResult: IUserPermissionDetailOwnResult,
  ): IBasePermission[] {
    const allowedPermissions: Set<IBasePermission> = new Set()
    userPermissionDetailResult?.userAllowedPermissions.forEach((p) => {
      allowedPermissions.add({
        subject: p.subject,
        action: p.action,
        actionScope: p.actionScope,
      })
    })
    userPermissionDetailResult?.rolePermissions.forEach((p) => {
      allowedPermissions.add({
        subject: p.subject,
        action: p.action,
        actionScope: p.actionScope,
      })
    })
    userPermissionDetailResult?.userProhibitedPermissions.forEach((p) => {
      allowedPermissions.delete({
        subject: p.subject,
        action: p.action,
        actionScope: p.actionScope,
      })
    })

    return Array.from(allowedPermissions.values())
  }

  static getAllowedPermissionIds(
    userPermissionDetailResult: IUserPermissionDetailOwnResult,
  ): string[] {
    const allowedPermissionIds: Set<string> = new Set()
    userPermissionDetailResult?.userAllowedPermissions.forEach((p) => {
      allowedPermissionIds.add(p._id)
    })
    userPermissionDetailResult?.rolePermissions.forEach((p) => {
      allowedPermissionIds.add(p._id)
    })
    userPermissionDetailResult?.userProhibitedPermissions.forEach((p) => {
      allowedPermissionIds.delete(p._id)
    })

    return Array.from(allowedPermissionIds.values())
  }

  /**
   *
   * @param userPermission - the permission of user
   * @param checkPermission - the permission that will be check whether it is allowed or not
   * @returns
   */
  static isAllowed(params: {
    userPermission: IBasePermission
    checkPermission: IPermissionCheck
  }): boolean {
    const scopeIsAllowed =
      !params.checkPermission.actionScope ||
      params.userPermission.actionScope === params.checkPermission.actionScope
    const subjectIsAllowed =
      params.userPermission.subject === params.checkPermission.subject ||
      params.userPermission.subject === 'all'

    const actionIsAllowed =
      !params.checkPermission.action ||
      params.userPermission.action === params.checkPermission.action ||
      params.userPermission.action === PermissionAction.all ||
      (params.userPermission.action === PermissionAction.manage &&
        [
          PermissionAction.list,
          PermissionAction.detail,
          PermissionAction.create,
          PermissionAction.update,
          PermissionAction.delete,
          PermissionAction.export,
          PermissionAction.import,
        ].includes(params.checkPermission.action)) ||
      (params.userPermission.action === PermissionAction.view &&
        [PermissionAction.list, PermissionAction.detail].includes(
          params.checkPermission.action,
        ))

    return scopeIsAllowed && subjectIsAllowed && actionIsAllowed
  }

  static hasPermissionByAllowedPermissions(params: {
    allowedPermissions: IBasePermission[]
    checkPermission: IPermissionCheck
  }): boolean {
    let hasPermission = false
    for (const userPermission of params.allowedPermissions) {
      hasPermission = PermissionCheckHelper.isAllowed({
        userPermission: userPermission,
        checkPermission: params.checkPermission,
      })
      if (hasPermission) break
    }

    return hasPermission
  }

  static hasPermissionByUserPermissionDetail(params: {
    userPermissionDetailResult: IUserPermissionDetailOwnResult
    checkPermission: IPermissionCheck
  }): boolean {
    const userAllowedPermissions = PermissionCheckHelper.getAllowedPermissions(
      params.userPermissionDetailResult,
    )
    let hasPermission = false
    for (const userPermission of userAllowedPermissions) {
      hasPermission = PermissionCheckHelper.isAllowed({
        userPermission: userPermission,
        checkPermission: params.checkPermission,
      })
      if (hasPermission) break
    }

    return hasPermission
  }
}

export function domainIsAllowed(
  userPermissions: IPermission[] | undefined,
  domain: PermissionDomain,
): boolean {
  return (
    userPermissions?.some(
      (permission) =>
        permission.domain === domain ||
        permission.domain === PermissionDomain.all,
    ) ?? false
  )
}

export function subdomainIsAllowed(
  userPermissions: IPermission[] | undefined,
  subdomain: PermissionSubdomain | undefined,
): boolean {
  return (
    userPermissions?.some(
      (permission) =>
        permission.subdomain === subdomain ||
        permission.subdomain === PermissionDomain.all,
    ) ?? false
  )
}
