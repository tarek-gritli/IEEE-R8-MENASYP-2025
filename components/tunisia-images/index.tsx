import Image from "next/image";
import Link from "next/link";
import ActionButton from "../ActionButton";
import { cn } from "@/lib/utils";

const TunisiaImages = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <div className="bg-dark py-8 px-4 md:px-6">
      <div className="flex flex-col gap-4 max-w-6xl mx-auto">
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-[25rem] relative">
          <Image
            src="/images/sneak-peak-1.jpg"
            alt="Bizerte port"
            fill
            className="object-cover tunisia-image-border"
          />
        </div>

        <div
          className={cn(
            "grid gap-4",
            isHomePage
              ? "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          )}
        >
          <div className="relative h-64 sm:h-48 md:h-56 lg:h-72 overflow-hidden">
            <Image
              src="/images/sneak-peak-2.png"
              alt="Eljemm Colosseum in Tunisia"
              fill
              className="object-cover tunisia-image-border"
            />
          </div>

          {isHomePage && (
            <div className="flex flex-col items-center justify-center bg-[#1B1123] h-64 sm:h-48 md:h-56 lg:h-72 py-8">
              <div className="flex flex-col items-center justify-center text-white text-center gap-2 relative w-full h-full p-4">
                <Image
                  src="/images/countries/tunisia.png"
                  alt="Tunisia flag symbol"
                  width={120}
                  height={80}
                  className="w-20 h-13 sm:w-20 sm:h-13 md:w-20 md:h-13 lg:w-24 lg:h-17"
                />
                <p className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold">
                  Tunisia
                </p>

                <p className="font-medium text-sm sm:text-xs md:text-base lg:text-lg mb-2">
                  MENASYP 2025 Host Country
                </p>
                <Link href="about-tunisia">
                  <ActionButton
                    text="Learn More"
                    className="text-sm sm:text-xs md:text-sm"
                  />
                </Link>
              </div>
            </div>
          )}

          <div className="relative h-64 sm:h-48 md:h-56 lg:h-72 overflow-hidden">
            <Image
              src="/images/sneak-peak-3.webp"
              alt="Ancient ruins with columns in Tunisia"
              fill
              className="object-cover tunisia-image-border"
            />
          </div>
        </div>

        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-[25rem] relative overflow-hidden">
          <Image
            src="/images/sneak-peak-4.png"
            alt="Aerial view of Sousse in Tunisia"
            fill
            className="object-cover tunisia-image-border"
          />
        </div>
      </div>
    </div>
  );
};

export default TunisiaImages;
