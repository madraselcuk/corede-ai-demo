'use client'
import React from "react";
import AiIcon from "./icons/AiIcon";
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { useTranslations } from "next-intl";

const EditorChoiceHeader: React.FC = () => {
  const mode = useTheme((state) => state.mode)
  const isDarkMode = mode === MODE_DARK
  const t = useTranslations('pages.blog.editorsChoice')
  
  return (
    <header className="flex gap-1.5 items-center px-0 mt-24 py-8 max-sm:px-0 max-sm:py-10">
      <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} max-sm:text-5xl`}>
        {t('title')}
      </h1>
      <div className={`flex justify-center items-center w-10 h-10 rounded-3xl ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
        <AiIcon />
      </div>
    </header>
  );
};

export default EditorChoiceHeader; 