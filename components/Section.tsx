import TextWithPattern from "./TextWithPattern";

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="bg-dark min-h-screen flex flex-col justify-center items-center py-12 px-4">
      <TextWithPattern title={title} description={description} />

      {children}
    </section>
  );
};

export default Section;
