/* components/TestimonialCard.tsx */
'use client'
import React from 'react';
import useTheme from '@/utils/hooks/useTheme';
import { MODE_DARK } from '@/constants/theme.constant';

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarSrc: string;
};

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatarSrc,
}: TestimonialCardProps) {
  const mode = useTheme((state) => state.mode);
  const isDark = mode === MODE_DARK;

  return (
    <div className={`relative max-w-4xl rounded-3xl py-10 px-5 shadow-md ${
      isDark 
        ? "border border-[#3d3f5c]/40 bg-gradient-to-br from-[#111428] via-[#0e1124] to-[#0c0e21] text-white" 
        : "border border-slate-200 bg-white text-slate-800 shadow-lg"
    }`}>
      {/* Açılış tırnağı */}
      <span className="absolute top-5 left-5 w-20 h-20 invert dark:invert-0">
        <img src="/img/others/QuoteIcon.png" alt="Quote Icon" />
      </span>

      {/* Alıntı metni */}
      <p className={`mt-12 text-lg leading-relaxed tracking-wide ${
        isDark ? "text-slate-200" : "text-slate-700"
      }`}>
        {quote}
      </p>

      {/* Yazar bilgisi */}
      <div className="mt-12 flex items-center gap-4">
        <img
          src={avatarSrc}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {role}{' '}
            <span className={`font-semibold ${isDark ? "text-white" : "text-slate-800"}`}>@ {company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
