import HeroGradient from "../HeroGradient";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/hero/sponsors-partners-hero.jpg"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/images/coin-logo.png"
          alt="Coin logo"
          width={160}
          height={160}
        />

        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <h1 className="text-white text-3xl font-bold">Sponsors & Partners</h1>
          <p className="text-white text-xl font-medium">
            Partners of the MENASYP 2025 Congress
          </p>
        </div>
        <div className="flex flex-col items-center justify-center hero-text-description gap-4 mt-4">
          <p className=" font-medium">Check them out</p>
          <Link href="#partners" className="font-medium">
            <ArrowDown className="animate-bounce cursor-pointer" size={24} />
          </Link>
        </div>
      </div>
    </HeroGradient>
  );
};

export default Hero;
