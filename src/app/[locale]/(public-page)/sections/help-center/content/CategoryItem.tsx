import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { IconType } from 'react-icons'

interface CategoryItemProps {
  title: string
  icon: string
  description: string
  isSelected: boolean
  onClick: () => void
}

const IconLibraries = {
  Fa: FaIcons,
}

// Dinamik olarak icon oluşturan fonksiyon
const DynamicIcon = ({ iconName }: { iconName: string }) => {
  if (!iconName) return null

  // Prefix'i belirleme (Fa, Ai, Bs, vs.)
  const prefix = iconName.substring(0, 2)
  const library = IconLibraries[prefix as keyof typeof IconLibraries]

  if (library && library[iconName as keyof typeof library]) {
    const Icon = library[iconName as keyof typeof library] as IconType
    return <Icon size={24} />
  }

  // Eğer icon bulunamazsa, bir fallback gösterelim
  return <span>{iconName}</span>
}

const CategoryItem = ({
  title,
  icon,
  description,
  isSelected,
  onClick,
}: CategoryItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl p-6 cursor-pointer transition-all duration-200 transform hover:scale-105 
        ${
          isSelected
            ? 'bg-gradient-to-br from-secondary-subtle via-tertiary-subtle to-primary-subtle border border-secondary dark:border-primary'
            : 'bg-gray-100 dark:bg-gray-800 border border-gray-700 hover:border-secondary dark:hover:border-primary'
        }`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-secondary dark:text-primary">
          <DynamicIcon iconName={icon} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
          {title}
        </h3>
        <p className=" text-sm text-gray-800 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}

export default CategoryItem
