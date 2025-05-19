import React from 'react'
import useTheme from '@/utils/hooks/useTheme'

const LeftArrowButton = ({ prevSlide }: { prevSlide: () => void }) => {
  const mode = useTheme((state) => state.mode)
  const isDark = mode === 'dark'
  
  return (
    <button
      onClick={prevSlide}
      className="flex justify-center items-center w-14 h-14 p-4 mr-4 rounded-xl  bg-black/10 dark:bg-white/10 backdrop-blur-sm hover:bg-black/20 dark:hover:bg-white/20 transition-all mt-4"
      aria-label="Previous slide"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0945 22.5579C17.3756 22.2753 17.533 21.8925 17.5319 21.4938C17.5309 21.0951 17.3716 20.7132 17.089 20.432L9.62757 13.0086L17.0509 5.54719C17.324 5.26292 17.4746 4.88274 17.4702 4.48853C17.4657 4.09433 17.3067 3.71763 17.0272 3.43958C16.7477 3.16153 16.3702 3.00438 15.976 3.00196C15.5817 2.99955 15.2023 3.15207 14.9195 3.42667L6.4359 11.9538C6.15476 12.2365 5.99739 12.6193 5.99841 13.0179C5.99943 13.4166 6.15876 13.7986 6.44134 14.0798L14.9685 22.5634C15.2512 22.8445 15.6339 23.0019 16.0326 23.0009C16.4313 22.9998 16.8132 22.8405 17.0945 22.5579Z"
          fill={isDark ? "white" : "black"}
        ></path>
      </svg>
    </button>
  )
}

export default LeftArrowButton
