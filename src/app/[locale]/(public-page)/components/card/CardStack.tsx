'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export interface CardImage { src: string; alt?: string }
interface CardStackExactProps {
  images: CardImage[]      // 3 görsel
  className?: string
}

/** Yelpaze ayarları (istediğin gibi oynayabilirsin) */
const ROTATIONS = [-15, 0, 15]   
const OFFSET_X  = 40             
const OFFSET_Y  = -5            

const CardStackExact: React.FC<CardStackExactProps> = ({
  images,
  className,
}) => {
  const visible  = images.slice(0, 3)
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div
      className={clsx(
        'relative isolate w-full max-w-[237.7px] aspect-[1]',
        className,
      )}
    >
      {visible.map(({ src, alt }, i) => {
        /** Dinamik transform */
        const angle = ROTATIONS[i]
        const tx    = OFFSET_X * i
        const ty    = OFFSET_Y * i
        const hoverShift = hovered === i ? ' translate(-4px,-4px)' : ''

        return (
          <Image
            key={src}
            src={src}
            alt={alt ?? ''}
            width={368.885}
            height={328.224}
            priority={i === 0}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={clsx(
              'absolute rounded-[20px] shadow-[0_0_8px_rgba(255,255,255,0.15)]',
              'border-2 border-white/80 cursor-pointer',
              'origin-center object-cover w-[min(48rem,80%)] h-auto max-h-72',
              i === 0 ? 'z-30' : i === 1 ? 'z-20' : 'z-10',
            )}
            style={{
              transform: `translate(${tx}px, ${ty}px) rotate(${angle}deg)${hoverShift}`,
              transition: 'transform 0.25s ease-out',
            }}
          />
        )
      })}
    </div>
  )
}

export default CardStackExact
