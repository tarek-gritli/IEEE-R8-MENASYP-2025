import { contributors } from "@/constants";
import Section from "./Section";
import Image from "next/image";

export default function Partners() {
  return (
    <Section
      title="Our IEEE Partners"
      description="Made by IEEE Members, for IEEE Members"
      id="partners"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8">
          {contributors.map((contributor, index) => (
            <div
              className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
              key={"contributor-" + index}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 relative mb-2 sm:mb-3">
                <Image
                  src={contributor.imageSrc}
                  alt={contributor.altText}
                  fill
                  sizes="(max-width: 640px) 6rem, (max-width: 768px) 8rem, (max-width: 1024px) 9rem, 10rem"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-white font-semibold text-center text-sm sm:text-base md:text-lg lg:text-xl">
                {contributor.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
