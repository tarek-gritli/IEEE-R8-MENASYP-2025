import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const AboutMenaSYP = () => {
  return (
    <section className="bg-dark min-h-screen justify-center p-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 w-full">
        <div className="flex flex-col max-w-xl text-center text-white md:text-left">
          <h3 className="text-3xl font-bold pb-4 text-left">MENASYP: About</h3>

          <p className="font-medium md:text-lg leading-relaxed mb-6">
            The IEEE R8 MENA Student and Young Professional Congress (MENASYP)
            is a premier regional event that unites students, young
            professionals, and industry leaders from across the MENA region.
          </p>
          <p className="font-medium md:text-lg leading-relaxed mb-6">
            Taking place from August 27-30, 2025, in Gammarth, Tunis, Tunisia,
            MENASYP 2025 aims to empower participants, foster professional
            growth, and build meaningful connections through a dynamic program
            of technical workshops, keynote sessions, industrial tours, and
            cultural activities.
          </p>
          <p className="font-medium md:text-lg leading-relaxed mb-6">
            This edition embraces the rich heritage of Tunisian folklore,
            infusing the event with cultural experiences that highlight
            Tunisia's traditions.
          </p>
          <Link href="about-tunisia">
            <Button className="bg-primary100 w-30 cursor-pointer rounded hover:bg-[#ff2040] text-white font-bold text-sm">
              Learn more
            </Button>
          </Link>
        </div>

        <div>
          <Image
            src="/logo-icon-white.svg"
            alt="MenaSYP Logo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMenaSYP;
