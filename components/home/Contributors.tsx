import Image from "next/image";
import { contributors } from "@/constants";

export default function Contributors() {
  return (
    <section className="py-16 px-4 bg-dark h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-2">
          <span className="text-dark">Our </span>
          <span className="text-primary100">Contributors</span>
        </h2>
        <p className="text-center font-bold text-primary100 mb-12">
          Powered By
        </p>
      </div>
      <div className="flex flex-row justify-around">
        {contributors.map((contributor, index) => (
          <Image
            key={"contributor " + index}
            src={contributor.image}
            alt={contributor.name}
            width={contributor.imgWidth}
            height={contributor.imgHeight}
          />
        ))}
      </div>
    </section>
  );
}
