import ActionButton from "@/components/ActionButton";
import Hero from "@/components/visa/Hero";
import ImportantNotes from "@/components/visa/ImportantNotes";
import OrganizedTour from "@/components/visa/OrganizedTour";
import SpecialDuration from "@/components/visa/SpecialDuration";
import VisaApplication from "@/components/visa/VisaApplication";
import VisaPolicy from "@/components/visa/VisaFree";
import Image from "next/image";
import Link from "next/link";

export default function Visa() {
  return (
    <div>
      <Hero />
      <VisaPolicy />
      <SpecialDuration />
      <OrganizedTour />
      <div className="max-w-6xl mx-auto p-4">
        <div className="p-8 bg-gray-100 w-full rounded-4xl text-center">
          <p className="text-xl font-bold">
            Note: Always check with the Tunisian embassy or consulate in your
            country for the latest updates.
          </p>
        </div>
      </div>
      <VisaApplication />
      <div className="max-w-6xl mx-auto p-4">
        <div className="p-8 bg-gray-100 w-full rounded-xl flex flex-col md:flex-row items-center justify-around text-center my-12 gap-8 md:gap-4">
          <Image
            src="https://cdn.countryflags.com/thumbs/tunisia/flag-400.png"
            alt="Tunisia Flag"
            width={150}
            height={150}
            className="w-32 md:w-36"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary100 mb-2">
              Find Tunisian Diplomatic Missions
            </h3>
            <p className="mb-4 max-w-md">
              Locate your nearest Tunisian embassy or consulate to begin your
              visa application process.
            </p>
            <Link
              href="https://www.diplomatie.gov.tn/diplomatic-corps"
              target="_blank"
            >
              <ActionButton text="Find Tunisian Embassies & Consulates" />
            </Link>
          </div>
        </div>
      </div>
      <ImportantNotes />
      <div className="max-w-6xl mx-auto p-4">
        <div className="p-8 bg-gray-100 w-full rounded-4xl text-center">
          <p className="text-xl font-bold">
            Please Note: The conference organizers cannot assist with individual
            visa applications or intervene with embassies/consulates on behalf
            of participants.
          </p>
        </div>
      </div>
    </div>
  );
}
