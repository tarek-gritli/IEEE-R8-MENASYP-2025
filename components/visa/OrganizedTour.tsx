import Section from "../Section";
import { organizedTourWithHotelVoucher } from "@/constants";
import Image from "next/image";

export default function SpecialDuration() {
  return (
    <Section
      title="Organized Tour with Hotel Voucher"
      description="Citizens of the following nations who travel on an organized tour and hold a hotel voucher can enter Tunisia without a visa"
      className="flex flex-col items-center"
    >
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {organizedTourWithHotelVoucher.map((country, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative w-24 h-16 rounded-md overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <Image
                src={country.image}
                alt={`${country.name} flag`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-sm font-semibold text-white text-center mt-2 w-32">
              {country.name}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
