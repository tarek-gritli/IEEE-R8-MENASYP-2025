"use client";

import { countries } from "@/constants";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

const ParticipatingCountries = () => {
  return (
    <section className="bg-dark min-h-screen flex flex-col justify-center items-center py-12 px-4">
      <div className="mb-12 flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
            Participating Countries
          </h1>
          <p className="font-medium text-center text-white text-xl md:text-2xl mt-4">
            15+ Countries of the MENA Region
          </p>
        </div>
        <Image
          src="/images/countries-pattern.png"
          alt="Countries Pattern"
          width={100}
          height={50}
          className="object-cover"
        />
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      </div>

      <div className="w-full max-w-7xl px-4 relative carousel-container">
        {/* Left gradient overlay */}
        <div className="carousel-edge-fade-left"></div>

        {/* Right gradient overlay */}
        <div className="carousel-edge-fade-right"></div>

        <Carousel
          className="w-full relative"
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 0.8,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
              stopOnFocusIn: false,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {countries.map((country, index) => (
              <CarouselItem
                key={`country-${index}`}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="flex flex-col justify-center items-center p-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-28 h-28 md:w-32 md:h-32 mb-4 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-all duration-300"></div>
                    <Image
                      src={country.image}
                      alt={country.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h2 className="text-white text-center text-lg md:text-xl font-semibold group-hover:text-primary-400 transition-colors duration-300">
                    {country.name}
                  </h2>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ParticipatingCountries;
