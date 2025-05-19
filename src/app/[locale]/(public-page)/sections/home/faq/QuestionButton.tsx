"use client";
import React from "react";
import useTheme from "@/utils/hooks/useTheme";
import { MODE_DARK } from "@/constants/theme.constant";
    import { useTranslations } from "next-intl";

interface QuestionButtonProps {
  onClick?: () => void;
}

const QuestionButton: React.FC<QuestionButtonProps> = ({ onClick }) => {
  const t = useTranslations('pages.home.faq')
  const mode = useTheme((state) => state.mode);
  const isDark = mode === MODE_DARK;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`flex flex-col justify-center items-center px-16 py-3.5 mt-24 max-w-full text-xl font-medium tracking-tighter text-center rounded-xl border-solid backdrop-blur-[calc(var(--sds-size-blur-100)] bg-opacity-10 border-[1.5px] w-[544px] max-md:px-5 max-md:mt-10 transition-all
        ${isDark 
          ? "border-purple-600 border-opacity-50 text-white bg-white" 
          : "border-purple-400 text-gray-800 bg-white"
        }`}
      onClick={handleClick}
    >
      <div className="flex gap-2 max-w-full w-[232px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/752829f2004942bd86b73ec754b79f5d/552086ee7b247ec1f4e18cac04d9217ac5d5dadd?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-6 aspect-square"
          alt="Question icon"
        />
        <span className="grow shrink w-[195px]">
          {t('askYourOwnQuestion')}
        </span>
      </div>
    </button>
  );
};

export default QuestionButton; 