import React from 'react'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'

interface RulerProps {
    selectedFeature: number
    rulerPositions: number[]
}

const Ruler: React.FC<RulerProps> = ({ selectedFeature, rulerPositions }) => {
    const mode = useTheme((state) => state.mode)
    const strokeColor = mode === MODE_DARK ? "white" : "black"
    
    return (
        <div className="hidden lg:block mx-12 relative">
            {/* SVG cetvel */}
            <svg
                width="60"
                height="338"
                viewBox="0 0 60 338"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[56px] h-[336px]"
            >
                <path
                    d="M22 1H38"
                    stroke={strokeColor}
                    strokeOpacity="0.05"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 13H38"
                    stroke={strokeColor}
                    strokeOpacity="0.25"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 25H38"
                    stroke={strokeColor}
                    strokeOpacity="0.25"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 37H38"
                    stroke={strokeColor}
                    strokeOpacity="0.4"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 49H38"
                    stroke={strokeColor}
                    strokeOpacity="0.4"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 61H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 73H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                {/* Sabit gradient çizgi - kaldırıldı */}
                {/* <path d="M2 73H58" stroke="url(#paint0_linear_133_1852)" strokeWidth="4" strokeLinecap="round"></path> */}
                <path
                    d="M22 85H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 97H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 109H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 121H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 133H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 145H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 157H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 169H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 181H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 193H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 205H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 217H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 229H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 241H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 253H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 265H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 277H38"
                    stroke={strokeColor}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 289H38"
                    stroke={strokeColor}
                    strokeOpacity="0.4"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 301H38"
                    stroke={strokeColor}
                    strokeOpacity="0.4"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 313H38"
                    stroke={strokeColor}
                    strokeOpacity="0.2"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 325H38"
                    stroke={strokeColor}
                    strokeOpacity="0.2"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M22 337H38"
                    stroke={strokeColor}
                    strokeOpacity="0.05"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_133_1852"
                        x1="2"
                        y1="74.5"
                        x2="58"
                        y2="74.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="var(--secondary)"></stop>
                        <stop
                            offset="0.515"
                            stopColor="var(--primary)"
                        ></stop>
                        <stop offset="1" stopColor="var(--tertiary)"></stop>
                    </linearGradient>
                </defs>
            </svg>

            {/* Animasyonlu vurgu elementi */}
            <div
                className="absolute left-0 w-[56px] h-[4px] bg-gradient-to-r from-primary via-secondary to-tertiary transition-all duration-500 ease-in-out rounded-full"
                style={{
                    top: `${rulerPositions[selectedFeature]}px`,
                    opacity: 1,
                }}
            ></div>
        </div>
    )
}

export default Ruler 