import HeroGradient from "../HeroGradient";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="video"
      backgroundSrc="/videos/tunisia-video.mp4"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/images/countries/tunisia.png"
          alt="Tunisia logo"
          width={100}
          height={100}
        />

        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <h1 className="text-white text-3xl font-bold">Tunisia</h1>
          <p className="text-white text-xl font-medium">
            IEEE R8 MENASYP 2025 Host Country
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-[#9DA5AF] gap-4 mt-4">
          <p className=" font-medium">Learn more about Tunisia</p>
          <Link href="#discover" className="font-medium">
            <ArrowDown className="animate-bounce cursor-pointer" size={24} />
          </Link>
        </div>
      </div>
    </HeroGradient>
  );
};

export default Hero;
