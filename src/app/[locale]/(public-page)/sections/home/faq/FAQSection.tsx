'use client'

import React, { useState, useEffect, useRef } from 'react'
import QuestionBox from './QuestionBox'
// import AskQuestionButton from './AskQuestionButton'
import LeftArrowButton from '../../../components/button/LeftArrowButton'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { useTranslations } from 'next-intl'
import { IFaqListItemPublicResult, IFaqListPublicResult } from '@corede_package'

const FAQSection: React.FC<{
  faqListResult: IFaqListPublicResult
}> = ({ faqListResult }) => {
  console.log('faqListResult', faqListResult)
  const t = useTranslations('pages.home.faq')
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)
  const [answer, setAnswer] = useState<string>('')
  const [displayedAnswer, setDisplayedAnswer] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [isAskingQuestion, setIsAskingQuestion] = useState<boolean>(false)
  const [userQuestion, setUserQuestion] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const mode = useTheme((state) => state.mode)
  const isDark = mode === MODE_DARK
  const sectionRef = useRef<HTMLElement>(null)

  const faqList = faqListResult?.data

  // IntersectionObserver ile görünürlüğü takip et
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleQuestionClick = (faq: IFaqListItemPublicResult) => {
    setSelectedQuestion(faq.question)
    setDisplayedAnswer('')
    setIsTyping(true)
    setIsAskingQuestion(false)
    setAnswer(faq.answer)
  }

  const handleBackClick = () => {
    setSelectedQuestion(null)
    setDisplayedAnswer('')
    setIsTyping(false)
    setIsAskingQuestion(false)
  }

  /**
   * @note for now we are disabling adding new faq to the system by user
   */
  // const handleAskQuestionClick = () => {
  //   if (selectedQuestion) {
  //     handleBackClick()
  //   } else {
  //     setIsAskingQuestion(true)
  //   }
  // }

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    if (userQuestion.trim()) {
      setSelectedQuestion(userQuestion)
      setUserQuestion('')
      setDisplayedAnswer('')
      setIsTyping(true)
      setIsAskingQuestion(false)
      // Örnek cevap olarak ilk sorunun cevabını kullan
      setAnswer(t('questions.0.answer'))
    }
  }

  // Yazı yazma efekti için useEffect
  useEffect(() => {
    if (isTyping && displayedAnswer.length < answer.length) {
      const timer = setTimeout(() => {
        setDisplayedAnswer(answer.slice(0, displayedAnswer.length + 1))
      }, 25) // Yazma hızı, karakter başına 25ms

      return () => clearTimeout(timer)
    } else if (displayedAnswer.length === answer.length) {
      setIsTyping(false)
    }
  }, [answer, displayedAnswer, isTyping])

  return (
    <section
      ref={sectionRef}
      className={`relative px-4 sm:px-6 pb-12 mx-auto my-0 w-full mb-24 max-w-screen-xl min-h-[736px] ${isDark ? '' : 'bg-gray-50'}`}
    >
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <svg
          className="w-full h-full"
          width="1097"
          height="1004"
          viewBox="0 0 1097 1004"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            filter="url(#filter0_f_246_2124)"
            className={`${isVisible ? 'animate-pulse' : ''}`}
            style={{ animationDuration: '8s' }}
          >
            <circle
              cx="529.5"
              cy="436.5"
              r="215.5"
              transform="rotate(180 529.5 436.5)"
              fill="url(#paint0_radial_246_2124)"
              fillOpacity={isDark ? '0.25' : '0.15'}
            />
          </g>
          <path
            d="M412.738 672.825H674.165M0.396126 229.32L0.396101 763.915M35.2531 229.32L35.2531 763.915M70.11 229.32L70.11 763.915M104.967 229.32L104.967 763.915M139.824 229.32L139.824 763.915M174.681 229.32L174.681 763.915M209.538 229.32L209.538 763.915M244.395 229.32L244.395 763.915M279.252 229.32L279.252 763.915M0 742.636H1080.57M314.109 229.32L314.109 763.915M0 709.784H1080.57M348.966 229.32L348.966 763.915M0 676.932H1080.57M383.823 229.32L383.823 763.915M0 644.079H1080.57M418.68 229.32L418.68 763.915M0 611.227H1080.57M453.537 229.32L453.537 763.915M0 578.375H1080.57M488.394 229.32L488.394 763.915M0 545.523H1080.57M523.251 229.32L523.251 763.915M0 512.67H1080.57M558.108 229.32L558.108 763.915M0 479.818H1080.57M592.965 229.32L592.965 763.915M0 446.966H1080.57M627.822 229.32L627.821 763.915M0 414.114H1080.57M662.679 229.32L662.678 763.915M0 381.261H1080.57M697.535 229.32L697.535 763.915M0 348.409H1080.57M732.392 229.32L732.392 763.915M0 315.557H1080.57M767.249 229.32L767.249 763.915M0 282.705H1080.57M802.106 229.32L802.106 763.915M0 249.852H1080.57M836.963 229.32V763.915M0 217L1080.57 217M871.82 229.32V763.915M906.677 229.32V763.915M941.534 229.32V763.915M976.391 229.32V763.915M1011.25 229.32V763.915M1046.11 229.32V763.915M1080.96 229.32V763.915"
            stroke={`url(#paint1_radial_246_2124)`}
            strokeOpacity={isDark ? '1' : '0.6'}
            className={`${isVisible ? 'animate-fadeIn' : ''}`}
            style={{
              animationDuration: '1.5s',
              strokeDasharray: isVisible ? '1' : '0',
              strokeDashoffset: isVisible ? '0' : '1',
              transition: 'stroke-dashoffset 1.5s ease-in-out',
            }}
          />
          <defs>
            <filter
              id="filter0_f_246_2124"
              x="-37.9"
              y="-130.9"
              width="1134.8"
              height="1134.8"
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
                stdDeviation="175.95"
                result="effect1_foregroundBlur_246_2124"
              />
            </filter>
            <radialGradient
              id="paint0_radial_246_2124"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(530 312.5) rotate(90) scale(310.5)"
            >
              <stop stopColor="#00E5FF" />
              <stop offset="1" stopColor="#FF007F" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_246_2124"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(540.481 458.001) rotate(90) scale(305.914 604.631)"
            >
              <stop stopColor={isDark ? 'white' : 'gray'} stopOpacity="0.2" />
              <stop
                offset="0.6"
                stopColor={isDark ? 'white' : 'gray'}
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {!selectedQuestion ? (
        // Sorular Görünümü
        <div className="flex relative flex-col items-center mt-12 sm:mt-16 md:mt-24 w-full rounded-3xl h-auto lg:h-[646px]">
          <h1
            className={`mt-12 mb-16 sm:my-16 md:mt-24 md:mb-24 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight sm:leading-tight md:leading-[1.2] lg:leading-[86.4px] ${isDark ? 'text-white' : 'text-gray-800'}
            transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {t('title')}
          </h1>

          {isAskingQuestion ? (
            // Soru Sorma Formu
            <div
              className={`w-full max-w-3xl px-4 sm:px-8 mb-12 sm:mb-16 md:mb-20
              transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <form
                onSubmit={handleSubmitQuestion}
                className="flex flex-col space-y-6"
              >
                <div className="relative">
                  <textarea
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    placeholder={t('typeYourQuestion')}
                    className={`w-full h-32 p-4 sm:p-5 text-base sm:text-lg md:text-xl font-medium backdrop-blur-[13.1px] border border-opacity-40 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 resize-none
                      ${
                        isDark
                          ? 'bg-[#0f1030]/20 border-[#3d4da6] text-white focus:ring-[#3d4da6]'
                          : 'bg-white/80 border-gray-300 text-gray-800 focus:ring-purple-400'
                      }`}
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsAskingQuestion(false)}
                    className={`flex-1 py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-xl border border-opacity-40 transition-all
                      ${
                        isDark
                          ? 'border-[#3d4da6] text-white bg-transparent hover:bg-[#0f1030]/30'
                          : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-100'
                      }`}
                  >
                    {t('cancel')}
                  </button>
                  <button
                    type="submit"
                    className={`flex-1 py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-xl border border-opacity-40 transition-all
                      ${
                        isDark
                          ? 'bg-[#271e51] border-[#6a35c2] text-white hover:bg-[#271e51]/80'
                          : 'bg-purple-500 border-purple-400 text-white hover:bg-purple-600'
                      }`}
                  >
                    {t('submit')}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // Normal Soru Listesi
            <div
              className={`grid gap-4 sm:gap-5 md:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 py-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto
              transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '300ms' }}
            >
              {faqList?.map((faq, index) => (
                <QuestionBox
                  key={index}
                  question={faq.question}
                  onClick={() => handleQuestionClick(faq)}
                />
              ))}
            </div>
          )}

          {/* İhtiyaç duyulduğunda aktive edilebilir
          <div className="mt-8 sm:mt-12 md:mt-16">
            <button
              onClick={handleAskQuestionClick}
              className={`px-6 py-3 text-base sm:text-lg font-medium rounded-full transition-all duration-300
                ${
                  isDark
                    ? 'bg-[#271e51] border border-[#6a35c2] text-white hover:bg-[#271e51]/80'
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}
            >
              {isAskingQuestion ? t('viewQuestions') : t('askYourOwnQuestion')}
            </button>
          </div>
          */}
        </div>
      ) : (
        // Soru Detay Görünümü
        <div className="flex flex-col items-center pt-12 sm:pt-16 md:pt-24 rounded-none">
          <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 pb-8 w-full rounded-3xl max-md:max-w-full">
            <div className="relative z-10 flex flex-col w-full max-w-[1081px] min-h-[547px]">
              <div
                className={`flex flex-wrap gap-4 sm:gap-5 justify-between mb-6 sm:mb-8 w-full
                transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '100ms' }}
              >
                <LeftArrowButton prevSlide={handleBackClick} />
                <h2
                  className={`my-auto text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center ${isDark ? 'text-white' : 'text-gray-800'}`}
                >
                  {t('title')}
                </h2>
              </div>

              {/* Soru ve cevap konuşma balonları */}
              <div className="flex flex-col space-y-6 sm:space-y-8 w-full">
                {/* AI Cevap balonu - sol tarafta */}
                <div
                  className={`relative flex flex-col w-full sm:w-[90%] md:w-[80%] lg:w-[75%]
                  transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <div
                    className={`flex relative flex-col px-4 sm:px-6 md:px-8 lg:px-11 pt-4 sm:pt-5 pb-10 sm:pb-14 text-base sm:text-lg md:text-xl font-medium tracking-tighter rounded-xl backdrop-blur-[13.1px] border border-opacity-40 shadow-lg
                    ${
                      isDark
                        ? 'bg-[#0f1030] border-[#3d4da6] text-white'
                        : 'bg-white/90 border-gray-300 text-gray-800'
                    }`}
                  >
                    {displayedAnswer}
                    {isTyping && (
                      <span className="inline-block ml-1 animate-pulse">▌</span>
                    )}
                  </div>
                  <div
                    className={`absolute -left-3 bottom-0 w-6 h-6 transform rotate-45 rounded-sm border-b border-l border-opacity-40
                    ${
                      isDark
                        ? 'bg-[#0f1030] border-[#3d4da6]'
                        : 'bg-white/90 border-gray-300'
                    }`}
                  ></div>
                </div>

                {/* Kullanıcı Soru balonu - sağ tarafta */}
                <div className="relative flex flex-col ml-auto mr-4 sm:mr-8 lg:mr-11 max-w-[85%] sm:max-w-[70%] md:max-w-md">
                  <div
                    className={`flex relative flex-col p-4 sm:p-5 text-base sm:text-lg md:text-xl font-medium tracking-tighter text-center rounded-xl backdrop-blur-[13.1px] border border-opacity-40 shadow-lg
                    ${
                      isDark
                        ? 'bg-[#271e51] border-[#6a35c2] text-white'
                        : 'bg-purple-100 border-purple-300 text-gray-800'
                    }`}
                  >
                    {selectedQuestion}
                  </div>
                  <div
                    className={`absolute -right-3 bottom-0 w-6 h-6 transform rotate-45 rounded-sm border-r border-b border-opacity-40
                    ${
                      isDark
                        ? 'bg-[#271e51] border-[#6a35c2]'
                        : 'bg-purple-100 border-purple-300'
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* İhtiyaç duyulduğunda aktive edilebilir
            <div className="mt-12 sm:mt-16 md:mt-24 max-md:mt-10">
              <button
                onClick={handleAskQuestionClick}
                className={`px-6 py-3 text-base sm:text-lg font-medium rounded-full transition-all duration-300
                  ${
                    isDark
                      ? 'bg-[#271e51] border border-[#6a35c2] text-white hover:bg-[#271e51]/80'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
              >
                {t('askYourOwnQuestion')}
              </button>
            </div>
            */}
          </div>
        </div>
      )}
    </section>
  )
}

export default FAQSection
