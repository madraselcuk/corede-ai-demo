'use client'
import * as React from 'react'

interface BorderButtonProps {
  text?: string
  onClick?: () => void
  icon?: React.ReactNode
  className?: string
}

/**
 * A styled button component with animated gradient border
 */
function BorderButton({
  text = 'Get Started',
  icon,
  onClick,
  className = '',
}: BorderButtonProps) {
  return (
    <div
      className={`relative  min-w-[170px] md:min-w-[196px] w-full h-[42px] md:h-[52px] rounded-2xl ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl border-1 border-gray-900 dark:border-white" />
      <button
        onClick={onClick}
        className="absolute pl-2 inset-[1px] rounded-2xl bg-transparent text-black dark:text-white text-sm md:text-lg font-medium transition-all duration-200 flex items-center justify-center gap-1"
      >
        <span>{text}</span>
        <span>{icon}</span>
      </button>
    </div>
  )
}

export default BorderButton
