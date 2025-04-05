import { contributors } from "@/constants";
import Section from "./Section";
import Image from "next/image";

export default function Partners() {
  return (
    <Section
      title="Our IEEE Partners"
      description="Made by IEEE Members, for IEEE Members"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
          {contributors.map((contributor, index) => (
            <div
              className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
              key={"contibutor-" + index}
            >
              <Image
                src={contributor.imageSrc}
                alt={contributor.altText}
                width={200}
                height={200}
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-white font-semibold text-lg md:text-xl">
                {contributor.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
