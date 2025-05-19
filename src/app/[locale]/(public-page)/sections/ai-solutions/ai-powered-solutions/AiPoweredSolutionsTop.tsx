import React from 'react'
import { useTranslations } from 'next-intl'

const AiPoweredSolutionsTop = () => {
  const t = useTranslations('pages.aiSolutions.aiPoweredSolutions')

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl md:text-5xl font-bold md:max-w-xl text-center md:text-left">
        {t('title')}
      </h2>
      <div
        className="flex flex-col gap-4 bg-gradient-to-t from-secondary/50 to-transparent
      border border-slate-200 dark:border-slate-900 rounded-2xl p-4"
      >
        <div
          className="flex flex-col gap-4 flex-1 border border-slate-200 dark:border-gray-600/50 rounded-2xl
            dark:bg-[url('/img/others/ai-solutions/ai-powered-bg-pattern.png')] 
             bg-repeat bg-center bg-clip-content  h-[230px]  "
        >
          <div className=" justify-center items-center rounded-2xl bg-gradient-to-t from-white/20 to-transparent flex w-full h-[230px] ">
            <div className="rounded-none md:rounded-2xl bg-white/10 border border-slate-300 dark:border-gray-500/50 flex w-full md:w-1/2 h-3/4">
              <div
                className=" w-full flex justify-center items-start
              bg-[url('/img/others/ai-solutions/ai-powered-bg-pattern-2.png')]
              bg-center bg-clip-content bg-no-repeat "
              >
                <div className="bg-[url('/img/others/ai-solutions/ai-powered-notch.png')] bg-center bg-clip-content bg-no-repeat w-full  h-[29px]">
                  <p className="text-center text-sm pt-1">WEB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1 pb-4 ">
          <h3 className="text-xl md:text-4xl font-bold">
            {t('section-1-title')}
          </h3>
          <p className="text-xs md:text-xl text-slate-800 dark:text-slate-100">
            {t('section-1-description')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AiPoweredSolutionsTop
