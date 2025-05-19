"use client";

import React, { useState, useEffect } from "react";

const BackgroundGrid: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Component mount olduğunda animasyonu başlat
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className={`w-full h-full transition-all duration-1000 ease-in-out ${
        animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <svg
          width="1512"
          height="1009"
          viewBox="0 0 1512 1009"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <g filter="url(#filter0_f_133_1805)" className="dark:opacity-100 opacity-70">
            <rect
              width="1512"
              height="481"
              transform="matrix(1 0 0 -1 0 745)"
              fill="url(#paint0_linear_133_1805)"
              className={`dark:opacity-100 opacity-70 transition-transform duration-[30s] ease-in-out ${
                animate ? 'animate-pulse-slow' : ''
              }`}
            />
          </g>
          <path
            d="M628.738 620.825H890.165M216.396 177.32L216.396 711.915M251.253 177.32L251.253 711.915M286.11 177.32L286.11 711.915M320.967 177.32L320.967 711.915M355.824 177.32L355.824 711.915M390.681 177.32L390.681 711.915M425.538 177.32L425.538 711.915M460.395 177.32L460.395 711.915M495.252 177.32L495.252 711.915M216 690.636H1296.57M530.109 177.32L530.109 711.915M216 657.784H1296.57M564.966 177.32L564.966 711.915M216 624.932H1296.57M599.823 177.32L599.823 711.915M216 592.079H1296.57M634.68 177.32L634.68 711.915M216 559.227H1296.57M669.537 177.32L669.537 711.915M216 526.375H1296.57M704.394 177.32L704.394 711.915M216 493.523H1296.57M739.251 177.32L739.251 711.915M216 460.67H1296.57M774.108 177.32L774.108 711.915M216 427.818H1296.57M808.965 177.32L808.965 711.915M216 394.966H1296.57M843.822 177.32L843.821 711.915M216 362.114H1296.57M878.679 177.32L878.678 711.915M216 329.261H1296.57M913.535 177.32L913.535 711.915M216 296.409H1296.57M948.392 177.32L948.392 711.915M216 263.557H1296.57M983.249 177.32L983.249 711.915M216 230.705H1296.57M1018.11 177.32L1018.11 711.915M216 197.852H1296.57M1052.96 177.32V711.915M216 165L1296.57 165M1087.82 177.32V711.915M1122.68 177.32V711.915M1157.53 177.32V711.915M1192.39 177.32V711.915M1227.25 177.32V711.915M1262.11 177.32V711.915M1296.96 177.32V711.915"
            stroke="url(#paint1_radial_133_1805)"
            className={`dark:opacity-100 opacity-70 transition-all duration-1000 ${
              animate ? 'stroke-[0.7px]' : 'stroke-[0.3px]'
            }`}
          />
          <defs>
            <filter
              id="filter0_f_133_1805"
              x="-264"
              y="0"
              width="2040"
              height="1009"
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
                stdDeviation="132"
                result="effect1_foregroundBlur_133_1805"
              />
            </filter>
            <linearGradient
              id="paint0_linear_133_1805"
              x1="756"
              y1="0"
              x2="756"
              y2="481"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.824392" stopColor="#8A2BE2" stopOpacity="0" />
              <stop offset="1" stopColor="#8A2BE2" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_133_1805"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(756.481 406.001) rotate(90) scale(305.914 604.631)"
            >
              <stop stopColor="white" stopOpacity="0.2" />
              <stop offset="0.6" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default BackgroundGrid; 