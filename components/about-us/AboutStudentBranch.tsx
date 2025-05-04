import Image from "next/image";
import ActionButton from "../ActionButton";
import Link from "next/link";

export default function AboutStudentBranch() {
  return (
    <section className="bg-dark flex justify-center items-center py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            IEEE INSAT Student Branch
          </h2>

          <p className="text-base md:text-lg font-medium">
            One of the largest IEEE communities in region 8, founded in 2013 at
            the institute of applied sciences and technologies and counting now
            more than 500 active members.
          </p>

          <p className="text-base md:text-lg font-medium">
            Our student branch counts 6 technical chapters and one affinity
            group and has successfully organized more than 160 events
            (congresses, conferences, 24h challenges, workshops, competitions…)
            in various domains
          </p>
          <div className="pt-2">
            <Link href="https://insat.ieee.tn/" target="_blank">
              <ActionButton text="Learn More" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/images/ieee-sb-stacked.png?v=2"
            alt="Stacked IEEE images"
            width={800}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
