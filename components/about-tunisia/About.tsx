const About = () => {
  return (
    <section className="bg-dark h-screen flex flex-col justify-center items-center p-4">
      <div className="mb-8">
        <h1 className="text-4xl text-white font-bold text-center">
          About Tunisia
        </h1>
        <p className="font-bold text-primary100 text-xl mt-4">
          Know more about Tunisia
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 w-full mt-8">
        <div className="flex flex-col max-w-xl text-center text-white md:text-left">
          <h3 className="text-3xl font-bold pb-4 text-left ml-6">Tunisia</h3>

          <p className="font-medium md:text-lg leading-relaxed mb-6">
            There’s so much to see and do in each region of Tunisia: a wide
            variety of landscapes, a coastline spanning 1,250km, studded with
            islands and archipelagos, a fantastic array of traditions and
            customs and a rich historical heritage. We are delighted to
            introduce you to these regions by breaking them down into this
            video.
          </p>
        </div>

        <div>
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
};

export default About;
