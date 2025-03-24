import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center h-screen w-full overflow-hidden">
      {/* Left content */}
      <div className="p-8 md:p-16 md:w-1/2 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
          IEEE R8 <span className="text-primary100">MENASYP</span> Congress 2025
        </h1>
        <div className="ml-4 mt-4">
          <p className="text-primary100 font-medium">
            27, 28, 29, 30 August 2025 <br />
            Gammarth, Tunis, Tunisia
          </p>
        </div>
      </div>

      {/* Right pattern */}
      <div className="absolute md:relative right-0 top-0 md:w-1/2 h-full">
        <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          className="object-cover object-left"
          quality={100}
        />
      </div>
    </section>
  );
};

export default Hero;
