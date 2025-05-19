import React from "react";
import useTheme from "@/utils/hooks/useTheme";
import { MODE_DARK } from "@/constants/theme.constant";

interface QuestionBoxProps {
  question: string;
  onClick?: () => void;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question, onClick }) => {
  const mode = useTheme((state) => state.mode);
  const isDark = mode === MODE_DARK;

  return (
    <article 
      className={`flex items-center justify-center px-3 sm:px-4 md:px-5 py-0 text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-tighter text-center rounded-xl border border-solid backdrop-blur-[13.1px] h-[80px] sm:h-[90px] md:h-[104px] cursor-pointer transition-all duration-300 hover:border-[#8A2BE2] hover:border-opacity-70 hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] group max-w-full overflow-hidden
        ${isDark 
          ? "bg-transparent border-white border-opacity-30 text-white" 
          : "bg-white/5 border-gray-300 border-opacity-50 text-gray-800"
        }`}
      onClick={onClick}
    >
      <span className="group-hover:bg-gradient-to-r group-hover:from-[#00E5FF] group-hover:to-[#FF007F] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 px-1 line-clamp-3">
        {question}
      </span>
    </article>
  );
};

export default QuestionBox; 