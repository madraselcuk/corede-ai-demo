import { HOME_PREFIX_PATH } from '@/constants/route.constant'
import { NAV_ITEM_TYPE_ITEM } from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const homeNavigationConfig: NavigationTree[] = [
  {
    key: 'home',
    path: `${HOME_PREFIX_PATH}`,
    title: 'Home',
    translateKey: 'nav.home.title',
    icon: 'home',
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN, USER],
    meta: {
      horizontalMenu: {
        layout: 'default',
      },
    },
    subMenu: [],
  },
]

export default homeNavigationConfig
