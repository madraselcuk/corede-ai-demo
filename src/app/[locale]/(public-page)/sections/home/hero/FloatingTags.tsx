'use client'

import React, { useState } from 'react'

const FloatingTags: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    
    return (
        <div className="absolute right-[110px] top-[289px] max-md:right-10 max-sm:relative max-sm:top-auto max-sm:right-auto max-sm:mt-10">
            {/* AI Agents */}
            <div className="relative h-16 mb-5 w-[209px]">
                {/* Hover durumunda görünecek stillendirilmiş kutu */}
                <div 
                    className={`absolute inset-0 h-16 w-[209px] text-3xl font-bold text-white rounded-xl border border-purple-600 border-solid backdrop-blur-[2px] bg-[#ffffff20] backdrop-opacity-55 flex items-center justify-center rotate-[-6.466deg] transition-all duration-500 ease-in-out ${
                        hoveredItem === 'agents' 
                            ? 'opacity-100 transform-none' 
                            : 'opacity-0 scale-95'
                    }`}
                >
                    AI Agents.
                </div>
                
                {/* Normal durumda görünecek başlık */}
                <h3 
                    className={`absolute inset-0 flex items-center text-3xl text-white transition-all duration-500 ease-in-out ${
                        hoveredItem === 'agents' 
                            ? 'opacity-0' 
                            : 'opacity-100'
                    }`}
                >
                    AI Agents.
                </h3>
                
                {/* Mouse olayları için görünmez kapsayıcı */}
                <div 
                    className="absolute inset-0 z-10 cursor-pointer" 
                    onMouseEnter={() => setHoveredItem('agents')}
                    onMouseLeave={() => setHoveredItem(null)}
                />
            </div>
            
            {/* Chatbots */}
            <div className="relative h-16 mb-5 w-[209px]">
                {/* Her zaman stillendirilmiş kutu (hover olmasa da görünür) */}
                <div 
                    className={`absolute inset-0 h-16 w-[209px] text-3xl font-bold text-white rounded-xl border border-purple-600 border-solid backdrop-blur-[2px] bg-[#ffffff20] backdrop-opacity-55 flex items-center justify-center rotate-[-6.466deg] transition-all duration-500 ease-in-out ${
                        hoveredItem && hoveredItem !== 'chatbots'
                            ? 'opacity-0 scale-95'
                            : 'opacity-100 transform-none'
                    }`}
                >
                    Chatbots.
                </div>
                
                {/* Normal durumda görünecek başlık (sadece başka bir öğe hover edildiğinde görünür) */}
                <h3 
                    className={`absolute inset-0 flex items-center text-3xl text-white transition-all duration-500 ease-in-out ${
                        hoveredItem && hoveredItem !== 'chatbots'
                            ? 'opacity-100'
                            : 'opacity-0'
                    }`}
                >
                    Chatbots.
                </h3>
                
                {/* Mouse olayları için görünmez kapsayıcı */}
                <div 
                    className="absolute inset-0 z-10 cursor-pointer" 
                    onMouseEnter={() => setHoveredItem('chatbots')}
                    onMouseLeave={() => setHoveredItem(null)}
                />
            </div>
            
            {/* Finance */}
            <div className="relative h-16 mb-5 w-[209px]">
                {/* Hover durumunda görünecek stillendirilmiş kutu */}
                <div 
                    className={`absolute inset-0 h-16 w-[209px] text-3xl font-bold text-white rounded-xl border border-purple-600 border-solid backdrop-blur-[2px] bg-[#ffffff20] backdrop-opacity-55 flex items-center justify-center rotate-[-6.466deg] transition-all duration-500 ease-in-out ${
                        hoveredItem === 'finance' 
                            ? 'opacity-100 transform-none' 
                            : 'opacity-0 scale-95'
                    }`}
                >
                    &amp; Finance.
                </div>
                
                {/* Normal durumda görünecek başlık */}
                <h3 
                    className={`absolute inset-0 flex items-center text-3xl text-white transition-all duration-500 ease-in-out ${
                        hoveredItem === 'finance' 
                            ? 'opacity-0' 
                            : 'opacity-100'
                    }`}
                >
                    &amp; Finance.
                </h3>
                
                {/* Mouse olayları için görünmez kapsayıcı */}
                <div 
                    className="absolute inset-0 z-10 cursor-pointer" 
                    onMouseEnter={() => setHoveredItem('finance')}
                    onMouseLeave={() => setHoveredItem(null)}
                />
            </div>
        </div>
    )
}

export default FloatingTags
