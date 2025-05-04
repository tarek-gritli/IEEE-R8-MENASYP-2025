"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface HeroTextProps {
  imgSrc: string;
  altText: string;
  imgDim?: number;
  title: string;
  description: string;
  arrowText: string;
  takeMeTo: string;
}

const HeroText = ({
  imgSrc,
  altText,
  imgDim = 160,
  title,
  description,
  arrowText,
  takeMeTo,
}: HeroTextProps) => {
  const scrollToSection = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(takeMeTo);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src={imgSrc} alt={altText} width={imgDim} height={imgDim} />

      <div className="flex flex-col items-center justify-center text-center gap-2 mt-4">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <p className="text-white text-xl font-medium">{description}</p>
      </div>
      <div className="flex flex-col items-center justify-center hero-text-description gap-4 mt-4">
        <p className="font-medium">{arrowText}</p>
        <div onClick={scrollToSection} className="font-medium cursor-pointer">
          <ArrowDown className="animate-bounce" size={24} />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
