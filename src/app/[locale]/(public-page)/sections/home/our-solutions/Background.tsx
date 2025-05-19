import React from 'react'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'

export default function Background() {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK

  return (
    <div className="absolute inset-0">
      {/* Üst kısım siyah gradient geçişi */}
      <div
        className="absolute left-[-30%] md:left-[46%] top-[-280px] transform -translate-x-1/2 w-[1081px] h-[100vh] max-lg:w-[800px] max-sm:w-full z-[1]"
        dangerouslySetInnerHTML={{
          __html: `<svg width="1135" height="1135" viewBox="0 0 1135 1135" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_133_1886)">
<circle cx="567.5" cy="567.5" r="215.5" fill="url(#paint0_radial_133_1886)" fill-opacity="0.25"></circle>
</g>
<path d="M450.738 803.825H712.165M38.3961 360.32L38.3961 894.915M73.2531 360.32L73.2531 894.915M108.11 360.32L108.11 894.915M142.967 360.32L142.967 894.915M177.824 360.32L177.824 894.915M212.681 360.32L212.681 894.915M247.538 360.32L247.538 894.915M282.395 360.32L282.395 894.915M317.252 360.32L317.252 894.915M38 873.636H1118.57M352.109 360.32L352.109 894.915M38 840.784H1118.57M386.966 360.32L386.966 894.915M38 807.932H1118.57M421.823 360.32L421.823 894.915M38 775.079H1118.57M456.68 360.32L456.68 894.915M38 742.227H1118.57M491.537 360.32L491.537 894.915M38 709.375H1118.57M526.394 360.32L526.394 894.915M38 676.523H1118.57M561.251 360.32L561.251 894.915M38 643.67H1118.57M596.108 360.32L596.108 894.915M38 610.818H1118.57M630.965 360.32L630.965 894.915M38 577.966H1118.57M665.822 360.32L665.821 894.915M38 545.114H1118.57M700.679 360.32L700.678 894.915M38 512.261H1118.57M735.535 360.32L735.535 894.915M38 479.409H1118.57M770.392 360.32L770.392 894.915M38 446.557H1118.57M805.249 360.32L805.249 894.915M38 413.705H1118.57M840.106 360.32L840.106 894.915M38 380.852H1118.57M874.963 360.32V894.915M38 348L1118.57 348M909.82 360.32V894.915M944.677 360.32V894.915M979.534 360.32V894.915M1014.39 360.32V894.915M1049.25 360.32V894.915M1084.11 360.32V894.915M1118.96 360.32V894.915" stroke="url(#paint1_radial_133_1886)"></path>
<defs>
<filter id="filter0_f_133_1886" x="0.100006" y="0.100006" width="1134.8" height="1134.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
<feGaussianBlur stdDeviation="175.95" result="effect1_foregroundBlur_133_1886"></feGaussianBlur>
</filter>
<radialGradient id="paint0_radial_133_1886" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(568 443.5) rotate(90) scale(310.5)">
<stop stop-color="#0070F3"></stop>
<stop offset="1" stop-color="#00BFFF"></stop>
</radialGradient>
<radialGradient id="paint1_radial_133_1886" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(578.481 589.001) rotate(90) scale(305.914 604.631)">
<stop stop-color=${isDarkMode ? 'white' : '#555'} stop-opacity="0.2"></stop>
<stop offset="0.6" stop-color=${isDarkMode ? 'white' : '#555'} stop-opacity="0"></stop>
</radialGradient>
</defs>
</svg>`,
        }}
      />

      {/* Dikey gradient mor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>

      {/* Grid SVG - Daha büyük yükseklik */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full overflow-x-clip ">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 1135 1135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M450.738 803.825H712.165M38.3961 360.32L38.3961 894.915M73.2531 360.32L73.2531 894.915M108.11 360.32L108.11 894.915M142.967 360.32L142.967 894.915M177.824 360.32L177.824 894.915M212.681 360.32L212.681 894.915M247.538 360.32L247.538 894.915M282.395 360.32L282.395 894.915M317.252 360.32L317.252 894.915M38 873.636H1118.57M352.109 360.32L352.109 894.915M38 840.784H1118.57M386.966 360.32L386.966 894.915M38 807.932H1118.57M421.823 360.32L421.823 894.915M38 775.079H1118.57M456.68 360.32L456.68 894.915M38 742.227H1118.57M491.537 360.32L491.537 894.915M38 709.375H1118.57M526.394 360.32L526.394 894.915M38 676.523H1118.57M561.251 360.32L561.251 894.915M38 643.67H1118.57M596.108 360.32L596.108 894.915M38 610.818H1118.57M630.965 360.32L630.965 894.915M38 577.966H1118.57M665.822 360.32L665.821 894.915M38 545.114H1118.57M700.679 360.32L700.678 894.915M38 512.261H1118.57M735.535 360.32L735.535 894.915M38 479.409H1118.57M770.392 360.32L770.392 894.915M38 446.557H1118.57M805.249 360.32L805.249 894.915M38 413.705H1118.57M840.106 360.32L840.106 894.915M38 380.852H1118.57M874.963 360.32V894.915M38 348L1118.57 348M909.82 360.32V894.915M944.677 360.32V894.915M979.534 360.32V894.915M1014.39 360.32V894.915M1049.25 360.32V894.915M1084.11 360.32V894.915M1118.96 360.32V894.915"
            stroke="url(#grid-gradient)"
            strokeOpacity="0.3"
          />
          <defs>
            <radialGradient
              id="grid-gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(578.481 589.001) rotate(90) scale(305.914 604.631)"
            >
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.6" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Alt kısım gradyantı - Geniş ve yumuşak */}
      {/* <div className="absolute left-0 bottom-0 right-0 h-[40vh] bg-gradient-to-t dark:from-secondary/5 dark:via-secondary/10 dark:to-transparent from-secondary/5 via-secondary/10 to-transparent"></div> */}
    </div>
  )
}
