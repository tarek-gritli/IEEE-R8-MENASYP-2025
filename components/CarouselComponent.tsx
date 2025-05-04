"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent } from "./ui/carousel";

const CarouselComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Carousel
      className="w-full relative"
      opts={{
        loop: true,
        align: "center",
        dragFree: true,
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
      <CarouselContent className="-ml-2 sm:-ml-4">{children}</CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
