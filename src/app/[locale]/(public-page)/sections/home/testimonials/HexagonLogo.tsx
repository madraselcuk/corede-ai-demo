import React, { useState } from "react";
import VercelLogo from "./logos/VercelLogo";
import GoogleLogo from "./logos/GoogleLogo";
import XLogo from "./logos/XLogo";
import SquareLogo from "./logos/SquareLogo";
import useTheme from "@/utils/hooks/useTheme";

interface HexagonLogoProps {
  position: string;
  logoSvg: string;
  blur: number;
  innerShadow: boolean;
  shadowDirection?: "top" | "bottom";
  fillOpacity?: string;
  isActive?: boolean;
  id?: string;
  onClick?: () => void;
  className?: string;
}

const HexagonLogo: React.FC<HexagonLogoProps> = ({
  position,
  logoSvg,
  blur,
  innerShadow,
  shadowDirection = "bottom",
  fillOpacity = "0.01",
  isActive = false,
  id = "",
  onClick,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const mode = useTheme((state) => state.mode);
  const isDarkTheme = mode === "dark";
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const renderLogo = () => {
    switch (logoSvg) {
      case "vercel-logotype-light 1":
        return <VercelLogo />;
      case "google":
        return <GoogleLogo />;
      case "x-logo":
        return <XLogo />;
      case "square":
        return <SquareLogo />;
      default:
        return null;
    }
  };

  const shouldUseGradient = isActive || isHovered;

  const getHexagonSvg = () => {
    const yOffset = shadowDirection === "top" ? "-30" : "-20";
    const shadowOffset = shadowDirection === "top" ? "-30" : "30";
    const uniqueSuffix = id.replace(/\W/g, ''); // ID'den sadece harf/rakam alalım
    const fillColor = isDarkTheme ? "white" : "black";

    return `
      <svg width="175" height="151" viewBox="0 0 175 151" fill="none" xmlns="http://www.w3.org/2000/svg" class="hex-shape">
        <foreignObject x="-18.4424" y="${yOffset}" width="211.885" height="${shadowDirection === "top" ? "201" : "191"}">
          <div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(${blur}px);clip-path:url(#bgblur_clip_path_${uniqueSuffix});height:100%;width:100%"></div>
        </foreignObject>
        ${
          innerShadow
            ? `
        <g filter="url(#filter0_i_${uniqueSuffix})">
          <path d="M172.095 70.4863C173.892 73.5872 173.892 77.4128 172.095 80.5137L134.139 146.014C132.351 149.1 129.054 151 125.487 151H49.5129C45.9459 151 42.649 149.1 40.8606 146.014L2.90532 80.5137C1.10839 77.4128 1.10839 73.5872 2.90532 70.4863L40.8606 4.98625C42.649 1.89999 45.9459 0 49.5129 0H125.487C129.054 0 132.351 1.89999 134.139 4.98625L172.095 70.4863Z" fill="${fillColor}" fill-opacity="${shouldUseGradient ? "0.05" : fillOpacity}"></path>
          <path d="M171.662 70.7369C173.369 73.6829 173.369 77.3171 171.662 80.2631L133.707 145.763C132.008 148.695 128.876 150.5 125.487 150.5H49.5129C46.1243 150.5 42.9922 148.695 41.2932 145.763L3.33793 80.2631C1.63085 77.3171 1.63085 73.6829 3.33793 70.7369L41.2932 5.23694C42.9922 2.30499 46.1243 0.5 49.5129 0.5H125.487C128.876 0.5 132.008 2.30499 133.707 5.23694L171.662 70.7369Z" stroke="${shouldUseGradient ? `url(#paint1_linear_${uniqueSuffix})` : `url(#paint0_linear_faded_${uniqueSuffix})`}"></path>
        </g>
        `
            : `
        <path d="M171.662 70.7369C173.369 73.6829 173.369 77.3171 171.662 80.2631L133.707 145.763C132.008 148.695 128.876 150.5 125.487 150.5H49.5129C46.1243 150.5 42.9922 148.695 41.2932 145.763L3.33793 80.2631C1.63085 77.3171 1.63085 73.6829 3.33793 70.7369L41.2932 5.23694C42.9922 2.30499 46.1243 0.5 49.5129 0.5H125.487C128.876 0.5 132.008 2.30499 133.707 5.23694L171.662 70.7369Z" fill="${fillColor}" fill-opacity="${shouldUseGradient ? "0.05" : fillOpacity}" stroke="${shouldUseGradient ? `url(#paint1_linear_${uniqueSuffix})` : `url(#paint0_linear_faded_${uniqueSuffix})`}"></path>
        `
        }
        <defs>
          ${
            innerShadow
              ? `
          <filter id="filter0_i_${uniqueSuffix}" x="-18.4424" y="${yOffset}" width="211.885" height="${shadowDirection === "top" ? "201" : "191"}" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
            <feOffset dy="${shadowOffset}"></feOffset>
            <feGaussianBlur stdDeviation="${shouldUseGradient ? "30" : "25"}"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
            <feColorMatrix type="matrix" values="${shouldUseGradient ? "0 0 0 0 0.505176 0 0 0 0 0.643727 0 0 0 0 1 0 0 0 0.5 0" : "0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0.05 0"}"></feColorMatrix> 
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend>
          </filter>
          `
              : ""
          }
          <clipPath id="bgblur_clip_path_${uniqueSuffix}" transform="translate(18.4424 ${shadowDirection === "top" ? "30" : "20"})">
            <path d="M172.095 70.4863C173.892 73.5872 173.892 77.4128 172.095 80.5137L134.139 146.014C132.351 149.1 129.054 151 125.487 151H49.5129C45.9459 151 42.649 149.1 40.8606 146.014L2.90532 80.5137C1.10839 77.4128 1.10839 73.5872 2.90532 70.4863L40.8606 4.98625C42.649 1.89999 45.9459 0 49.5129 0H125.487C129.054 0 132.351 1.89999 134.139 4.98625L172.095 70.4863Z"></path>
          </clipPath>
          ${ 
            shouldUseGradient
              ? `
          <radialGradient id="paint0_radial_${uniqueSuffix}" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.6739 76.5) rotate(90) scale(93.9556 53.975)">
            <stop offset="1" stop-color="${isDarkTheme ? '#06061B' : '#F5F5F5'}" stop-opacity="0.02"></stop>
          </radialGradient>
          <linearGradient id="paint1_linear_${uniqueSuffix}" x1="87.5" y1="1" x2="87.5" y2="152" gradientUnits="userSpaceOnUse">
            <stop offset="0.0210551" stop-color="#8A2BE2"></stop>
            <stop offset="0.49" stop-color="#00E5FF"></stop>
            <stop offset="0.953459" stop-color="#FF007F"></stop>
          </linearGradient>
          `
              : `
          <linearGradient id="paint0_linear_faded_${uniqueSuffix}" x1="${shadowDirection === "top" ? "0" : "175"}" y1="${shadowDirection === "top" ? "0" : "151"}" x2="${shadowDirection === "top" ? "175" : "5.9792e-07"}" y2="${shadowDirection === "top" ? "151" : "-6.92953e-07"}" gradientUnits="userSpaceOnUse">
            <stop stop-color="${fillColor}" stop-opacity="0.02"></stop>
            <stop offset="1" stop-color="${fillColor}" stop-opacity="0.08"></stop>
          </linearGradient>
          `
          }
          ${ !shouldUseGradient && `
          <linearGradient id="paint0_linear_${uniqueSuffix}" x1="${shadowDirection === "top" ? "0" : "175"}" y1="${shadowDirection === "top" ? "0" : "151"}" x2="${shadowDirection === "top" ? "175" : "5.9792e-07"}" y2="${shadowDirection === "top" ? "151" : "-6.92953e-07"}" gradientUnits="userSpaceOnUse">
            <stop stop-color="${fillOpacity === "0.04" ? (isDarkTheme ? "#E1F6FF" : "#333") : fillColor}" stop-opacity="${fillOpacity === "0.04" ? "0.3" : "0"}"></stop>
            <stop offset="1" stop-color="${fillColor}" stop-opacity="${fillOpacity === "0.04" ? "0.07" : "0.2"}"></stop>
          </linearGradient>
          `}
        </defs>
      </svg>
    `;
  };

  return (
    <div 
      className={`${position} cursor-pointer transition-all duration-300 ${isActive ? 'scale-110' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      id={id}
    >
      <div dangerouslySetInnerHTML={{ __html: getHexagonSvg() }} />
      <div className="flex absolute top-2/4 left-2/4 justify-center items-center -translate-x-2/4 -translate-y-2/4 h-[45px] w-[150px]">
        {renderLogo()}
      </div>
    </div>
  );
};

export default HexagonLogo; 