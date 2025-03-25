import Image from "next/image";

const AboutTunisiaSection = () => {
  return (
    <section className="bg-dark h-screen flex flex-col justify-center items-center p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-dark">About </span>
          <span className="text-primary100">Us</span>
        </h1>
        <p className="font-bold text-primary100 text-xl mt-4">
          Know More about Us
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 w-full mt-8">
        <div className="flex flex-col max-w-xl text-center md:text-left">
          <h3 className="text-2xl font-semibold text-primary100 pb-4 text-left ml-6">
            About IEEE Tunisia Section
          </h3>

          <p className="text-description font-bold md:text-lg leading-relaxed mb-6">
            IEEE Tunisia Section aims to spread IEEE Activities to all corners
            of the country through educational and technical activities,
            networking opportunities, and to develop technology and its
            applications for humanitarian goals. The section supports chapters,
            special interest groups, student activities and student awards.
          </p>
        </div>

        <div>
          <Image
            src="/images/ieee-tunisia-section-logo.png"
            alt="IEEE Tunisia Section Logo"
            width={400}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTunisiaSection;
