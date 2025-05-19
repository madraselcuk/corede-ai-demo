import { USER_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const userNavigationConfig: NavigationTree[] = [
  {
    key: 'user',
    path: '',
    title: 'User',
    translateKey: 'nav.user.title',
    icon: 'user',
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    meta: {
      horizontalMenu: {
        layout: 'columns',
        columns: 4,
      },
    },
    subMenu: [
      {
        key: 'user.user',
        path: '',
        title: 'User',
        translateKey: 'nav.user.user.title',
        icon: 'user',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.user.user.listDesc',
            label: 'User page',
          },
        },
        subMenu: [
          {
            key: 'user.user.list',
            path: `${USER_PREFIX_PATH}/user/list`,
            title: 'User List',
            translateKey: 'nav.user.user.list',
            icon: 'userList',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.user.user.listDesc',
                label: 'User list page',
              },
            },
            subMenu: [],
          },
          {
            key: 'user.user.create',
            path: `${USER_PREFIX_PATH}/user/create`,
            title: 'User Create',
            translateKey: 'nav.user.user.create',
            icon: 'userCreate',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.user.user.createDesc',
                label: 'User create page',
              },
            },
            subMenu: [],
          },
        ],
      },
      {
        key: 'user.organization',
        path: '',
        title: 'Organization',
        translateKey: 'nav.user.organization.title',
        icon: 'organization',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.user.organization.listDesc',
            label: 'Organization page',
          },
        },
        subMenu: [
          {
            key: 'user.organization.list',
            path: `${USER_PREFIX_PATH}/organization/list`,
            title: 'Organization List',
            translateKey: 'nav.user.organization.list',
            icon: 'organizationList',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.user.organization.listDesc',
                label: 'Organization list page',
              },
            },
            subMenu: [],
          },
          {
            key: 'user.organization.create',
            path: `${USER_PREFIX_PATH}/organization/create`,
            title: 'Organization Create',
            translateKey: 'nav.user.organization.create',
            icon: 'organizationCreate',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.user.organization.createDesc',
                label: 'Organization create page',
              },
            },
            subMenu: [],
          },
        ],
      },
    ],
  },
]

export default userNavigationConfig
