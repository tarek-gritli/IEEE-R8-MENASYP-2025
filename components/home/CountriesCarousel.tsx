import { CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { countries } from "@/constants";
import CarouselComponent from "../CarouselComponent";

const CountriesCarousel = () => {
  return (
    <div className="w-full max-w-6xl px-2 sm:px-4 relative carousel-container">
      {/* left gradient */}
      <div className="carousel-edge-fade-left hidden sm:block"></div>

      {/* right gradient */}
      <div className="carousel-edge-fade-right hidden sm:block"></div>

      <CarouselComponent>
        {countries.map((country, index) => (
          <CarouselItem
            key={`country-${index}`}
            className="pl-2 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
          >
            <div className="flex flex-col justify-center items-center p-2 sm:p-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-2 sm:mb-4 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-all duration-300"></div>
                <Image
                  src={country.image}
                  alt={country.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold group-hover:text-primary-400 transition-colors duration-300">
                {country.name}
              </h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselComponent>
    </div>
  );
};

export default CountriesCarousel;
