import Image from "next/image";
import { Button } from "../ui/button";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen w-full hero-gradient">
      {/* Left content */}
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/images/logo-squared-white.png"
          alt="MenaSYP logo white"
          width={300}
          height={300}
        />
        <h1 className="text-white text-3xl font-bold">
          {Math.ceil(
            (new Date("2025-08-27").getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24)
          )}{" "}
          days left
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
        <Button className="mt-4 bg-primary100 text-white font-bold rounded cursor-pointer">
          Register Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
