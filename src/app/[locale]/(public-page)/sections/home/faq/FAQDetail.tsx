"use client";
import * as React from "react";
import BackgroundCard from "./BackgroundCard";
import LeftArrowButton from "../../../components/button/LeftArrowButton";
import { useRouter } from "next/navigation";
import useTheme from "@/utils/hooks/useTheme";
import { MODE_DARK } from "@/constants/theme.constant";
import { useTranslations } from "next-intl";

interface FAQDetailProps {
  question: string;
  answer?: string;
}

const FAQDetail: React.FC<FAQDetailProps> = ({ 
  question, 
  answer 
}) => {
  const t = useTranslations('pages.home.testimonials.header')
  const router = useRouter();
  const mode = useTheme((state) => state.mode);
  const isDark = mode === MODE_DARK;

  return (
    <section className={`pt-24 rounded-none ${isDark ? "" : "bg-gray-50"}`}>
      <div className="flex flex-col items-center px-20 pb-8 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
        <BackgroundCard
          imageSrc="https://cdn.builder.io/api/v1/image/assets/752829f2004942bd86b73ec754b79f5d/da2e2316d7a2f6ed161085abff60adf24561f85d?placeholderIfAbsent=true"
          className="flex relative z-10 flex-col items-start pt-48 pr-20 pb-9 pl-4 mt-0 w-full max-w-[1081px] min-h-[547px] max-md:pt-24 max-md:pr-5 max-md:max-w-full"
        >
          <div className="flex relative flex-wrap gap-5 justify-between max-w-full w-[735px]">
            <LeftArrowButton 
              prevSlide={() => router.back()}
            />
            <h2 className={`my-auto text-3xl font-bold leading-tight text-center ${isDark ? "text-white" : "text-gray-800"} max-md:max-w-full`}>
              {t('title')}
            </h2>
          </div>
          <BackgroundCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/752829f2004942bd86b73ec754b79f5d/65ecd3d48a5b45c66e2795180e0c617d59d6e2ab?placeholderIfAbsent=true"
            className={`flex relative flex-col px-11 pt-5 pb-14 mt-28 max-w-full text-xl font-medium tracking-tighter rounded-xl min-h-[148px] w-[789px] max-md:px-5 max-md:mt-10 max-md:max-w-full ${isDark ? "text-white" : "text-gray-700"}`}
          >
            {answer}
          </BackgroundCard>
        </BackgroundCard>
        <p className={`z-10 self-end mt-0 mr-11 text-xl font-medium tracking-tighter text-center ${isDark ? "text-white" : "text-gray-800"} max-md:mr-2.5`}>
          {question}
        </p>
        {/* <QuestionButton onClick={() => router.back()} /> */}
      </div>
    </section>
  );
};

export default FAQDetail; 