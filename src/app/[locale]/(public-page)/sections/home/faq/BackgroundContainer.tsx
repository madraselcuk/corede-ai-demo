"use client";

import React, { ReactNode } from "react";
import useTheme from "@/utils/hooks/useTheme";
import { MODE_DARK } from "@/constants/theme.constant";

interface BackgroundContainerProps {
  children?: ReactNode;
  className?: string;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children,
  className,
}) => {
  const mode = useTheme((state) => state.mode);
  const isDark = mode === MODE_DARK;

  return (
    <main className={`relative w-full h-screen ${isDark ? "bg-gray-900" : "bg-gray-100"} ${className || ""}`}>
      {children && <div className="relative z-10">{children}</div>}
    </main>
  );
};

export default BackgroundContainer; 