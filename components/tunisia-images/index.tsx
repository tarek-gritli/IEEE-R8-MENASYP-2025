import Image from "next/image";
import Link from "next/link";
import ActionButton from "../ActionButton";
import { cn } from "@/lib/utils";

const TunisiaImages = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <div className="bg-dark min-h-screen">
      <div className="flex flex-col gap-4 max-w-6xl mx-auto">
        <div className="w-full h-80 md:h-96 lg:h-[25rem] relative">
          <Image
            src="/images/sneak-peak-1.jpg"
            alt="Bizerte port"
            fill
            className="object-cover tunisia-image-border"
          />
        </div>

        <div
          className={cn(
            "grid gap-4 h-64 md:h-72 lg:h-96",
            isHomePage ? "grid-cols-3" : "grid-cols-2"
          )}
        >
          <div className="relative overflow-hidden">
            <Image
              src="/images/sneak-peak-2.png"
              alt="Eljemm Colosseum in Tunisia"
              fill
              className="object-fit tunisia-image-border"
            />
          </div>

          {isHomePage && (
            <div className="flex flex-col items-center justify-center bg-[#1B1123]">
              <div className="flex flex-col items-center justify-center text-white text-center gap-2 relative w-full h-full p-2">
                <Image
                  src="/images/countries/tunisia.png"
                  alt="Tunisia flag symbol"
                  width={100}
                  height={100}
                />
                <p className="text-sm md:text-3xl font-bold">Tunisia</p>

                <p className="font-medium text-lg mb-2">
                  MENASYP 2025 Host Country
                </p>
                <Link href="about-tunisia">
                  <ActionButton text="Learn More" />
                </Link>
              </div>
            </div>
          )}

          <div className="relative overflow-hidden">
            <Image
              src="/images/sneak-peak-3.webp"
              alt="Ancient ruins with columns in Tunisia"
              fill
              className="object-cover tunisia-image-border"
            />
          </div>
        </div>

        <div className="w-full h-64 md:h-80 lg:h-[25rem] relative overflow-hidden">
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
