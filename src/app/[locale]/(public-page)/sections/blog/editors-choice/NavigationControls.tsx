import React from "react";
import LeftArrowButton from "@/app/[locale]/(public-page)/components/button/LeftArrowButton";
import RightArrowButton from "@/app/[locale]/(public-page)/components/button/RightArrowButton";

interface NavigationControlsProps {
  onPrev?: () => void;
  onNext?: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({ onPrev, onNext }) => {
  const handlePrevSlide = () => {
    if (onPrev) {
      onPrev();
    }
  };

  const handleNextSlide = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className="flex">
      <LeftArrowButton prevSlide={handlePrevSlide} />
      <RightArrowButton nextSlide={handleNextSlide} />
    </div>
  );
};

export default NavigationControls; 