import React from "react";
import Section from "../Section";

export default function ImportantNotes() {
  return (
    <Section title="Important Notes" className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Note Card 1 */}
        <div className=" rounded-lg shadow-md overflow-hidden border-2 border-primary100">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-lg font-medium">1</span>
              </div>
            </div>
            <h2 className="text-xl text-white font-bold text-center mb-4">
              Verify Requirements Early
            </h2>
            <p className="text-center text-white">
              All conference participants are kindly requested to verify and
              fulfill all of their own VISA requirements in advance of the
              conference.
            </p>
          </div>
        </div>

        {/* Note Card 2 */}
        <div className="rounded-lg shadow-md overflow-hidden border-2 border-primary100">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-lg font-medium">2</span>
              </div>
            </div>
            <h2 className="text-xl text-white font-bold text-center mb-4">
              Regulations Vary by Nationality
            </h2>
            <p className="text-center text-white">
              The Visa regulations can vary significantly by nationality, and
              processing times may be longer than expected due to enhanced
              security measures worldwide.
            </p>
          </div>
        </div>

        {/* Note Card 3 */}
        <div className="rounded-lg shadow-md overflow-hidden border-2 border-primary100">
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-lg font-medium">3</span>
              </div>
            </div>
            <h2 className="text-xl text-white font-bold text-center mb-4">
              Begin Process Early
            </h2>
            <p className="text-center text-white">
              It's strongly recommended beginning the visa process as early as
              possible to avoid last-minute complications.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
