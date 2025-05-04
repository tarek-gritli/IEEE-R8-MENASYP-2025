import Link from "next/link";
import ActionButton from "../ActionButton";

export default function About() {
  return (
    <section
      id="discover"
      className="bg-dark flex justify-center items-center py-12 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tunisia: The Gem of the Mediterranean
          </h2>

          <p className="text-base md:text-lg font-medium">
            There is so much to see and do in each region of Tunisia: a wide
            variety of landscapes, a coastline spanning 1,250km, studded with
            islands and archipelagos, a fantastic array of traditions and
            customs and a rich historical heritage.
          </p>

          <p className="text-base md:text-lg font-medium">
            We are delighted to introduce you to these regions by breaking them
            down into this video.
          </p>
          <Link
            href="https://www.discovertunisia.com/en/"
            target="_blank"
            className="pt-2"
          >
            <ActionButton text="Discover Tunisia Official Website" />
          </Link>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cR8mH08xNVw?si=eO6cR2Br9pSUtXxb"
            title="Discover Tunisia - Official Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl max-w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
