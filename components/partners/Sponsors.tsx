import React from "react";
import Section from "../Section";
import Image from "next/image";

const sponsors = {
  blue: [
    { name: "INSAT", logo: "/images/sponsors/insat-premium.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-premium.png" },
  ],
  gold: [
    { name: "INSAT", logo: "/images/sponsors/insat-gold.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-gold.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-gold.png" },
  ],
  silver: [
    { name: "INSAT", logo: "/images/sponsors/insat-silver.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-silver.png" },
  ],
  bronze: [
    { name: "INSAT", logo: "/images/sponsors/insat-bronze.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-bronze.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-bronze.png" },
  ],
};
const OurSponsors = () => {
  return (
    <Section title="Our Sponsors" description="" className="items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
        {/* Premium Sponsors */}
        <div>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors.blue.map((sponsor, index) => (
              <div
                key={"premium sponsor " + index}
                className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="group-hover:scale-105 transition-transform duration-300"
                  width={128}
                  height={128}
                />
                <span className="mt-2 text-white font-medium">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={"gold sponsor " + index}
                className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="group-hover:scale-105 transition-transform duration-300"
                  width={128}
                  height={128}
                />
                <span className="mt-2 text-white font-medium">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors.silver.map((sponsor, index) => (
              <div
                key={"silver sponsor " + index}
                className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="group-hover:scale-105 transition-transform duration-300"
                  width={128}
                  height={128}
                />
                <span className="mt-2 text-white font-medium">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors.bronze.map((sponsor, index) => (
              <div
                key={"bronze sponsor " + index}
                className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="group-hover:scale-105 transition-transform duration-300"
                  width={128}
                  height={128}
                />
                <span className="mt-2 text-white font-medium">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurSponsors;
