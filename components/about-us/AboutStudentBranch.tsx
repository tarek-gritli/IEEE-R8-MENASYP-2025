import Image from "next/image";

const AboutStudentBranch = () => {
  return (
    <section className="bg-dark h-screen flex flex-col justify-center items-center p-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 w-full">
        <div className="flex justify-center">
          <Image
            src="/images/ieee-insat-sb.png"
            alt="Tunisia Map"
            width={400}
            height={200}
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-semibold text-primary100 pb-4 text-left ml-6">
            About IEEE INSAT Student Branch
          </h1>

          <p className="text-description font-bold md:text-lg leading-relaxed mb-6">
            One of the largest IEEE communities in region 8, founded in 2013 at
            the institute of applied sciences and technologies and counting now
            more than 500 active members. Our student branch counts 6 technical
            chapters and one affinity group and has successfully organized more
            than 160 events (congresses, conferences, 24h challenges, workshops,
            competitions…) in various domains
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStudentBranch;
