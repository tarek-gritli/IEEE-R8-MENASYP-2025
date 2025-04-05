import Image from "next/image";
import Section from "../Section";
import { countries } from "@/constants";

const ParticipatingCountries = () => {
  const firstRow = countries.slice(0, 6);
  const secondRow = countries.slice(6, 12);
  const thirdRow = countries.slice(12, 17);

  return (
    <Section
      title="Participating Countries"
      description="17 Countries of the MENA Region"
    >
      <div className="flex flex-wrap justify-center items-center mb-4 gap-8">
        {firstRow.map((country, index) => (
          <div key={index} className="flex flex-col items-center mb-4 group">
            <div className="relative w-[120px] h-[120px] transition-transform duration-300 group-hover:scale-110">
              <Image
                src={country.image}
                alt={`${country.name} flag`}
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-white text-center mt-2">
              {country.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mb-4 gap-8">
        {secondRow.map((country, index) => (
          <div key={index} className="flex flex-col items-center mb-4 group">
            <div className="relative w-[120px] h-[120px] transition-transform duration-300 group-hover:scale-110">
              <Image
                src={country.image}
                alt={`${country.name} flag`}
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-white text-center mt-2">
              {country.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {thirdRow.map((country, index) => (
          <div key={index} className="flex flex-col items-center mb-4 group">
            <div className="relative w-[120px] h-[120px] transition-transform duration-300 group-hover:scale-110">
              <Image
                src={country.image}
                alt={`${country.name} flag`}
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-white text-center mt-2">
              {country.name}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ParticipatingCountries;
