import Image from "next/image";

export default function AboutHostCountry() {
  return (
    <section className="bg-dark h-screen flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 w-full">
        {/* Text Section */}
        <div className="flex flex-col max-w-xl text-center md:text-left">
          <div className="text-center">
            <h2 className="text-4xl font-bold pb-6">
              <span className="text-dark">About </span>
              <span className="text-primary100"> The Host </span>
              <span className="text-dark">Country</span>
            </h2>
            <h3 className="text-2xl font-semibold text-primary100 pb-4">
              Tunis, Tunisia
            </h3>
          </div>

          <p className="text-description font-bold md:text-lg leading-relaxed mb-6">
            Located in North Africa, Tunisia is a country rich in history,
            culture, and breathtaking landscapes. From ancient Roman ruins and
            UNESCO-listed medinas to stunning Mediterranean beaches and vibrant
            souks, Tunisia offers a unique blend of tradition and modernity.
            Known for its warm hospitality and diverse heritage, it is the
            perfect setting for MENASYP 2025, where participants can experience
            both professional growth and an unforgettable cultural journey.
          </p>
          <a
            href="#"
            className="text-primary100 font-bold hover:underline self-center md:self-start"
          >
            Learn More →
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/host-country.png"
            alt="Tunisia landscape"
            width={600}
            height={300}
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
