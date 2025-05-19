'use client'

import Avatar from '@/components/ui/Avatar'
import Dropdown from '@/components/ui/Dropdown'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import Link from 'next/link'
import { PiUserDuotone, PiGearDuotone, PiPulseDuotone } from 'react-icons/pi'

import type { JSX } from 'react'
import SignOutComponent from '@/domains/auth/components/sign-out/sign-out.component'
import { useSessionUser } from '@/auth/session/auth-store.hook'
import { NameFactory } from "@common_package"
import { userFullPath, userPaths } from '@/domains/user/routes/user.path'

type DropdownList = {
  label: string
  path: string
  icon: JSX.Element
}

const dropdownItemList: DropdownList[] = [
  {
    label: 'Profile',
    // path: '/concepts/account/settings',
    path: userFullPath(userPaths.account.profile),
    icon: <PiUserDuotone />,
  },
  {
    label: 'Account Setting',
    path: '/concepts/account/settings',
    icon: <PiGearDuotone />,
  },
  {
    label: 'Activity Log',
    path: '/concepts/account/activity-log',
    icon: <PiPulseDuotone />,
  },
]

const _UserDropdown = () => {
  const { user } = useSessionUser()

  const avatarProps = {
    ...(user?.profileImage
      ? { src: user.profileImage }
      : { icon: <PiUserDuotone /> }),
  }

  return (
    <Dropdown
      className="flex"
      toggleClassName="flex items-center"
      renderTitle={
        <div className="cursor-pointer flex items-center">
          <Avatar size={32} {...avatarProps} />
        </div>
      }
      placement="bottom-end"
    >
      <Dropdown.Item variant="header">
        <div className="py-2 px-3 flex items-center gap-3">
          <Avatar {...avatarProps} />
          <div>
            <div className="font-bold text-gray-900 dark:text-gray-100">
              {NameFactory.getFullName({
                defaultName: 'Anonymous',
                name: user?.name,
                surname: user?.surname,
              })}
            </div>
            <div className="text-xs">{user?.email || 'No email available'}</div>
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item variant="divider" />
      {dropdownItemList.map((item) => (
        <Dropdown.Item key={item.label} eventKey={item.label} className="px-0">
          <Link className="flex h-full w-full px-2" href={item.path}>
            <span className="flex gap-2 items-center w-full">
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </span>
          </Link>
        </Dropdown.Item>
      ))}
      <Dropdown.Item variant="divider" />
      <Dropdown.Item eventKey="Sign Out" className="gap-2">
        <SignOutComponent />
      </Dropdown.Item>
    </Dropdown>
  )
}

const UserDropdown = withHeaderItem(_UserDropdown)

export default UserDropdown
