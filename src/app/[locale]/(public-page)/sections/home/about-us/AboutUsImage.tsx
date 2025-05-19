

import CardStack, { CardImage } from '../../../components/card/CardStack';
import React from "react";

const images: CardImage[] = [
  { src: '/img/others/about-us-section/img-1.jpg', alt: 'Akış çizgileri' },
  { src: '/img/others/about-us-section/img-2.jpg', alt: 'MacBook RGB klavye' },
  { src: '/img/others/about-us-section/img-3.jpg', alt: 'Mor tonda mikrofon' },
];


export default function HeroSection() {
  return (
    <div className="flex justify-center items-center w-full relative">
      <CardStack images={images} className="mx-auto relative z-10" />
    </div>
  );
}


