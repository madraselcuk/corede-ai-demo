import { MODE_DARK } from '@/constants/theme.constant'
import { MODE_LIGHT } from '@/constants/theme.constant'
import useTheme from '@/utils/hooks/useTheme'
import React from 'react'

const ThemeButton = () => {
  const mode = useTheme((state) => state.mode)
  const setMode = useTheme((state) => state.setMode)

  const toggleMode = () => {
    setMode(mode === MODE_LIGHT ? MODE_DARK : MODE_LIGHT)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 hover:shadow-input dark:text-neutral-500"
        onClick={toggleMode}
      >
        <svg
          className="lucide lucide-sun rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          fill="none"
          height="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <svg
          className="lucide lucide-moon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          fill="none"
          height="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  )
}

export default ThemeButton
