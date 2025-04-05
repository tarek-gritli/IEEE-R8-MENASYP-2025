import Link from "next/link";
import ActionButton from "../ActionButton";

export default function About() {
  return (
    <section
      id="discover"
      className="bg-dark h-screen flex justify-center items-center p-4"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold">
            Tunisia: The Gem of the Mediterranean
          </h2>

          <p className="text-lg font-medium">
            There is so much to see and do in each region of Tunisia: a wide
            variety of landscapes, a coastline spanning 1,250km, studded with
            islands and archipelagos, a fantastic array of traditions and
            customs and a rich historical heritage.
          </p>

          <p className="text-lg font-medium">
            We are delighted to introduce you to these regions by breaking them
            down into this video.
          </p>
          <Link href="https://www.discovertunisia.com/en/" target="_blank">
            <ActionButton
              text="Discover Tunisia Official Website"
              className="max-w-sm"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cR8mH08xNVw?si=eO6cR2Br9pSUtXxb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
