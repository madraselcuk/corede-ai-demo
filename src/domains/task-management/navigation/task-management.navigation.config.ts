import { NavigationTree } from '@/@types/navigation'
import {
  NAV_ITEM_TYPE_ITEM,
  NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import { Role } from '@/constants/roles.enum'
import { i18n } from '@/localization'
import { taskManagementFullPath, routes } from '../routes/task.path'
const taskManagementNavigationConfig: NavigationTree[] = [
  {
    key: 'taskManagement',
    path: '',
    title: i18n.t('taskManagement:nav_title'),
    translateKey: 'taskManagement:nav_title',
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
        key: 'taskManagement.taskList',
        path: taskManagementFullPath(routes.task.taskList),
        title: i18n.t('task:nav_sub_taskList'),
        translateKey: 'task:nav_sub_taskList',
        icon: '',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [Role.ADMIN, Role.USER],
        subMenu: [],
      },
      {
        key: 'taskManagement.projectList',
        path: taskManagementFullPath(routes.project.projectList),
        title: i18n.t('taskManagement:nav_sub_projectList'),
        translateKey: 'taskManagement:nav_sub_projectList',
        icon: '',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [Role.ADMIN, Role.USER],
        subMenu: [],
      },
    ],
  },
]

export default taskManagementNavigationConfig
