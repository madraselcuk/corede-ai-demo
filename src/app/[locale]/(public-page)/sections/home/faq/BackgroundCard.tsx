import React, { ReactNode } from "react";
import useTheme from "@/utils/hooks/useTheme";
import { MODE_DARK } from "@/constants/theme.constant";

interface BackgroundCardProps {
  imageSrc: string;
  children: ReactNode;
  className?: string;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  imageSrc,
  children,
  className = "",
}) => {
  const mode = useTheme((state) => state.mode);
  const isDark = mode === MODE_DARK;

  return (
    <div className={`${className} ${isDark ? "" : "bg-white/10 backdrop-blur-sm border border-gray-200 rounded-lg"}`}>
      <img
        src={imageSrc}
        className={`object-cover absolute inset-0 size-full ${isDark ? "" : "opacity-30"}`}
        alt=""
      />
      {children}
    </div>
  );
};

export default BackgroundCard; 