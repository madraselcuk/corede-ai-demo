import React from 'react'
import { useRouter } from "next/navigation";
import useTheme from "@/utils/hooks/useTheme";
import { MODE_DARK } from "@/constants/theme.constant";

interface AskQuestionButtonProps {
    text: string
    onClick?: () => void
}

const AskQuestionButton: React.FC<AskQuestionButtonProps> = ({
    text,
    onClick,
}) => {
    const router = useRouter();
    const mode = useTheme((state) => state.mode);
    const isDark = mode === MODE_DARK;

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            // Yeni soru sorma sayfasına yönlendir
            router.push("/faq/ask");
        }
    };

    return (
        <div className="absolute left-2/4 -translate-x-2/4 -bottom-[100px] lg:bottom-[33px] w-[544px] h-[52px] max-md:w-4/5 max-sm:w-[90%]">
            <div 
                className="absolute inset-0 rounded-xl animate-gradient-rotate"
                style={{
                    background: 'linear-gradient(to right, #8A2BE2, #FF007F, #00E5FF)',
                    backgroundSize: '200% 200%',
                    opacity: isDark ? 0.9 : 0.7
                }}
            />
            <button
                onClick={handleClick}
                className={`absolute inset-[1.5px] flex gap-2 justify-center items-center w-[calc(100%-3px)] h-[calc(100%-3px)] rounded-xl backdrop-blur-[13.1px] text-xl font-medium tracking-tighter text-center transition-all duration-200
                    ${isDark 
                        ? "bg-[#070426] text-white" 
                        : "bg-white text-gray-800"
                    }`}
            >
                <i className={`ti ti-ai text-2xl ${isDark ? "text-white" : "text-gray-800"}`} aria-hidden="true" />
                <span>{text}</span>
            </button>
        </div>
    )
}

export default AskQuestionButton
