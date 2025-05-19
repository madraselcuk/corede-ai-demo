import {

    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { Role } from '@/constants/roles.enum'
import type { NavigationTree } from '@/@types/navigation'
import { authFullPath, authPaths } from '../routes/auth.path'
import i18n from '@/localization/i18next'

const authNavigationConfig: NavigationTree[] = [
    {
        key: 'authentication',
        path: '',
        title: i18n.t('auth:auth_nav_title'),
        translateKey: 'auth:auth_nav_title',
        icon: 'navigation',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [Role.ADMIN, Role.USER],
        meta: {
            horizontalMenu: {
                layout: 'default',
            },
        },
        subMenu: [
            {
                key: 'authentication.signIn',
                path: authFullPath(authPaths.auth.signIn),
                title: i18n.t('auth:nav_sub_signIn'),
                translateKey: 'auth:nav_sub_signIn',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [Role.ADMIN, Role.USER],
                subMenu: [],
            },
            {
                key: 'authentication.signUp',
                path: authFullPath(authPaths.auth.signUp),
                title: i18n.t('auth:nav_sub_signUp'),
                translateKey: 'auth:nav_sub_signUp',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [Role.ADMIN, Role.USER],
                subMenu: [],
            },
            {
                key: 'authentication.forgotPassword',
                path: authFullPath(authPaths.auth.forgotPassword),
                title: i18n.t('auth:nav_sub_forgetPassword'),
                translateKey: 'auth:nav_sub_forgetPassword',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [Role.ADMIN, Role.USER],
                subMenu: [],
            },
            {
                key: 'authentication.resetPassword',
                path: authFullPath(authPaths.auth.resetPassword),
                title: i18n.t('auth:nav_sub_resetPassword'),
                translateKey: 'auth:nav_sub_resetPassword',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [Role.ADMIN, Role.USER],
                subMenu: [],
            },
        ],
    },
]

export default authNavigationConfig
