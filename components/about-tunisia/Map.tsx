import Image from "next/image";

const Map = () => {
  return (
    <section className="bg-dark h-screen flex flex-col justify-center items-center p-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 w-full">
        <div className="flex justify-center">
          <Image
            src="/images/tunisia-map.png"
            alt="Tunisia Map"
            width={400}
            height={200}
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col max-w-xl text-center text-white md:text-left">
          <h1 className="text-3xl font-bold pb-4 text-left ml-6">
            From North Africa
          </h1>

          <p className="font-medium md:text-lg leading-relaxed mb-6">
            Tunisia is a vibrant country located in North Africa. It is
            characterized by the many cultures and civilizations that were
            established on its land. Tunisia is a true melting pot of Amazigh,
            Arab Muslim, Ottoman, Roman, and Carthage cultures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
