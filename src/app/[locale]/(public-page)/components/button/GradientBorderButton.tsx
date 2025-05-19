'use client'
import * as React from 'react'

interface GradientBorderButtonProps {
  /**
   * Optional custom text for the button
   */
  text?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Optional additional class names
   */
  className?: string
  /**
   * Optional icon component to display after text
   */
  icon?: React.ReactNode
}

/**
 * A styled button component with animated gradient border
 */
function GradientBorderButton({
  text = 'Get Started',
  onClick,
  className = '',
  icon,
}: GradientBorderButtonProps) {
  return (
    <div
      className={`relative min-w-[170px] md:min-w-[196px] w-full h-[42px] md:h-[52px] rounded-2xl ${className}`}
    >
      <div
        className="absolute inset-0 rounded-2xl animate-gradient-rotate"
        style={{
          background: 'linear-gradient(to right, #8A2BE2, #FF007F, #00E5FF)',
          backgroundSize: '200% 200%',
          opacity: 0.9,
        }}
      />
      <button
        onClick={onClick}
        className="absolute inset-[1px] rounded-2xl bg-[#f3f3f3ee] dark:bg-[#070426ee] text-black dark:text-white
         text-sm md:text-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
      >
        {text}
        {icon && icon}
      </button>
    </div>
  )
}

export default GradientBorderButton
