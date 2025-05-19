'use client'
import React, { useState, useEffect } from 'react'
import HexagonLogo from './HexagonLogo'
import { logoConfigurations, LogoConfig } from './logoConfigs'

interface HexagonGridProps {
    activeLogo: string;
    onLogoClick: (id: string) => void;
    isVisible?: boolean;
}

const HexagonGrid: React.FC<HexagonGridProps> = ({ activeLogo, onLogoClick, isVisible = false }) => {
    const [animatedLogos, setAnimatedLogos] = useState<string[]>([]);
    
    // İlk görünür olduğunda logoları sırayla ekle
    useEffect(() => {
        if (isVisible) {
            const allLogoIds = logoConfigurations.map(config => config.id);
            let currentIndex = 0;
            
            // İlk logoyu hemen göster
            setAnimatedLogos([allLogoIds[0]]);
            currentIndex++;
            
            // Diğer logoları sırayla ekle
            const interval = setInterval(() => {
                if (currentIndex < allLogoIds.length) {
                    setAnimatedLogos(prev => [...prev, allLogoIds[currentIndex]]);
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 150); // Her 150ms'de bir logo ekle
            
            return () => clearInterval(interval);
        }
    }, [isVisible]);

    return (
        <div className="relative mx-auto my-0 -mt-64 md:-mt-36 -ml-20 mr-24 pr-40 md:pr-0 md:-ml-0.5 h-[400px] md:h-[645px] w-full lg:w-[610px] max-sm:flex max-sm:flex-col max-sm:scale-[0.4]">
            {logoConfigurations.map((config: LogoConfig) => (
                <HexagonLogo
                    key={config.id}
                    position={config.position}
                    logoSvg={config.logoSvg}
                    blur={config.blur}
                    innerShadow={config.innerShadow}
                    shadowDirection={config.shadowDirection as "top" | "bottom" | undefined}
                    fillOpacity={config.fillOpacity}
                    id={config.id}
                    isActive={activeLogo === config.id}
                    onClick={() => onLogoClick(config.id)}
                    className={`transition-all duration-500 ${
                        animatedLogos.includes(config.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                />
            ))}
        </div>
    )
}

export default HexagonGrid 