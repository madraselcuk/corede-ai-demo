import React from 'react'
import useTheme from '@/utils/hooks/useTheme'

const RightArrowButton = ({ nextSlide }: { nextSlide: () => void }) => {
  const mode = useTheme((state) => state.mode)
  const isDark = mode === 'dark'
  
  return (
    <button
      onClick={nextSlide}
      className="flex justify-center items-center w-14 h-14 p-4 ml-4 rounded-xl  bg-black/10 dark:bg-white/10 backdrop-blur-sm hover:bg-black/20 dark:hover:bg-white/20 transition-all mt-4"
      aria-label="Next slide"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.90542 3.44207C8.62427 3.72475 8.46691 4.10751 8.46793 4.50619C8.46895 4.90486 8.62827 5.28681 8.91086 5.56804L16.3723 12.9914L8.94898 20.4528C8.67583 20.7371 8.52526 21.1173 8.5297 21.5115C8.53413 21.9057 8.69322 22.2824 8.9727 22.5604C9.25217 22.8385 9.62968 22.9956 10.0239 22.998C10.4181 23.0005 10.7975 22.8479 11.0804 22.5733L19.564 14.0462C19.8451 13.7635 20.0025 13.3807 20.0015 12.9821C20.0004 12.5834 19.8411 12.2014 19.5585 11.9202L11.0314 3.43663C10.7487 3.15549 10.3659 2.99812 9.96727 2.99914C9.56859 3.00017 9.18664 3.15949 8.90542 3.44207Z"
          fill={isDark ? "white" : "black"}
        ></path>
      </svg>
    </button>
  )
}

export default RightArrowButton
