"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import ActionButton from "../ActionButton";
import HeroGradient from "../HeroGradient";

const Hero = () => {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const daysRemaining = Math.ceil(
        (new Date("2025-08-27").getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      );
      setDaysLeft(daysRemaining);
    };

    calculateDaysLeft();

    // Optionally update daily
    const interval = setInterval(calculateDaysLeft, 86400000); // 24 hours

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/hero/home-hero.jpg"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/images/logo-squared-white.png"
          alt="MenaSYP logo white"
          width={300}
          height={300}
        />
        <h1 className="text-white text-3xl font-bold">
          {daysLeft !== null ? `${daysLeft} days left` : "Loading..."}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-primary100" />
            <span className="text-white font-medium">27-30 August 2025</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-primary100" />
            <span className="text-white font-medium">Gammarth, Tunisia</span>
          </div>
        </div>
        <ActionButton text="Register Now" className="mt-4" />
      </div>
    </HeroGradient>
  );
};

export default Hero;
