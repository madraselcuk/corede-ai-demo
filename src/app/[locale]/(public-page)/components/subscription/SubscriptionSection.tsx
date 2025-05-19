"use client";

import React, { useRef, useState, useEffect } from "react";
import BackgroundGrid from "./BackgroundGrid";
import EmailSubscribeForm from "../input/EmailSubscribeInput";
import { useTranslations } from "next-intl";
import { SubscriptionFormCreatePublicFormContainer, SubscriptionFormCreatePublicFormContainerUIProps } from "@/domains/form/views/subscription-form/create-public";

const SubscriptionSection: React.FC = () => {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // IntersectionObserver ile görünürlüğü takip et
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex relative justify-center items-center w-full min-h-[580px] mb-12 0 overflow-x-clip">
      <BackgroundGrid />

      <div className="flex relative flex-col gap-8 items-center px-5 py-0 max-w-[851px] z-[1]">
        <header className={`flex flex-col gap-5 items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '100ms' }}>
          <h1 className="text-7xl font-bold bg-clip-text leading-[86.4px] max-w-[805px] text-gray-800 dark:text-white max-md:text-6xl max-sm:text-4xl">
            {t("subscription.title")}
          </h1>
          <p className="text-xl leading-8 max-w-[851px] text-gray-700 dark:text-white dark:text-opacity-80 max-md:text-lg max-sm:text-base">
            {t("subscription.description")}
          </p>
        </header>

        <SubscriptionFormCreatePublicFormContainer>
          {(props: SubscriptionFormCreatePublicFormContainerUIProps) => (
            <EmailSubscribeForm {...props} />
          )}
        </SubscriptionFormCreatePublicFormContainer>

      </div>
    </section>
  );
};

export default SubscriptionSection; 