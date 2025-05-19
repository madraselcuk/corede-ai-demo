import { TASK_MANAGEMENT_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const taskManagementNavigationConfig: NavigationTree[] = [
  {
    key: 'task',
    path: '',
    title: 'Task Management',
    translateKey: 'nav.task.title',
    icon: 'task',
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
        key: 'task.task.task',
        path: '',
        title: 'Task',
        translateKey: 'nav.task.task.title',
        icon: 'task',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.task.task.listDesc',
            label: 'Task page',
          },
        },
        subMenu: [
          {
            key: 'task.task.taskList',
            path: `${TASK_MANAGEMENT_PREFIX_PATH}/task/list`,
            title: 'Task List',
            translateKey: 'nav.task.task.list',
            icon: 'taskList',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.task.task.listDesc',
                label: 'Task list page',
              },
            },
            subMenu: [],
          },
          {
            key: 'task.task.task-create',
            path: `${TASK_MANAGEMENT_PREFIX_PATH}/task/create`,
            title: 'Task Create',
            translateKey: 'nav.task.task.create',
            icon: 'taskCreate',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.task.task.createDesc',
                label: 'Task create page',
              },
            },
            subMenu: [],
          },
        ],
      },
      {
        key: 'task.task.project',
        path: '',
        title: 'Project',
        translateKey: 'nav.task.project.title',
        icon: 'project',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.task.project.listDesc',
            label: 'Project page',
          },
        },
        subMenu: [
          {
            key: 'task.task.projectList',
            path: `${TASK_MANAGEMENT_PREFIX_PATH}/project/list`,
            title: 'Project List',
            translateKey: 'nav.task.project.list',
            icon: 'projectList',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.task.project.listDesc',
                label: 'Project list page',
              },
            },
            subMenu: [],
          },
          {
            key: 'task.task.project-create',
            path: `${TASK_MANAGEMENT_PREFIX_PATH}/project/create`,
            title: 'Project Create',
            translateKey: 'nav.task.project.create',
            icon: 'projectCreate',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.task.project.createDesc',
                label: 'Project create page',
              },
            },
            subMenu: [],
          },
        ],
      },
    ],
  },
]

export default taskManagementNavigationConfig
