import Image from "next/image";
import { tunisiaImages } from "@/constants";

const SneakPeek = () => {
  return (
    <section className="min-h-screen bg-dark flex flex-col justify-center items-center p-8">
      <h2 className="text-primary100 text-3xl font-bold mb-6">Sneak Peek</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
        {tunisiaImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt={`Tunisia ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SneakPeek;
