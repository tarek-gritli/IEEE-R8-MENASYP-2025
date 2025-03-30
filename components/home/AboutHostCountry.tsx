import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AboutHostCountry() {
  return (
    <section className="bg-dark h-screen flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 w-full">
        {/* Text Section */}
        <div className="flex flex-col max-w-xl text-center md:text-left">
          <div className="text-left">
            <h2 className="text-4xl text-white font-bold pb-4">
              About The Host Country
            </h2>
            <h3 className="text-2xl font-semibold text-primary100 pb-4">
              Tunis, Tunisia
            </h3>
          </div>

          <p className="text-white font-medium md:text-lg leading-relaxed mb-6">
            Located in North Africa, Tunisia is a country rich in history,
            culture, and breathtaking landscapes. From ancient Roman ruins and
            UNESCO-listed medinas to stunning Mediterranean beaches and vibrant
            souks, Tunisia offers a unique blend of tradition and modernity.
            Known for its warm hospitality and diverse heritage, it is the
            perfect setting for MENASYP 2025, where participants can experience
            both professional growth and an unforgettable cultural journey.
          </p>
          <Link href="about-tunisia">
            <Button className="bg-primary100 w-30 cursor-pointer rounded hover:bg-[#ff2040] text-white font-bold text-sm">
              Learn more
            </Button>
          </Link>
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
