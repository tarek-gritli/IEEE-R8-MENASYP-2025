import Image from "next/image";
import ActionButton from "../ActionButton";
import Link from "next/link";

export default function AboutMenaSYP() {
  return (
    <section
      id="about"
      className="bg-dark h-screen flex justify-center items-center p-4"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold">MENASYP: About</h2>

          <p className="text-lg font-medium">
            The IEEE R8 MENA Student and Young Professional Congress (MENASYP)
            is a premier regional event that unites students, young
            professionals, and industry leaders from across the MENA region.
          </p>

          <p className="text-lg font-medium">
            Taking place from August 27-31, 2025, in Gammarth, Tunis, Tunisia,
            MENASYP 2025 aims to empower participants, foster professional
            growth, and build meaningful connections through a dynamic program
            of technical workshops, keynote sessions, industrial tours, and
            cultural activities.
          </p>

          <p className="text-lg font-medium">
            This edition embraces the rich heritage of Tunisian folklore,
            infusing the event with cultural experiences that highlight
            Tunisia's traditions.
          </p>
          <Link href="/program">
            <ActionButton text="Check Schedule" className="max-w-xl" />
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/logo-squared-white.png"
            alt="MenaSYP Logo"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
