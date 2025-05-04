import { eligibleCountries } from "@/constants";
import Section from "../Section";
import { count } from "console";
import Image from "next/image";

export default function VisaApplication() {
  return (
    <Section
      title="How to Apply for a Tunisian Visa"
      className="flex flex-col items-center"
    >
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {/* Option 1: Visa on Arrival */}
        <div className="w-full lg:w-5/12 border-2 border-primary100 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary100 text-white p-4">
            <h2 className="text-xl font-bold">Option 1: Visa on Arrival</h2>
          </div>

          <div className="p-6">
            <div className="border-l-4 border-primary100 pl-4 mb-6">
              <p className="text-white">
                Some nationalities can obtain a visa upon arrival at
                Tunis-Carthage Airport or other entry points. Always check
                eligibility before traveling.
              </p>
            </div>

            <h3 className="font-bold text-lg text-white mb-3">
              Eligible Countries Include:
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {eligibleCountries.map((country, index) => (
                <div
                  key={country.name + index + "flag"}
                  className="flex items-center bg-gray-100 rounded-full px-4 py-2"
                >
                  <Image
                    src={country.image}
                    alt={country.name + " flag"}
                    className="mr-2"
                    height={30}
                    width={35}
                  />
                  <span>{country.name}</span>
                </div>
              ))}

              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <span>And others...</span>
              </div>
            </div>

            <h3 className="font-bold text-lg text-white mb-3">
              Required Documents
            </h3>

            <div className="space-y-4">
              <div className="flex items-start border-l-4 border-primary100 pl-4 py-2">
                <div className="mr-4 bg-blue-100 p-2 rounded">
                  <span className="text-2xl">🛂</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary100">Valid Passport</h4>
                  <p className="text-sm text-white">
                    Valid for at least 6 months beyond your stay
                  </p>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-primary100 pl-4 py-2">
                <div className="mr-4 bg-blue-100 p-2 rounded">
                  <span className="text-2xl">🎫</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary100">Return Ticket</h4>
                  <p className="text-sm text-white">
                    Confirmed flight reservation showing departure
                  </p>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-primary100 pl-4 py-2">
                <div className="mr-4 bg-blue-100 p-2 rounded">
                  <span className="text-2xl">🏨</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary100">Hotel Booking</h4>
                  <p className="text-sm text-white">
                    Proof of accommodation for your entire stay
                  </p>
                </div>
              </div>

              <div className="flex items-start border-l-4 border-primary100 pl-4 py-2">
                <div className="mr-4 bg-blue-100 p-2 rounded">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary100">
                    Sufficient Funds
                  </h4>
                  <p className="text-sm text-white">
                    Cash or bank statements showing financial capability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Option 2: Embassy Application */}
        <div className="w-full lg:w-5/12 border-2 border-primary100 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary100 text-white p-4">
            <h2 className="text-xl font-bold">Option 2: Embassy Application</h2>
          </div>

          <div className="p-6">
            <div className="border-l-4 border-primary100 pl-4 mb-6">
              <p className="text-white">
                If your country is not eligible for visa-free or visa-on-arrival
                entry, you must apply in advance through a Tunisian embassy or
                consulate.
              </p>
            </div>

            <h3 className="font-bold text-lg text-white mb-3">
              Application Process
            </h3>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-primary100 font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary100 flex items-center">
                    <span className="mr-2">🏢</span>
                    Find Embassy
                  </h4>
                  <p className="text-sm text-white mt-1">
                    Locate your nearest Tunisian diplomatic mission
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-primary100 font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary100 flex items-center">
                    <span className="mr-2">📋</span>
                    Prepare Documents
                  </h4>
                  <p className="text-sm text-white mt-1">
                    Gather all required application materials
                  </p>
                  <ul className="list-disc ml-5 mt-2 text-sm text-white">
                    <li>Completed visa application form</li>
                    <li>Recent passport-sized photos</li>
                    <li>Flight itinerary & hotel booking</li>
                    <li>Invitation letter from conference organizers</li>
                    <li>Bank statements (proof of funds)</li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-primary100 font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary100 flex items-center">
                    <span className="mr-2">📄</span>
                    Submit Application
                  </h4>
                  <p className="text-sm text-white mt-1">
                    Apply in person or by mail depending on embassy requirements
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-primary100 font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary100 flex items-center">
                    <span className="mr-2">💳</span>
                    Pay Fee
                  </h4>
                  <p className="text-sm text-white mt-1">
                    Visa fees vary by nationality and visa type
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
