import HeroGradient from "../HeroGradient";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/about-us-hero.jpg"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/logo-icon-white.svg"
          alt="Tunisia logo"
          width={160}
          height={160}
        />

        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <h1 className="text-white text-3xl font-bold">About us</h1>
          <p className="text-white text-xl font-medium">
            Get to know the MENASYP organizers
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-[#9DA5AF] gap-4 mt-4">
          <p className=" font-medium">Scroll to learn more</p>
          <Link href="#about" className="font-medium">
            <ArrowDown className="animate-bounce cursor-pointer" size={24} />
          </Link>
        </div>
      </div>
    </HeroGradient>
  );
};

export default Hero;
