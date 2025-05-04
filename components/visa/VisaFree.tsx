import Section from "../Section";
import { visaFree } from "@/constants";
import Image from "next/image";

export default function VisaPolicy() {
  return (
    <Section
      title="Visa Free Entry"
      description="Citizens of the following countries do not need a visa for short stays (typically 90 days or less)"
      className="flex flex-col items-center"
      id="visa-free"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-6 max-w-6xl">
        {visaFree.map((country, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative w-24 h-16 rounded-md overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <Image
                src={country.image}
                alt={`${country.name} flag`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-sm font-semibold text-white text-center mt-2 w-24 truncate">
              {country.name}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
