import Image from "next/image";
import ActionButton from "../ActionButton";

const Map = () => {
  return (
    <section className="bg-dark h-screen flex justify-center items-center p-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold">IEEE Tunisia Section</h2>

          <p className="text-lg font-medium">
            IEEE Tunisia Section aims to spread IEEE Activities to all corners
            of the country through educational and technical activities,
            networking opportunities, and to develop technology and its
            applications for humanitarian goals. The section supports chapters,
            special interest groups, student activities and student awards.
          </p>

          <ActionButton text="Learn More" />
        </div>
        <div className="flex justify-center max-h-100">
          <Image
            src="/images/ieee-partners/ieee-tunisia-section-pattern.png"
            alt="IEEE Tunisia Section logo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
