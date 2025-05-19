'use client'

import * as React from 'react'

interface SliderImagesProps {
  images: string[]
}

function SliderImages({ images }: SliderImagesProps) {
  return (
    <div className="relative w-full max-w-[900px] h-[550px] mx-auto max-md:w-full max-md:h-auto max-sm:h-[400px] flex justify-center mt-16">
      <div className="relative w-[280px] md:w-[580px] h-[450px]">
        {/* Görsel 1 */}
        <div
          className="absolute left-[-50px] top-0 w-[271px] h-[399px] transform rotate-[-14.522deg] flex-shrink-0 rounded-[12px] border-[0.987px] border-white bg-center bg-cover max-lg:left-[-30px] max-md:left-0 max-sm:w-[90%] max-sm:transform-none transition-all duration-500 hover:scale-105"
          style={{
            backgroundImage: `url(${images[0]})`,
            transitionDelay: '150ms',
          }}
        ></div>

        {/* Görsel 2 */}
        <div
          className="absolute left-[118px] top-[190px] w-[271px] h-[399px] transform rotate-[-14.745deg] flex-shrink-0 rounded-[12px] border-[0.987px] border-white bg-center bg-cover max-lg:left-[100px] max-md:left-[80px] max-sm:w-[90%] max-sm:left-[20px] max-sm:transform-none transition-all duration-500 hover:scale-105"
          style={{
            backgroundImage: `url(${images[1]})`,
            transitionDelay: '300ms',
          }}
        ></div>

        {/* Görsel 3 */}
        <div
          className="absolute left-[257px] top-[56px] w-[271px] h-[399px] transform rotate-[-14.745deg] flex-shrink-0 rounded-[12px] border-[0.987px] border-white bg-center bg-cover max-lg:left-[230px] max-md:left-[160px] max-sm:w-[90%] max-sm:left-[40px] max-sm:transform-none transition-all duration-500 hover:scale-105"
          style={{
            backgroundImage: `url(${images[2]})`,
            transitionDelay: '450ms',
          }}
        ></div>
      </div>
    </div>
  )
}

export default SliderImages 