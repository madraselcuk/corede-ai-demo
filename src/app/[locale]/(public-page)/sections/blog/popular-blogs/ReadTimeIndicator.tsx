import React from "react";

interface ReadTimeIndicatorProps {
  readTime: string;
}

const ReadTimeIndicator: React.FC<ReadTimeIndicatorProps> = ({ readTime }) => {
  return (
    <div className="flex gap-1 sm:gap-1.5 items-center text-sm sm:text-base leading-tight sm:leading-6 text-gray-500 dark:text-slate-400">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9952bfa66d2fd3574dfce38c8fe6b03d2e70dca5?placeholderIfAbsent=true&apiKey=752829f2004942bd86b73ec754b79f5d"
        className="w-4 sm:w-5 aspect-square object-contain"
        alt="Clock icon"
      />
      <span>{readTime}</span>
    </div>
  );
};

export default ReadTimeIndicator;
