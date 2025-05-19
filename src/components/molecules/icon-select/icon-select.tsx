'use client'

import { useState, useEffect, useRef } from 'react'
import * as Icons from 'react-icons/fa'
import { Input } from '@/components/ui/Input'
import { useI18n } from '@/localization/hooks/useI18n'
import { motion } from 'framer-motion'
import { TranslationResourceNamespace } from '@/localization/resources'
import { SelectItemProps } from '@/components/interface'


export interface IconSelectProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  isLoading?: boolean
}

export const IconSelect = ({
  value,
  onChange,
  placeholder,
  isLoading = false,
}: IconSelectProps) => {
  const { t } = useI18n()
  const [search, setSearch] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Get all icons from Font Awesome
  const iconList: SelectItemProps[] = Object.keys(Icons)
    .filter(
      (key) =>
        key !== 'IconBase' &&
        key !== 'IconContext' &&
        typeof Icons[key as keyof typeof Icons] === 'function',
    )
    .map((key) => ({
      label: key.replace(/^Fa/, ''),
      value: key,
    }))

  // Filter icons based on search
  const filteredIcons = iconList.filter((icon) =>
    icon.label.toLowerCase().includes(search.toLowerCase()),
  )

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Render icon component
  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons]
    return IconComponent ? <IconComponent className="text-xl  " /> : null
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setShowDropdown((prev) => !prev)}>
        <Input
          value={value ? value.replace(/^Fa/, '') : ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={
            placeholder || t(`${TranslationResourceNamespace.common}:icon`)
          }
          disabled={isLoading}
          readOnly
          className="cursor-pointer"
          prefix={
            value ? (
              <span className="mr-1  p-1">{renderIcon(value)}</span>
            ) : undefined
          }
        />
      </div>

      {showDropdown && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-50 mt-1 w-full max-h-96 overflow-y-auto bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="p-2">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t(
                `${TranslationResourceNamespace.common}:searchPlaceholder`,
              )}
              className="mb-2"
              autoFocus
            />
          </div>

          <div className="grid grid-cols-6 gap-2 p-2">
            {filteredIcons.length > 0 ? (
              filteredIcons.map((iconName) => (
                <div
                  key={iconName.value}
                  className="flex flex-col items-center justify-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-center"
                  onClick={() => {
                    onChange(iconName.value)
                    setShowDropdown(false)
                  }}
                >
                  <div className="text-xl">{renderIcon(iconName.value)}</div>
                  <div className="text-xs mt-1 truncate w-full">
                    {iconName.label}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-6 p-4 text-center text-gray-500">
                {t(
                  `${TranslationResourceNamespace.common}:noResultPlaceholder`,
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default IconSelect
