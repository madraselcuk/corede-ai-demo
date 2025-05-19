import landingNavigationConfig from './landing.navigation.config'
import homeNavigationConfig from './home.navigation.config'
import taskManagementNavigationConfig from './taskManagement.navigation.config'
import userNavigationConfig from './user.navigation.config'
import type { NavigationTree } from '@/@types/navigation'
import notificationNavigationConfig from './notification.navigation.config'

const navigationConfig: NavigationTree[] = [
  ...homeNavigationConfig,
  ...landingNavigationConfig,
  ...taskManagementNavigationConfig,
  ...userNavigationConfig,
  ...notificationNavigationConfig,
]

export default navigationConfig
