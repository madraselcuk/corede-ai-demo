'use client'
import React, { useState, useEffect, useRef } from 'react'
import { MODE_DARK } from '@/constants/theme.constant'
import useTheme from '@/utils/hooks/useTheme'

interface GridBackgroundProps {
  isVisible?: boolean
}

const GridBackground: React.FC<GridBackgroundProps> = (
  {
    // isVisible = true,
  },
) => {
  const [animate, setAnimate] = useState(false)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK

  // IntersectionObserver ile görünürlüğü takip et
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Grid background görünür olduğunda animasyonu başlat
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (backgroundRef.current) {
      observer.observe(backgroundRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={backgroundRef}
      className={`absolute top-0 left-0 size-full transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}
    >
      <div>
        <svg
          width="850"
          height="735"
          viewBox="0 0 850 1135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="grid-bg"
          style={{ width: '100%', height: '100%' }}
        >
          <g
            filter="url(#filter0_f_133_1937)"
            className={`${animate ? 'animate-pulse' : ''}`}
            style={{ animationDuration: '8s' }}
          >
            <circle
              cx="282.5"
              cy="417.5"
              r="215.5"
              transform="rotate(180 282.5 417.5)"
              fill="url(#paint0_radial_133_1937)"
              fillOpacity="0.25"
            ></circle>
          </g>
          <path
            d="M165.738 803.825H427.165M-246.604 360.32L-246.604 894.915M-211.747 360.32L-211.747 894.915M-176.89 360.32L-176.89 894.915M-142.033 360.32L-142.033 894.915M-107.176 360.32L-107.176 894.915M-72.3191 360.32L-72.3191 894.915M-37.4621 360.32L-37.4621 894.915M-2.60511 360.32L-2.60514 894.915M32.2519 360.32L32.2518 894.915M-247 873.636H833.566M67.1088 360.32L67.1088 894.915M-247 840.784H833.566M101.966 360.32L101.966 894.915M-247 807.932H833.566M136.823 360.32L136.823 894.915M-247 775.079H833.566M171.68 360.32L171.68 894.915M-247 742.227H833.566M206.537 360.32L206.537 894.915M-247 709.375H833.566M241.394 360.32L241.394 894.915M-247 676.523H833.566M276.251 360.32L276.251 894.915M-247 643.67H833.566M311.108 360.32L311.108 894.915M-247 610.818H833.566M345.965 360.32L345.965 894.915M-247 577.966H833.566M380.822 360.32L380.821 894.915M-247 545.114H833.566M415.679 360.32L415.678 894.915M-247 512.261H833.566M450.535 360.32L450.535 894.915M-247 479.409H833.566M485.392 360.32L485.392 894.915M-247 446.557H833.566M520.249 360.32L520.249 894.915M-247 413.705H833.566M555.106 360.32L555.106 894.915M-247 380.852H833.566M589.963 360.32V894.915M-247 348L833.566 348M624.82 360.32V894.915M659.677 360.32V894.915M694.534 360.32V894.915M729.391 360.32V894.915M764.248 360.32V894.915M799.105 360.32V894.915M833.962 360.32V894.915"
            stroke="url(#paint1_radial_133_1937)"
            className={`${animate ? 'animate-fadeIn' : ''}`}
            style={{
              animationDuration: '1.5s',
              strokeDasharray: animate ? '1' : '0',
              strokeDashoffset: animate ? '0' : '1',
              transition: 'stroke-dashoffset 1.5s ease-in-out',
            }}
          ></path>
          <defs>
            <filter
              id="filter0_f_133_1937"
              x="-284.9"
              y="0.100006"
              width="1134.8"
              height="1134.8"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="175.95"
                result="effect1_foregroundBlur_133_1937"
              ></feGaussianBlur>
            </filter>
            <radialGradient
              id="paint0_radial_133_1937"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(283 243.5) rotate(90) scale(110.5)"
            >
              <stop stopColor="#00E5FF"></stop>
              <stop offset="1" stopColor="#FF007F"></stop>
            </radialGradient>
            <radialGradient
              id="paint1_radial_133_1937"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(193.481 289.001) rotate(50) scale(405.914 604.631)"
            >
              <stop
                stopColor={isDarkMode ? 'white' : '#555'}
                stopOpacity="0.2"
              ></stop>
              <stop
                offset="0.6"
                stopColor={isDarkMode ? 'white' : '#555'}
                stopOpacity="0"
              ></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default GridBackground
