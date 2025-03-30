import TunisiaImages from "../tunisia-images";

const SneakPeek = () => {
  return (
    <section className="p-6 bg-dark text-white w-full">
      <h2 className="text-white text-center text-3xl font-bold mb-12">
        Sneak Peek
      </h2>
      <TunisiaImages isAboutUsPage={false} />
    </section>
  );
};

export default SneakPeek;
