import Image from "next/image";

const SneakPeek = () => {
  return (

      <section className="p-6 bg-dark text-white w-full">
        <h2 className="text-white text-center text-3xl font-bold mb-6">Sneak Peek</h2>
        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          {/* Top panoramic image */}
          <div className="w-full h-48 md:h-64 lg:h-80 relative overflow-hidden">
            <Image
              src="/images/sneak-peak-1.png"
              alt="Bizerte port"
              fill
              className="object-cover tunisia-image-border"
            />
          </div>

          {/* Middle row with 3 images */}
          <div className="grid grid-cols-3 gap-4 h-40 md:h-52 lg:h-64">
            {/* Left image - Colosseum */}
            <div className="relative overflow-hidden">
              <Image
                src="/images/sneak-peak-2.png"
                alt="Eljemm Colosseum in Tunisia"
                fill
                className="object-cover tunisia-image-border"
              />
            </div>

            {/* Center - Tunisia flag symbol */}
            <div className="flex flex-col gap-5 items-center justify-center bg-[#1B1123]">
              <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image
                  src="/images/countries/tunisia.png"
                  alt="Tunisia flag symbol"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm md:text-3xl font-bold">
                Tunisia
              </p>
            </div>

            {/* Right image - Ancient ruins */}
            <div className="relative overflow-hidden">
              <Image
                src="/images/sneak-peak-3.png"
                alt="Ancient ruins with columns in Tunisia"
                fill
                className="object-cover tunisia-image-border"
              />
            </div>
          </div>

          {/* Bottom panoramic image */}
          <div className="w-full h-48 md:h-64 lg:h-80 relative overflow-hidden">
            <Image
              src="/images/sneak-peak-4.png"
              alt="Aerial view of Sousse in Tunisia"
              fill
              className="object-cover tunisia-image-border"
            />
          </div>
        </div>
      </section>
  );
};

export default SneakPeek;
