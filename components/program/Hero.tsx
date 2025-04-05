import HeroGradient from "../HeroGradient";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/program-hero.webp"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/images/calendar-logo.png"
          alt="Calendar logo"
          width={160}
          height={160}
        />

        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <h1 className="text-white text-3xl font-bold">Timeline & Schedule</h1>
          <p className="text-white text-xl font-medium">
            Learn more about the MENASYP 2025 schedule and activities
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hero-text-description gap-4 mt-4">
          <p className="font-medium">Check the program</p>
          <Link href="#schedule" className="font-medium">
            <ArrowDown className="animate-bounce cursor-pointer" size={24} />
          </Link>
        </div>
      </div>
    </HeroGradient>
  );
};

export default Hero;
