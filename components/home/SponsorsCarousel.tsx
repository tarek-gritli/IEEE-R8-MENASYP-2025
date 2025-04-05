import Image from "next/image";
import { sponsors } from "@/constants";
import CarouselComponent from "../CarouselComponent";
import { CarouselItem } from "../ui/carousel";

const SponsorsCarousel = () => {
  return (
    <div className="w-full max-w-6xl px-4 relative carousel-container">
      {/* left gradient */}
      <div className="carousel-edge-fade-left"></div>

      {/* right gradient */}
      <div className="carousel-edge-fade-right"></div>

      <CarouselComponent>
        {sponsors.map((sponsor, index) => (
          <CarouselItem
            key={`sponsor-${index}`}
            className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
          >
            <div className="flex flex-col justify-center items-center p-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-28 h-28 md:w-32 md:h-32 mb-4 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-all duration-300"></div>
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-white text-center text-lg md:text-xl font-semibold group-hover:text-primary-400 transition-colors duration-300">
                {sponsor.name}
              </h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselComponent>
    </div>
  );
};

export default SponsorsCarousel;
