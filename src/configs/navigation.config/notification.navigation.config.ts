import { NOTIFICATION_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const notificationNavigationConfig: NavigationTree[] = [
  {
    key: 'notification',
    path: '',
    title: 'Notification',
    translateKey: 'nav.notification.title',
    icon: 'notification',
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
        key: 'notification.notification',
        path: '',
        title: 'Notification',
        translateKey: 'nav.notification.notification.title',
        icon: 'notification',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.notification.notification.listDesc',
            label: 'Notification page',
          },
        },
        subMenu: [
          {
            key: 'notification.notification.list',
            path: `${NOTIFICATION_PREFIX_PATH}/notification/list`,
            title: 'Notification List',
            translateKey: 'nav.notification.notification.list',
            icon: 'notificationList',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.notification.notification.listDesc',
                label: 'Notification list page',
              },
            },
            subMenu: [],
          },
          {
            key: 'notification.notification.create',
            path: `${NOTIFICATION_PREFIX_PATH}/notification/create`,
            title: 'Notification Create',
            translateKey: 'nav.notification.notification.create',
            icon: 'notificationCreate',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.notification.notification.createDesc',
                label: 'Notification create page',
              },
            },
            subMenu: [],
          },
        ],
      },
      {
        key: 'notification.notificationHistory',
        path: '',
        title: 'Notification History',
        translateKey: 'nav.notification.notificationHistory.title',
        icon: 'notificationHistory',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.notification.notificationHistory.listDesc',
            label: 'Notification history page',
          },
        },
        subMenu: [
          {
            key: 'notification.notificationHistory.list',
            path: `${NOTIFICATION_PREFIX_PATH}/notification-history/list`,
            title: 'Notification History List',
            translateKey: 'nav.notification.notificationHistory.list',
            icon: 'notificationHistoryList',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.notification.notificationHistory.listDesc',
                label: 'Notification history list page',
              },
            },
            subMenu: [],
          },
        ],
      },
    ],
  },
]

export default notificationNavigationConfig
