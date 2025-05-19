interface GradientCircleProps {
  width?: number
  height?: number
  className?: string
}

export const GradientCircle: React.FC<GradientCircleProps> = ({
  width = 376,
  height = 376,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 827 890"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`gradient-circle ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      aria-hidden="true"
    >
      <g filter="url(#filter0_f_245_1637)">
        <path
          d="M557 445C557 548.83 472.83 633 369 633C265.17 633 181 548.83 181 445C181 341.17 265.17 257 369 257C472.83 257 557 341.17 557 445ZM244.833 445C244.833 513.575 300.425 569.167 369 569.167C437.575 569.167 493.167 513.575 493.167 445C493.167 376.425 437.575 320.833 369 320.833C300.425 320.833 244.833 376.425 244.833 445Z"
          fill="url(#paint0_linear_245_1637)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_245_1637"
          x="-89"
          y="-13"
          width="916"
          height="916"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="135"
            result="effect1_foregroundBlur_245_1637"
          />
        </filter>
        <linearGradient
          id="paint0_linear_245_1637"
          x1="369"
          y1="257"
          x2="369"
          y2="633"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.51" stopColor="#00E5FF" stopOpacity="0.5" />
          <stop offset="0.75" stopColor="#8A2BE2" stopOpacity="0.5" />
          <stop offset="0.86" stopColor="#8A2BE2" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FF007F" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  )
}
