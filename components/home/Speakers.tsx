"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { speakers } from "@/constants";

export default function Speakers() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);

  const nextSpeaker = () => {
    setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
  };

  const prevSpeaker = () => {
    setCurrentSpeaker((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const getVisibleSpeakers = () => {
    const speakersCount = speakers.length;
    const indices = [];

    for (let i = 2; i >= 1; i--) {
      indices.push((currentSpeaker - i + speakersCount) % speakersCount);
    }

    indices.push(currentSpeaker);

    for (let i = 1; i <= 2; i++) {
      indices.push((currentSpeaker + i) % speakersCount);
    }

    return indices;
  };

  const visibleSpeakers = getVisibleSpeakers();

  return (
    <section className="py-16 px-4 bg-dark text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-2">
          <span className="text-dark">Distinguished </span>
          <span className="text-primary100">Guests</span>
        </h2>
        <p className="text-center font-bold text-primary100 mb-12">
          Meet Our Speakers
        </p>

        <div className="relative">
          <button
            onClick={prevSpeaker}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-dark/50 p-2 rounded-full"
            aria-label="Previous speaker"
          >
            <ChevronLeft className="h-6 w-6 text-white cursor-pointer" />
          </button>

          <button
            onClick={nextSpeaker}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-dark/50 p-2 rounded-full"
            aria-label="Next speaker"
          >
            <ChevronRight className="h-6 w-6 text-white cursor-pointer" />
          </button>

          <div className="flex items-stretch justify-center h-[400px]">
            {visibleSpeakers.map((speakerIndex, i) => {
              const speaker = speakers[speakerIndex];
              const isCurrent = i === 2;

              return (
                <div
                  key={speaker.id}
                  className={`
                    relative overflow-hidden transition-all duration-500 ease-in-out mx-1 rounded-lg
                    ${isCurrent ? "w-[400px]" : "w-[80px] cursor-pointer"}
                  `}
                  onClick={() => !isCurrent && setCurrentSpeaker(speakerIndex)}
                >
                  <div className="h-full w-full relative">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      fill
                      className={`object-cover ${
                        !isCurrent ? "object-center" : ""
                      }`}
                    />

                    {isCurrent && (
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-200 bg-opacity-90">
                        <p className="text-primary100 text-sm font-medium mb-1">
                          {speaker.title}
                        </p>
                        <h3 className="text-[#1e1433] text-2xl font-bold">
                          {speaker.name}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
