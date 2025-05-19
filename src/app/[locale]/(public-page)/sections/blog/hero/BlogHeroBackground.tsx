'use client'
import React from 'react'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'

const BlogHeroBackground = () => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK

  return (
    <>
      {/* SVG Arkaplan */}
      <div className="absolute inset-0">
        <svg
          width="1512"
          height="874"
          viewBox="0 0 1512 874"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hero-bg w-full h-full absolute top-0 left-0"
        >
          <g filter="url(#filter0_f_133_1996)">
            <path
              d="M1288 36.5C1288 349.922 1033.92 604 720.5 604C407.078 604 153 349.922 153 36.5C153 -276.922 407.078 -531 720.5 -531C1033.92 -531 1288 -276.922 1288 36.5ZM345.689 36.5C345.689 243.503 513.497 411.311 720.5 411.311C927.503 411.311 1095.31 243.503 1095.31 36.5C1095.31 -170.503 927.503 -338.311 720.5 -338.311C513.497 -338.311 345.689 -170.503 345.689 36.5Z"
              fill="url(#paint0_linear_133_1996)"
            ></path>
          </g>
          <path
            d="M577.319 688.587H942.992M0.554083 68.2321L0.554048 816M49.3104 68.2321L49.3104 816M98.0667 68.2321L98.0667 816M146.823 68.2321L146.823 816M195.579 68.2321L195.579 816M244.336 68.2321L244.336 816M293.092 68.2321L293.092 816M341.848 68.2321L341.848 816M390.605 68.2321L390.605 816M0 786.236H1511.45M439.361 68.2321L439.361 816M0 740.283H1511.45M488.117 68.2321L488.117 816M0 694.331H1511.45M536.874 68.2321V816M0 648.379H1511.45M585.63 68.2321L585.63 816M0 602.427H1511.45M634.386 68.2321L634.386 816M0 556.474H1511.45M683.143 68.2321L683.143 816M0 510.522H1511.45M731.899 68.2321L731.899 816M0 464.57H1511.45M780.655 68.2321L780.655 816M0 418.618H1511.45M829.412 68.2321L829.411 816M0 372.666H1511.45M878.168 68.2321L878.168 816M0 326.713H1511.45M926.924 68.2321L926.924 816M0 280.761H1511.45M975.681 68.2321L975.68 816M0 234.809H1511.45M1024.44 68.2321L1024.44 816M0 188.857H1511.45M1073.19 68.2321L1073.19 816M0 142.904H1511.45M1121.95 68.2321V816M0 96.9522H1511.45M1170.71 68.2321V816M0 51L1511.45 51M1219.46 68.2321V816M1268.22 68.2321V816M1316.97 68.2321V816M1365.73 68.2321V816M1414.49 68.2321V816M1463.24 68.2321V816M1512 68.2321V816"
            stroke="url(#paint1_radial_133_1996)"
          ></path>
          <defs>
            <filter
              id="filter0_f_133_1996"
              x="-117"
              y="-801"
              width="1675"
              height="1675"
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
                stdDeviation="135"
                result="effect1_foregroundBlur_133_1996"
              ></feGaussianBlur>
            </filter>
            <linearGradient
              id="paint0_linear_133_1996"
              x1="720.5"
              y1="-531"
              x2="720.5"
              y2="604"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.51" stopColor="#8A2BE2" stopOpacity={isDarkMode ? "0.7" : "0.4"}></stop>
              <stop offset="0.75" stopColor="#4A0D9A" stopOpacity={isDarkMode ? "0.7" : "0.4"}></stop>
              <stop offset="0.86" stopColor="#320D75" stopOpacity={isDarkMode ? "0.7" : "0.4"}></stop>
              <stop offset="1" stopColor="#170A4A" stopOpacity={isDarkMode ? "0.7" : "0.4"}></stop>
            </linearGradient>
            <radialGradient
              id="paint1_radial_133_1996"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(756 488.101) rotate(90) scale(427.899 845.73)"
            >
              <stop stopColor={isDarkMode ? "white" : "#555"} stopOpacity="0.2"></stop>
              <stop offset="0.6" stopColor={isDarkMode ? "white" : "#555"} stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${
        isDarkMode 
          ? 'from-slate-900/90 via-slate-900/40 to-transparent' 
          : 'from-transparent via-indigo-900/10 to-slate-100/70'
      }`}></div>
    </>
  )
}

export default BlogHeroBackground 