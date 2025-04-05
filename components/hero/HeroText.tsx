import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src={imgSrc} alt={altText} width={imgDim} height={imgDim} />

      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <p className="text-white text-xl font-medium">{description}</p>
      </div>
      <div className="flex flex-col items-center justify-center hero-text-description gap-4 mt-4">
        <p className="font-medium">{arrowText}</p>
        <Link href={takeMeTo} className="font-medium">
          <ArrowDown className="animate-bounce cursor-pointer" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
