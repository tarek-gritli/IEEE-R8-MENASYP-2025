"use client";

import { useEffect, useRef, useState } from "react";

const Stats = () => {
  const targetValues = [17, 300];
  const [values, setValues] = useState([0, 0]);
  const counterRef = useRef<HTMLDivElement>(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          startCounterAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounterAnimation = () => {
    // First counter (17+)
    let count1 = 0;
    const interval1 = setInterval(() => {
      count1++;
      setValues((prev) => [count1, prev[1]]);

      if (count1 >= targetValues[0]) {
        clearInterval(interval1);
      }
    }, 100);

    // Second counter (300+)
    let count2 = 0;
    const interval2 = setInterval(() => {
      count2 += 5;
      setValues((prev) => [prev[0], count2]);

      if (count2 >= targetValues[1]) {
        clearInterval(interval2);
        setValues([targetValues[0], targetValues[1]]);
      }
    }, 30);
  };

  return (
    <div ref={counterRef} className="py-12 px-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-12 md:gap-24 max-w-3xl">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary100 mb-2">
              {values[0]}+
            </div>
            <div className="text-[#6D6D6D] text-sm md:text-base">
              Countries from the MENA region
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary100 mb-2">
              {values[1]}+
            </div>
            <div className="text-[#6D6D6D] text-sm md:text-base">
              Participants expected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
