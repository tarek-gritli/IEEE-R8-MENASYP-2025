import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-dark h-screen flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-4 w-full">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/logo-icon-white.svg"
            alt="about-menasyp"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col max-w-xl text-center md:text-left text-white">
          <h2 className="text-4xl font-bold pb-6 ml-8">About MENASYP 2025</h2>
          <p className="font-medium text-base md:text-lg leading-relaxed">
            The IEEE R8 MENA Student and Young Professional Congress (MENASYP)
            is a premier regional event that unites students, young
            professionals, and industry leaders from across the MENA region.
            Taking place from August 27-31, 2025, in Gammarth, Tunis, Tunisia,
            MENASYP 2025 aims to empower participants, foster professional
            growth, and build meaningful connections through a dynamic program
            of technical workshops, keynote sessions, industrial tours, and
            cultural activities. This edition embraces the rich heritage of
            Tunisian folklore, infusing the event with cultural experiences that
            highlight Tunisia's traditions, music, and history.
          </p>
        </div>
      </div>
    </section>
  );
}
