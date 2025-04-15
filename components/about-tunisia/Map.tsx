import Image from "next/image";
import ActionButton from "../ActionButton";
import Link from "next/link";

const Map = () => {
  return (
    <section className="bg-dark h-screen flex justify-center items-center p-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold">The Heart of North Africa</h2>

          <p className="text-lg font-medium">
            Tunisia is a vibrant country located in North Africa. It is
            characterized by the many cultures and civilizations that were
            established on its land. Tunisia is a true melting pot of Amazigh,
            Arab Muslim, Ottoman, Roman, and Carthage cultures.
          </p>
          <Link
            href="https://maps.app.goo.gl/PsDPbsZ3mMj3L9keA"
            target="_blank"
          >
            <ActionButton text="View on Maps" />
          </Link>
        </div>
        <div className="flex justify-center max-h-100">
          <Image
            src="/images/tunisia-map.jpg"
            alt="Tunisia Map"
            width={600}
            height={400}
            className="object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
