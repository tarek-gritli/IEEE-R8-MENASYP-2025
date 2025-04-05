import Image from "next/image";
import ActionButton from "../ActionButton";

export default function AboutStudentBranch() {
  return (
    <section className="bg-dark h-screen flex justify-center items-center p-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold">IEEE INSAT Student Branch</h2>

          <p className="text-lg font-medium">
            One of the largest IEEE communities in region 8, founded in 2013 at
            the institute of applied sciences and technologies and counting now
            more than 500 active members.
          </p>

          <p className="text-lg font-medium">
            Our student branch counts 6 technical chapters and one affinity
            group and has successfully organized more than 160 events
            (congresses, conferences, 24h challenges, workshops, competitions…)
            in various domains
          </p>

          <ActionButton text="Learn More" />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/ieee-sb-stacked.png"
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
