import { menaCards } from "@/constants";
import Card from "../card";
import Stats from "./Stats";
import Image from "next/image";
import MeetOurTeam from "./MeetOurTeam";

const AboutMenaSYP = () => {
  return (
    <section className="bg-dark flex flex-col justify-center items-center p-4">
      <div className="mb-8">
        <h1 className="text-4xl text-primary100 font-bold text-center">
          About MENASYP
        </h1>
        <p className="font-bold text-description text-center text-lg mt-4 max-w-xl">
          MENASYP 2025 is a prestigious regional event bringing together
          students, young professionals, and industry leaders from across the
          MENA region to connect, learn, and grow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {menaCards.map((card, index) => (
          <Card key={"card " + index} {...card} />
        ))}
      </div>
      <Stats />
      <Image
        src="/images/countries.png"
        alt="MENA SYP"
        width={1200}
        height={600}
      />
    </section>
  );
};

export default AboutMenaSYP;
